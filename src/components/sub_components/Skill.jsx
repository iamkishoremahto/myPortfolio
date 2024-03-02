

export default function Skill(props) {
 
 
  return (
    <div className=" hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-150 ease-in-out cursor-pointer h-[70px] w-[70px] xl:h-[100px]  xl:w-[100px] skill flex items-center justify-center p-5 rounded-full  bg-gray-100">
      <img className="" src={props.data.icon} alt="skill" />
    </div>
  )
}
