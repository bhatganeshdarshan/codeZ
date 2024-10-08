import React, { useState, useEffect, useCallback } from "react";
import MonacoEditor from "@monaco-editor/react";
import Navbar from "../components/Navbar";
import { GripVertical } from "lucide-react";

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
    onChange: (newValue: string) => console.log(newValue),
  };

  const [leftWidth, setLeftWidth] = useState(50);
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

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex bg-gray-100 dark:bg-[#212121] h-screen w-screen shadow-lg">
        <div
          className="flex h-[85vh] overflow-hidden"
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
          className="w-4 bg-gray-300 cursor-col-resize flex items-center justify-center"
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
          <h1>test</h1>
        </div>
      </div>
    </div>
  );
}
