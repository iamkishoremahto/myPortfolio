import { FaMoon, FaBars } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { useState } from "react";


export default function Header(){

    const [isDark, setIsDark] = useState(false);

    const darkModeHandler = () =>{
        document.body.classList.toggle("dark");
        setIsDark(!isDark);
    }


    return(
        <>
       <div className="container flex  justify-between">
        <div className="logo">
            <h1 className="text-3xl dark:text-white">Kishore</h1>
        </div>
        <div className="screenMode  flex gap-5 items-center justify-center">
            <div onClick={darkModeHandler} className="mode p-3 bg-white rounded-full cursor-pointer hover:bg-blue-500 hover:text-white">
            {isDark?<IoSunny   className="text-1xl" />:<FaMoon className="text-1xl" />}
            </div>
            <div className="handburger p-3 bg-blue-500 cursor-pointer text-white lg:hidden rounded-full">
                <FaBars className="text-1xl" />
            </div>
        </div>
       </div>
        </>
    )
}