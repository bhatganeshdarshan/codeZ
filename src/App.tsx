import React from "react";
import HomePage from "./pages/HomePage";
import CodeEditor from "./pages/CodeEditor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contest from "./pages/Contest";
import Problems from "./pages/Problems";
import Challenge from "./pages/Challenge";
import NotFound from "./pages/NotFound";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/code" element={<CodeEditor />} />
        <Route path="/contests" element={<Contest />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
