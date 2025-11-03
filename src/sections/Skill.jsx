// ICON imports
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";

export const Skill = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <BiLogoTailwindCss />, name: "Tailwind CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node Js" },
    { icon: <BiLogoMongodb />, name: "MongoDB" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "Github" },
  ];

  return (
    <section className="w-full relative bg-black text-white flex flex-col justify-center gap-4 p-6 sm:p-8 md:p-10">
      <div className="w-20 h-20 -top-8 left-2 absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 rounded-full blur-3xl animate-pulse transition-all duration-500" />
      <div className="w-20 h-20 bottom-8 right-20 absolute bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 rounded-full blur-3xl animate-pulse transition-all duration-500" />

      <div className="w-full z-10 flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Skills
        </h1>
        <p className="font-semibold text-sm sm:text-base text-center">
          Modern application | Modern web development
        </p>
      </div>
      
      <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-15 mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-1 sm:gap-2">
            <div className="text-4xl sm:text-5xl text-purple-400 hover:scale-110 sm:hover:scale-125 transition-transform duration-200">
              {skill.icon}
            </div>
            <span className="text-blue-300 text-xs sm:text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};