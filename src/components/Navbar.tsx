import React , {useState} from "react";

import { Menu, SunMoon } from "lucide-react";

export default function Navbar(){
    const [isOpen , setIsOpen] = useState(false);
    const [isDarkMode,setIsDarkMode] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen); 
    }

    const toggleDarkMode = ()=>{
        setIsDarkMode(!isDarkMode);
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
        }else{
            document.documentElement.classList.add('dark');
        }
    }

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-lg transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            codeZ
                        </h1>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">Problems</a>
                        <a href="" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">Contests</a>
                        <a href="" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">Challenge</a>
                    </div>
                    <div className="flex items-center">
                        <button onClick={toggleDarkMode} className="text-gray-900 dark:text-white focus:outline-none mr-4">
                            <SunMoon onClick={toggleDarkMode}
                                className=""
                    />
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-900 dark:text-white focus:outline-none">
                            <Menu/>
                        </button>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className="md:hidden">
                        <a href="" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
                            Problems
                        </a>
                        <a href="" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
                            Contests
                        </a>
                        <a href="" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
                            Challenge
                        </a>
                        
                    </div>
                )
            }
        </nav>
    );
};