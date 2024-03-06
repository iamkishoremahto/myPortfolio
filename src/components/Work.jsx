import { MdWorkOutline } from "react-icons/md";
import { ProfessionalData } from "../assets/ProfessionalData";
import Professional from "./sub_components/Professional";
import { ProjectData } from "../assets/ProjectData";
import Project from "./sub_components/Project";


export default function Work() {

 

  return (
    <div className="contactUsWrapper dark:text-white flex gap-11 p-5 flex-col  ">
      <div className="resumeHeading">
        <h1 className="xl:text-5xl text-3xl font-bold  after:content-[''] lg:after:w-[200px] after:w-[100px]  after:flex after:items-center after:justify-center after:top-[50%] xl:after:left-[200px] after:left-[130px] after:h-1 after:bg-blue-700 after:translate-y-[50%] after:rounded-[300px] after:absolute relative">Work</h1>
      </div>

      <div className="workWrapper ">
        <div className="professional">
          <div className="heading flex items-center gap-5">
            <MdWorkOutline className="text-4xl  text-pink-400" />
            <h1 className=" text-2xl font-bold">Professional</h1>
          </div>
          <div className="workItems flex items-center flex-col xl:flex-row justify-around gap-5 py-5">

            {
              ProfessionalData.map((item) => {
                return <Professional key={item.id} data={item} />
              })
            }



          </div>
        </div>


      </div>

      <div className="projects">
        <div className="heading flex items-center gap-5">
          <MdWorkOutline className="text-4xl  text-pink-400" />
          <h1 className=" text-2xl font-bold">Projects</h1>
        </div>

        <div className="projectsWrapper flex flex-wrap gap-5 py-5">
        
             {
              ProjectData.map((item) =>{
                return <Project key = {item.id} data={item} />
              })
             } 

        </div>
      </div>
    </div>
  )
}
