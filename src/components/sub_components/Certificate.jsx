export default function Certificate(props) {
    return (
        <div className="education_wrapper dark:bg-black flex flex-col dark:border-[1px] border-gray-600 items-start justify-center p-5 shadow-lg bg-blue-50 rounded-xl">
            <p className="session text-gray-600 dark:text-gray-400">{props.data.session}</p>
            <p className="course text-2xl">{props.data.course}</p>
            <p className=" text-gray-600 dark:text-gray-400">{props.data.offerby}</p>
            <a href={props.data.link} target="_blank" className="text-blue-600 cursor-pointer dark:text-gray-400 italic text-[12px]">View</a>
        </div>
    )
}