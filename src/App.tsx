import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App : React.FC = () =>{
    return(
        <div>
            <Navbar></Navbar>
            <h1>Home page text</h1>
            <h3>desc</h3>
            <Footer/>
        </div>
    );
};

export default App ;