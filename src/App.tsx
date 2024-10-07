import React from "react";
import HomePage from "./pages/HomePage";
import CodeEditor from "./pages/CodeEditor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/code" element={<CodeEditor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
