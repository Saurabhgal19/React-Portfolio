import React, { useEffect, useState } from 'react'
import { Sun, Moon  } from "lucide-react";
import {cn} from "../lib/utils" 

export const ThemeToggle = () => {

    const[isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if(storedTheme == "dark" || !storedTheme) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark'); 
            localStorage.setItem("theme", "dark");
        }
        else {
             setIsDarkMode(false);
             document.documentElement.classList.remove('dark');
        }
    },[])

    const toggelTheme = () => {
        if(isDarkMode) {
        
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);

        }
        else {
        document.documentElement.classList.add('dark');
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
        }
    }

  return <button onClick={toggelTheme } 
         className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-color duration-300",
         "focus:outlin-hidden ")}> 
         {
             isDarkMode ? ( 
                <Sun className="h-6 w-6 text-yellow-300" /> 
                ) : ( 
                    <Moon className='h-6 w-6 text-blue-300' /> 
            )}
   </button>
}
