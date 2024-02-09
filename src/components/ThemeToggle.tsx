import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GoSun } from "react-icons/go";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        // <div
        //     className="relative w-16 h-8 flex items-center dark:bg-white bg-black cursor-pointer rounded-full p-1"
        //     onClick={() => setDarkMode(!darkMode)}
        // >
        //     <BsFillMoonStarsFill className="text-white" size={18} />
        //     <div className="absolute bg-white dark:bg-black w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        //         style={darkMode ? { left: "2px" } : { right: "2px" }}
        //     ></div>
        //     <BsSunFill className="ml-auto text-black-400" size={18} />
        // </div>
        // <div
        //     className="cursor-pointer ml-8 bg-slate-200 dark:bg-dark_mode p-3 shadow-sm rounded-xl"
        //     onClick={() => setDarkMode(!darkMode)}
        // >
        <div
            className="cursor-pointer ml-2 p-3 rounded-xl"
            onClick={() => setDarkMode(!darkMode)}
        >
            {darkMode ? <GoSun className="text-white" size={20} /> : <BsFillMoonStarsFill className="text-black" size={20} />}
        </div>
    )
}

export default ThemeToggle