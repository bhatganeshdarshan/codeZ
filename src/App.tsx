import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import CodeEditor from "./pages/CodeEditor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contest from "./pages/Contest";
import Problems from "./pages/Problems";
import Challenge from "./pages/Challenge";
import NotFound from "./pages/NotFound";
const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

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
        <Route path="/problems" element={<Problems />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
