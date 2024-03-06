/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Project(props) {
    const [isHover, setIsHover] = useState(false);
  return (
    <div className="project  "
    onMouseEnter={() => {
      setIsHover(true)
    }}

    onMouseLeave={() => {
      setIsHover(false)
    }}
  >
    <a href={props.data.projectLink} target="_blank" className=" relative min-h-full min-w-full overflow-hidden flex items-center justify-center rounded-md shadow-xl border-2 border-gray-100 dark:border-gray-800">
      <div className={` ${isHover ? "scale-105" : "scale-100"} flex items-center justify-center z-[500] bg-blue-400 opacity-0 hover:opacity-90  ${isHover ? "min-h-full min-w-full" : "min-h-[0px] min-w-[0px]"} absolute transition-all ease-in-out duration-500 delay-75  `}>
        <h1 className="text-2xl font-bold text-white">{props.data.projectName}</h1>
      </div>
      <img className={`${isHover ? "scale-105" : "scale-100"} transition-all ease-in-out duration-300`} src={props.data.projectImage} alt="project" />
    </a>
  </div>
  )
}
