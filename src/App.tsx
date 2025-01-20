import React, { useState,useEffect } from "react";
import HomePage from "./pages/HomePage";
import CodeEditor from "./pages/CodeEditor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contest from "./pages/Contest";
import Problems from "./pages/Problems";
import Challenge from "./pages/Challenge";
import NotFound from "./pages/NotFound";
import ProblemDetail from "./pages/ProblemDetail";
const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem("isDarkMode") === "true"
  );

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode); 
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode); 
  }, [isDarkMode]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/code"
          element={
            <CodeEditor
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
        <Route path="/contests" element={<Contest />} />
        <Route path="/problems" element={<Problems isDarkMode ={isDarkMode} toggleDarkMode ={toggleDarkMode} />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="*" element={<NotFound />} />
        <Route
  path="/problems/:id"
  element={<ProblemDetail isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
