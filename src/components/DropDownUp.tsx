import React, { useEffect, useRef, useState } from "react";
import { ChevronUp, Languages } from "lucide-react";

export default function DropDownUp() {
  const [isExpand, setIsExpand] = useState(false);
  const languages = ["C++", "Python", "JavaScript", "Java"];
  const [selectLang, setSelectLang] = useState(languages[0]);

  const dropRef = useRef(null);

  function toggleDropdown() {
    setIsExpand(!isExpand);
  }

  function selectLanguage(idx: number) {
    setSelectLang(languages[idx]);
    setIsExpand(false);
  }

  useEffect(() => {
    function handleClicks(event) {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setIsExpand(false);
      }
    }
    document.addEventListener("mousedown", handleClicks);
    return () => {
      document.removeEventListener("mousedown", handleClicks);
    };
  }, [dropRef]);

  return (
    <div className="relative inline-block" ref={dropRef}>
      {" "}
      <button
        type="button"
        onClick={toggleDropdown}
        className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
      >
        {selectLang}
      </button>
      {isExpand && (
        <div className="absolute bottom-full mb-2 w-32 bg-gray-100 dark:bg-gray-700 text-black dark:text-white z-20 py-2 rounded-lg shadow-lg">
          {" "}
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
              onClick={() => selectLanguage(idx)}
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
