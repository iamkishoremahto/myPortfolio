import { FaFacebookF,FaGithub,FaInstagram } from "react-icons/fa";
import { FaLocationDot,FaRegCalendarDays } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiDownloadLight } from "react-icons/pi";

export default function Intro(){
    return(
        <>
        <div className="  rounded-3xl  dark:text-white dark:bg-black bg-white p-4 min-w-[350px]  max-w-[350px] gap-9 lg:min-w-[400px] min-h-[720px] flex flex-col  items-center  xl:sticky xl:top-[180px]">
            <div className=" absolute top-[-150px] ">
                <img src="/images/profile.webp" alt="profile" className="profilePic rounded-3xl" />
            </div>
            <div className="personalInfo pt-[100px] flex flex-col justify-center items-center gap-5">
                <div className="name">
                    <p className="text-2xl lg:text-3xl font-bold">Kishore Kumar Mahto</p>
                </div>
                <div className="designation flex items-center justify-center">
                    <p className=" bg-gray-100 h-8 w-[180px] mt-0 flex items-center justify-center rounded-md font-medium dark:bg-gray-700 dark:text-gray-300" >Software Engineer</p>
                </div>
                <div className="socialProfiles  flex items-center justify-evenly  gap-3">
                    <a href="#" className="social shadow-2xl text-blue-700 hover:text-white">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="social shadow-2xl hover:text-white">
                        <FaGithub />
                    </a>

                    <a href="#" className="social shadow-2xl text-pink-600 hover:text-white">
                        <FaInstagram />
                    </a>

                    <a href="#" className="social shadow-2xl text-blue-400 hover:text-white">
                        <SiFrontendmentor />
                    </a>
                </div>
            </div>
            <div className="Contact bg-gray-50 dark:bg-gray-900 min-w-[90%] gap-3 rounded-lg flex flex-col justify-center items-center p-5">
                <div className="phone border-b-[1px] pb-2 min-w-[95%] flex items-center gap-2">
                    <div className="icon shadow-2xl text-pink-500 hover:text-white">
                        <HiOutlineDevicePhoneMobile />
                    </div>
                    <div className="info">
                        <p className= " text-gray-500 text-sm">Phone</p>
                        <a href="tel:+918340317197">+91 8340317197</a>
                    </div>
                </div>

                <div className="email border-b-[1px] pb-2 min-w-[95%] flex items-center gap-2">
                    <div className="icon shadow-2xl text-green-600 hover:text-white">
                        <LiaEnvelopeOpenTextSolid />
                    </div>
                    <div className="info">
                        <p className= " text-gray-500 text-sm">Email</p>
                        <a href="mailto:iamkishoremahto@gmail.com">iamkishoremahto@gmail.com</a>
                    </div>
                </div>

                <div className="location border-b-[1px] pb-2 min-w-[95%] flex items-center gap-2">
                    <div className="icon shadow-2xl text-pink-500 hover:text-white">
                        <FaLocationDot />
                    </div>
                    <div className="info">
                        <p className= " text-gray-500 text-sm">Location</p>
                        <p>Bangalore, Karnataka</p>
                    </div>
                </div>

                <div className="birthday  min-w-[95%] flex items-center gap-2">
                    <div className="icon shadow-2xl text-pink-400 hover:text-white">
                        <FaRegCalendarDays />
                    </div>
                    <div className="info">
                        <p className= " text-gray-500 text-sm">Date Of Birth</p>
                        <p>Sep, 15, 2000</p>
                    </div>
                </div>
            </div>
            <div className="cv">
            
                <a href="#" className="flex text-lg items-center justify-center min-w-[250px] dark:hover:text-white dark:hover:bg-black gap-2 bg-blue-500 text-white font-bold hover:bg-white hover:border-[1px] border-[1px] border-blue-500  hover:border-blue-500 hover:text-blue-500 transition-all ease-in-out duration-150 py-4 rounded-lg"><span><PiDownloadLight /></span>Download CV</a>
            </div>
        </div>
        </>
    )
}