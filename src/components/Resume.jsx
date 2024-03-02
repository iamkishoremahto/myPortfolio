
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { skills } from "../assets/SkillData";
import Skill from "./sub_components/Skill";
import { GiSkills } from "react-icons/gi";
import SoftSkill from "./sub_components/SoftSkill";
import { SoftSkillData } from "../assets/SoftSkillData";

export default function Resume() {
  return (
    <>
      <div className="resumeWrapper xl:p-8 flex flex-col gap-5 items-start dark:text-white">
        <div className="resume flex flex-col gap-5">
          <div className="resumeHeading">
            <h1 className="xl:text-5xl text-3xl font-bold  after:content-[''] lg:after:w-[200px] after:w-[100px]  after:flex after:items-center after:justify-center after:top-[50%] xl:after:left-[200px] after:left-[130px] after:h-1 after:bg-blue-700 after:translate-y-[50%] after:rounded-[300px] after:absolute relative">Resume</h1>
          </div>

          <div className="skillsWrapper xl:flex-row flex-col flex">
            <div className="technicalSkillsWrapper xl:w-[50%] flex flex-col gap-7 p-2">
              <div className="heading flex items-center gap-5">
                <MdOutlineSettingsSuggest className="text-4xl  text-pink-400" />
                <h1 className=" text-2xl font-bold">Technical Skills</h1>
              </div>

              <div className="technicalSkill flex flex-wrap items-center justify-center gap-5">

                {
                  skills.map((skill) => {
                    return <Skill key={skill.id} data={skill} />
                  }

                  )
                }

              </div>
            </div>

            <div className="softSkillWrapper flex flex-col gap-7 p-2">
              <div className="heading flex items-center gap-5">
                <GiSkills className="text-4xl  text-pink-400" />
                <h1 className=" text-2xl font-bold">Soft Skills</h1>
              </div>

              <div className="softSkills flex flex-wrap items-center justify-center gap-5">

               {
                SoftSkillData.map((item) => {
                  return <SoftSkill key = {item.key} data = {item} />
                })
               }

              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}
