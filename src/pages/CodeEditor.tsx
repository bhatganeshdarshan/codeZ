import React, { useState, useEffect, useCallback } from "react";
import MonacoEditor from "@monaco-editor/react";
import Navbar from "../components/Navbar";
import { GripVertical } from "lucide-react";
import { submitCode, checkSubmissionResult } from "../api/executeCode";
import SubmitButton from "../components/SubmitButton";

interface EditorOptions {
  height: string;
  language: string;
  theme: string;
  options: {
    selectOnLineNumbers: boolean;
    automaticLayout: boolean;
    autoIndent: string;
    contextmenu: boolean;
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
    hideCursorInOverviewRuler: boolean;
    matchBrackets: string;
    minimap: {
      enabled: boolean;
    };
    scrollbar: {
      horizontalSliderSize: number;
      verticalSliderSize: number;
    };
    roundedSelection: boolean;
    readOnly: boolean;
    cursorStyle: string;
  };
  value: string;
  onChange: (newValue: string) => void;
}

export default function CodeEditor({ isDarkMode, toggleDarkMode }) {
  const [code, setCode] = useState("");

  const editorOptions: EditorOptions = {
    height: "100",
    language: "cpp",
    theme: isDarkMode ? "vs-dark" : "vs",
    options: {
      selectOnLineNumbers: true,
      automaticLayout: true,
      autoIndent: "full",
      contextmenu: true,
      fontFamily: "Fira Code , monospace",
      fontSize: 16,
      lineHeight: 24,
      hideCursorInOverviewRuler: true,
      matchBrackets: "always",
      minimap: {
        enabled: true,
      },
      scrollbar: {
        horizontalSliderSize: 4,
        verticalSliderSize: 18,
      },
      roundedSelection: false,
      readOnly: false,
      cursorStyle: "line",
    },
    value: "// Write Code Here",
    onChange: (newValue: string) => {
      setCode(newValue);
      console.log(code);
    },
  };

  const [leftWidth, setLeftWidth] = useState(70);
  const [isDragging, setIsDragging] = useState(false);
  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const newWidth = (e.clientX / window.innerWidth) * 100;
      setLeftWidth(Math.max(20, Math.min(90, newWidth)));
    },
    [isDragging],
  );

  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // const getOutput = async () => {
  // try {
  //console.log("this is my code : ", code);
  // const token = await submitCode(code);
  //console.log(token);
  //const out = await checkSubmissionResult(token);
  //console.log(out);
  //const { stdout, stderr, status_id, language_id } = out;
  //if (status_id?.description == "Accepted") {
  //  setOutput(stdout);
  //} else if (stderr) {
  //  setOutput(`Error : ${stderr} `);
  //} else {
  // setOutput(`Unknown error : ${status_id?.description}`);
  //}
  //} catch (error) {
  //    setOutput(`${error}`);
  //    }
  //  };

  const getOutput = async () => {
    setLoading(true);
    try {
      const token = await submitCode(code);
      console.log("Submission token:", token);

      const checkStatus = async (token) => {
        const response = await checkSubmissionResult(token);
        return response;
      };

      let response = await checkStatus(token);
      console.log("Initial check output:", response);

      // Polling loop
      while (response.status_id === 1) {
        console.log("Code is still processing...");
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
        response = await checkStatus(token);
        console.log("Updated check output:", response);
      }

      const { stdout, stderr, status_id, compile_output, status } = response;

      if (status_id === 3) {
        setOutput(atob(stdout) || "No output produced.");
      } else if (stderr) {
        setOutput(`Error: ${stderr}`);
      } else {
        setOutput(`Error : ${status?.description} => ${atob(compile_output)}`);
      }
      setLoading(false);
    } catch (error) {
      setOutput(`Error: ${error.message || error}`);
      setLoading(false);
    }
  };

  return (
    <div className="flex-row">
      <div>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex bg-gray-100 dark:bg-[#212121] h-[80vh] w-screen shadow-lg">
          <div
            className="flex h-[80vh] overflow-hidden"
            style={{ width: `${leftWidth}%` }}
          >
            <MonacoEditor
              height={editorOptions.height}
              language={editorOptions.language}
              theme={editorOptions.theme}
              options={editorOptions.options}
              value={editorOptions.value}
              onChange={editorOptions.onChange}
            />
          </div>
          <div
            className="w-4 h-[80vh] bg-gray-300 cursor-col-resize flex items-center justify-center shadow-lg"
            onMouseDown={handleMouseDown}
          >
            <div
              className={`transition-opacity duration-300 ${isDragging ? "opacity-100" : "opacity-0"}`}
            >
              <GripVertical className="text-gray-600" />
            </div>
          </div>
          <div
            className="overflow-hidden"
            style={{ width: `${100 - leftWidth}%` }}
          >
            <h1 className="text-black dark:text-white">
              {output || "Run your code to get the output here "}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[11vh] w-full bg-white dark:bg-gray-700">
        <SubmitButton loading={loading} getOutput={getOutput} />
      </div>
    </div>
  );
}
