
import { useState } from 'react'

export default function Contact() {

  const [nameColor, setNameColor] = useState('text-black')

  

  return (
    <>
      <div className="contactUsWrapper dark:text-white flex gap-5 p-5 flex-col ">
        <div className="resumeHeading">
          <h1 className="xl:text-5xl text-3xl font-bold  after:content-[''] lg:after:w-[200px] after:w-[100px]  after:flex after:items-center after:justify-center after:top-[50%] xl:after:left-[200px] after:left-[130px] after:h-1 after:bg-blue-700 after:translate-y-[50%] after:rounded-[300px] after:absolute relative">Contact</h1>
        </div>

        <div className="contact bg-gray-100 dark:bg-gray-900 flex flex-col gap-11 p-5 rounded-3xl min-h-[600px]">
            <div className="message">
              <p className=" text-3xl text-gray-700">I'm Always Open To Disscuss</p>
            </div>
            <div className="contactForm">
              <form action="#">

              <div className="inputWrapper flex flex-col">
              <label htmlFor="name" className={nameColor}>
                  Name *
                </label>

                <input required type="text" name="name" id="name" className={`focus:text-red-600 focus:border-b-red-600 bg-transparent h-5 border-b-[1px] outline-none focus:outline-none focus:h-11 transition-all ease-linear duration-200 focus:${() =>{
                  setNameColor('text-red-600')
                }} `}  />
              </div>
                
              </form>
            </div>
        </div>
      </div>
    </>
  )
}
