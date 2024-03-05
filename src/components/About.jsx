
import WhatDo from "./sub_components/WhatDo"
import { whatToDo } from "../assets/WhatToDoData"
import { AboutData } from "../assets/AboutData"

export default function About() {
  return (
    <>
      <div className="about_us_wrapper xl:p-8 flex flex-col gap-5 items-start dark:text-white">
        <div className="about flex flex-col gap-5">
          <h1 className="xl:text-5xl text-3xl font-bold  after:content-[''] lg:after:w-[200px] after:w-[100px]  after:flex after:items-center after:justify-center after:top-[50%] xl:after:left-[150px] after:left-[100px] after:h-1 after:bg-blue-700 after:translate-y-[50%] after:rounded-[300px] after:absolute relative">About</h1>
          <p className=" text-gray-700 dark:text-gray-400">{AboutData[0]}</p>
          <p className=" text-gray-700 dark:text-gray-400">{AboutData[1]}

          </p>
        </div>

        <div className="what_i_do">
          <h1 className="xl:text-5xl text-3xl font-bold ">What I do!</h1>
          <div className="do_cards mt-11 flex flex-wrap items-center justify-center gap-5">

            {

              whatToDo.map((item) => {
                return <WhatDo key={item.id} data={item} />
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}
