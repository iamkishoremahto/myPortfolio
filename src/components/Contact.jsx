/* eslint-disable react/no-unescaped-entities */

import { useState, useRef } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {

  const [isNameClicked, setNameClicked] = useState(false)
  const [isEmailClicked, setEmailClicked] = useState(false)
  const [isMessageClicked, setMessageClicked] = useState(false)
  const namelabel = useRef()
  const emaillabel = useRef()
  const messagelabel = useRef()
  const formRef = useRef()

  const nameClickHander = () => {

    setNameClicked(true)
    namelabel.current.classList.add('text-pink-600');
  }

  const emailClickHander = () => {

    setEmailClicked(true)
    emaillabel.current.classList.add('text-blue-600');
  }
  const messageClickHander = () => {

    setMessageClicked(true)
    messagelabel.current.classList.add('text-pink-900');
  }


  const contactButtonHandler = (event) => {
    event.preventDefault();
    const formDataObjects = {}
    const formData = new FormData(formRef.current);
    for (let [name, value] of formData.entries()) {

      formDataObjects[name] = value;
    }
    console.log(formDataObjects)
    const sentStatus = true;

    if (sentStatus) {
      toast.success('Email Sent Successfully....', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    else {

      toast.error('Email Sent Unsucess ....', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

  }
  return (
    <>
      <div className="contactUsWrapper dark:text-white flex gap-5 p-5 flex-col ">
        <div className="resumeHeading">
          <h1 className="xl:text-5xl text-3xl font-bold  after:content-[''] lg:after:w-[200px] after:w-[100px]  after:flex after:items-center after:justify-center after:top-[50%] xl:after:left-[200px] after:left-[130px] after:h-1 after:bg-blue-700 after:translate-y-[50%] after:rounded-[300px] after:absolute relative">Contact</h1>
        </div>

        <div className="contact bg-gray-50 dark:bg-gray-900 flex flex-col gap-11 p-10 rounded-3xl min-h-[600px]">
          <div className="message">
            <p className=" text-3xl text-gray-700 dark:text-gray-300">I'm Always Open To Disscuss ...</p>
          </div>
          <div className="contactForm ">
            <form ref={formRef} onSubmit={contactButtonHandler} className='flex flex-col gap-10 min-h-full  justify-center'>

              <div className="inputWrapper flex flex-col">
                <label htmlFor="name" ref={namelabel} className=' cursor-text'  >
                  Name *
                </label>

                <input onClick={nameClickHander} required type="text" name="name" id="name" className={`focus:text-pink-600 bg-transparent ${isNameClicked ? "h-11 border-b-pink-600" : "h-5"} border-b-[1px] outline-none focus:outline-none transition-all ease-linear duration-400 `} />
              </div>

              <div className="inputWrapper flex flex-col">
                <label htmlFor="email" ref={emaillabel} className=' cursor-text'  >
                  Email *
                </label>

                <input onClick={emailClickHander} required type="email" name="email" id="email" className={`focus:text-blue-600 bg-transparent ${isEmailClicked ? "h-11 border-b-blue-600" : "h-5"} border-b-[1px] outline-none focus:outline-none transition-all ease-linear duration-400 `} />
              </div>

              <div className="inputWrapper flex flex-col">
                <label htmlFor="message" ref={messagelabel} className=' cursor-text'  >
                  Message *
                </label>

                <textarea onClick={messageClickHander} required name="message" id="message" className={`focus:text-pink-900 bg-transparent ${isMessageClicked ? "h-[150px] border-b-pink-900" : "h-5"} border-b-[1px] outline-none focus:outline-none transition-all ease-linear duration-400 `} />
              </div>

              <div className="submitBtnWrapper flex items-center justify-center xl:justify-start">
                <button className='border-[1px] dark:border-gray-600 dark:hover:border-blue-600  dark:hover:bg-transparent shadow-sm text-[20px] font-bold transition-all ease-in-out duration-150 hover:bg-blue-600 hover:border-blue-600 hover:text-white border-black w-[170px] h-[50px] rounded-2xl'>Submit</button>
              </div>
            </form>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
          />




        </div>
      </div>
    </>
  )
}
