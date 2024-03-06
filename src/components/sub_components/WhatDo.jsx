/* eslint-disable react/prop-types */


export default function WhatDo(props) {
    return (
        <div className={`card rounded-2xl justify-center items-start min-h-[450px]  flex dark:border-[1px] ${props.data.color} dark:border-gray-600 dark:bg-black xl:max-w-[370px] min-h-[220px]`}>

            <div className="details flex  justify-between flex-col p-5">
                <div className="flex flex-col xl:flex-row items-center gap-2">
                    <img className="  w-[50px]" src={props.data.icon} alt="web" />
                    <h1 className=" text-2xl font-bold">{props.data.title}</h1>
                </div>
                <p className=" mt-5 xl:pl-[60px]  text-justify text-wrap text-gray-700 dark:text-gray-400">{props.data.content}</p>
            </div>
        </div>
    )
}
