import { FaGithub,FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot,FaRegCalendarDays } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiDownloadLight } from "react-icons/pi";
import { IntroData } from "../assets/IntroData";

export default function Intro(){
    return(
        <>
        <div className="  rounded-3xl  dark:text-white dark:bg-black bg-white p-4 min-w-[350px]  max-w-[350px] gap-9 lg:min-w-[400px] min-h-[720px] flex flex-col  items-center  xl:sticky xl:top-[180px]">
            <div className=" absolute xl:top-[-180px] top-[-150px]  ">
                <img src={IntroData.profilePic} alt="profile" className="profilePic max-h-[260px] rounded-3xl shadow-lg " />
            </div>
            <div className="personalInfo pt-[100px] flex flex-col justify-center items-center gap-5">
                <div className="name">
                    <p className="text-2xl lg:text-3xl font-bold">{IntroData.name}</p>
                </div>
                <div className="designation flex items-center justify-center">
                    <p className=" bg-gray-100 h-8 w-[180px] mt-0 flex items-center justify-center rounded-md font-medium dark:bg-gray-700 dark:text-gray-300" >{IntroData.designation}</p>
                </div>
                <div className="socialProfiles  flex items-center justify-evenly  gap-3">
                   
                    <a href="https://github.com/iamkishoremahto" target="_blank" className="social shadow-2xl hover:text-white">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/kishore-mahto-843529228?lipi" target="_blank" className="social shadow-2xl hover:text-white text-blue-600">
                        <FaLinkedinIn />
                    </a>

                    

                    <a href="https://www.frontendmentor.io/profile/iamkishoremahto" target="_blank" className="social shadow-2xl text-blue-400 hover:text-white">
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
                        <a href="tel:+918340317197">{IntroData.mobile}</a>
                    </div>
                </div>

                <div className="email border-b-[1px] pb-2 min-w-[95%] flex items-center gap-2">
                    <div className="icon shadow-2xl text-green-600 hover:text-white">
                        <LiaEnvelopeOpenTextSolid />
                    </div>
                    <div className="info">
                        <p className= " text-gray-500 text-sm">Email</p>
                        <a href="mailto:iamkishoremahto@gmail.com">{IntroData.email}</a>
                    </div>
                </div>

                <div className="location border-b-[1px] pb-2 min-w-[95%] flex items-center gap-2">
                    <div className="icon shadow-2xl text-pink-500 hover:text-white">
                        <FaLocationDot />
                    </div>
                    <div className="info">
                        <p className= " text-gray-500 text-sm">Location</p>
                        <p>{IntroData.location}</p>
                    </div>
                </div>

                <div className="birthday  min-w-[95%] flex items-center gap-2">
                    <div className="icon shadow-2xl text-pink-400 hover:text-white">
                        <FaRegCalendarDays />
                    </div>
                    <div className="info">
                        <p className= " text-gray-500 text-sm">Date Of Birth</p>
                        <p>{IntroData.dob}</p>
                    </div>
                </div>
            </div>
            <div className="cv">
            
                <a href={IntroData.resumeLink} target="_blank" className="flex text-lg items-center justify-center min-w-[250px] dark:hover:text-white dark:hover:bg-black gap-2 bg-blue-500 text-white font-bold hover:bg-white hover:border-[1px] border-[1px] border-blue-500  hover:border-blue-500 hover:text-blue-500 transition-all ease-in-out duration-150 py-4 rounded-lg"><span><PiDownloadLight /></span>Download CV</a>
            </div>
        </div>
        </>
    )
}