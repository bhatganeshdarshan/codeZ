import React, { useState } from "react";
import { Menu, SunMoon } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}


export default function Navbar({ isDarkMode, toggleDarkMode }:NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen , setProfileOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileOpen = () =>{
    setProfileOpen(!isProfileOpen);
    console.log("profile : ",isProfileOpen); 
  }

  // const toggleDarkMode = () => {
  // setIsDarkMode(!isDarkMode);
  // if (isDarkMode) {
  // document.documentElement.classList.remove("dark");
  // } else {
  // document.documentElement.classList.add("dark");
  // }
  // };

  return (
    <nav className="bg-white dark:bg-[#171717] shadow-lg transition-all duration-300 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              codeZ
            </h1>
          </div>
          <div className="hidden md:flex space-x-4 ml-auto px-16">
          <Link
  to="/problems"
  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white"
>
  Problems
</Link>
            <a
              href="/contests"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white"
            >
              Contests
            </a>
            <a
              href="/challenge"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white"
            >
              Challenge
            </a>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-white focus:outline-none mr-4"
            >
              <SunMoon onClick={toggleDarkMode} className="" />
            </button>
          </div>
          <div className="w-7 h-7 mx-5 rounded-full border border-transparent hover:border-blue-500 transition duration-300">
            <img src="https://avatar.iran.liara.run/public/13" alt="avatar" className="w-full h-full rounded-full" onClick={
              ()=>{
                toggleProfileOpen();
              }
            }/>
          </div>
          {isProfileOpen && (
              <div className="absolute right-0 mt-44 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-10">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  My Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Settings
                </a>
                <button
                  onClick={() => alert("Logged Out!")}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            )}

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white focus:outline-none"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a
            href="/problems"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Problems
          </a>
          <a
            href="/contests"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Contests
          </a>
          <a
            href="/Challenge"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Challenge
          </a>
        </div>
      )}
    </nav>
  );
}
