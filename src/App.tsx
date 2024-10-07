import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
const App: React.FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home />
      <Footer />
    </div>
  );
};

export default App;

