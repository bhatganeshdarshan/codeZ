import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { renderToHTML } from "next/dist/server/render";

export default function ProblemDetail({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) {
  const { id } = useParams<{ id: string }>();
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    import(`../../public/questions/${id}.md`)
      .then((module) => fetch(module.default).then((res) => res.text()))
      .then((text) => setMarkdownContent(text))
      .catch((error) => {
        console.error("Error loading Markdown file:", error);
        setMarkdownContent("Problem description not available.");
      });
  }, [id]);

  if (!id) {
    return (
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-[#171717] text-white" : "bg-white text-black"
        } flex items-center justify-center`}
      >
        <h1>Problem not found</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-[#171717] text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex p-6 gap-4">
          <div className="w-1/2 border-r pr-4">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
          </div>

          {/* Right Half: Other Details */}
          <div className="w-1/2 pl-4">
            <h1 className="text-4xl font-bold mb-4">Problem {id}</h1>
            <p className="text-gray-400">
              This is where additional details or related functionality can go.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
