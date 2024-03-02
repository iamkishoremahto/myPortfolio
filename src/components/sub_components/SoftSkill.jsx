/* eslint-disable react/prop-types */


export default function SoftSkill(props) {
  return (
    <div className="s_skill flex flex-col items-center justify-center gap-2">
                  <div className=" flex-col hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-150 ease-in-out cursor-pointer h-[70px] w-[70px] xl:h-[100px]  xl:w-[100px] skill flex items-center justify-center p-5 rounded-full  bg-gray-100">
                    <img className="h-11" src={props.data.icon} alt="s_skill" />
                    
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 ">{props.data.skill}</p>
                </div>
  )
}
