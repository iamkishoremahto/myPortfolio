/* eslint-disable react/prop-types */


export default function Professional(props) {
  return (
    <div className="p_work bg-blue-100 dark:bg-black dark:border-[1px] border-gray-700 p-5 w-full rounded-2xl">
    <p className=" text-gray-700 dark:text-gray-400 text-[14px]">{props.data.session}</p>
    <h1 className="text-2xl font-bold">{props.data.designation}</h1>
    <p className="text-gray-700 dark:text-gray-400">{props.data.company}</p>
    <p className="text-gray-700 dark:text-gray-400 text-[13px]">{props.data.location}</p>
  </div>
  )
}
