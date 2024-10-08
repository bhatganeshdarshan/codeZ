import MonacoEditor from "react-monaco-editor";
import Navbar from "../components/Navbar";

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

export default function CodeEditor() {
  const editorOptions: EditorOptions = {
    height: "400",
    language: "javascript",
    theme: "vs-dark",
    options: {
      selectOnLineNumbers: true,
      automaticLayout: true,
      autoIndent: "full",
      contextmenu: true,
      fontFamily: "monospace",

      fontSize: 13,
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
    value: " // Write Code Here ",
    onChange: (newValue: string) => console.log(newValue),
  };
  return (
    <div>
      <Navbar />
      <div className="flex bg-gray-100 dark:bg-[#212121] h-screen w-screen shadow-lg">
        <div className="flex h-24 w-screen">
          <MonacoEditor
            height={editorOptions.height}
            language={editorOptions.language}
            theme={editorOptions.theme}
            options={editorOptions.options}
            value={editorOptions.value}
            onChange={editorOptions.onChange}
          />
        </div>
      </div>
    </div>
  );
}
