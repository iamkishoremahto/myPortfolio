
import { NavLink } from "react-router-dom";
import { FaRegUser,FaRegFileLines } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegAddressBook } from "react-icons/fa";

export default function Navigation() {
    return (
        <>
        <div className="wrapper min-h-[800px] hidden xl:block xl:sticky xl:top-[250px]">
        <div className="navigationWrapper dark:bg-black  min-h-[600px] bg-white min-w-[150px] rounded-xl flex flex-col items-center justify-evenly">
                <NavLink to="/" 
                className={({ isActive }) =>
                    `flex flex-col items-center  justify-center transition-all shadow-md ease-in-out duration-150  hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-semibold gap-2  ${isActive ? "bg-blue-500 text-white " : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400"} rounded-2xl h-[100px] w-[100px]`
                }>

                    <FaRegUser className=" font-semibold text-2xl" />
                    <p>About</p>
                </NavLink>

                <NavLink to="/resume" 
                className={({ isActive }) =>
                    `flex flex-col items-center  justify-center transition-all shadow-md ease-in-out duration-150  hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-semibold gap-2  ${isActive ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400"} rounded-2xl h-[100px] w-[100px]`
                }>

                    <FaRegFileLines className=" font-semibold text-2xl" />
                    <p>Resume</p>
                </NavLink>

                <NavLink to="/work" 
                className={({ isActive }) =>
                    `flex flex-col items-center  justify-center transition-all shadow-md ease-in-out duration-150  hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-semibold gap-2  ${isActive ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400"} rounded-2xl h-[100px] w-[100px]`
                }>

                    <IoBriefcaseOutline className=" font-semibold text-2xl" />
                    <p>Work</p>
                </NavLink>

                <NavLink to="/contact" 
                className={({ isActive }) =>
                    `flex flex-col items-center  justify-center transition-all shadow-md ease-in-out duration-150  hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-semibold gap-2  ${isActive ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800 dark:bg-gray-900  dark:text-gray-400"} rounded-2xl h-[100px] w-[100px]`
                }>

                    <FaRegAddressBook className=" font-semibold text-2xl" />
                    <p>Contact</p>
                </NavLink>
            </div>
        </div>
            
        </>
    )
}