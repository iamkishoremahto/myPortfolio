

export default function Education(props) {
    return (
        <div className="education_wrapper dark:bg-black flex flex-col dark:border-[1px] border-gray-600 items-start justify-center p-5 shadow-lg bg-red-50 rounded-xl">
            <p className="session text-gray-600 dark:text-gray-400">{props.data.session}</p>
            <p className="course text-2xl">{props.data.course} <span className=" text-gray-600">{props.data.department ? `(${props.data.department})` : ``}</span></p>
            <p className=" text-gray-600 dark:text-gray-400">{props.data.university}</p>
            <p className=" text-gray-600 dark:text-gray-400 italic text-[12px]">{props.data.location}</p>
        </div>
    )
}
