import React from "react";

interface Skill {
  title: string;
  hash: string;
  icon?: any;
  color?: any;
  link?: string;
}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly skills: readonly Skill[];
}

interface SkillSectionProps {
  skillsData: readonly SkillCategory[];
  theme: "dark" | "light";
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsData, theme }) => {
  const getSkillIconSrc = (theme: string, skill: Skill) => {
    if (
      theme === "dark" &&
      (skill.title.includes("Next") || skill.title.includes("Express"))
    ) {
      return skill.icon[1];
    } else if (skill.title !== "Next.js" && skill.title !== "Express") {
      return skill.icon;
    } else {
      return skill.icon[0];
    }
  };

  const getSkillColor = (theme: string, skill: Skill) => {
    if (
      theme === "dark" &&
      (skill.title.includes("Next") || skill.title.includes("Express"))
    ) {
      return skill.color[1];
    } else if (skill.title !== "Next.js" && skill.title !== "Express") {
      return skill.color;
    } else {
      return skill.color[0];
    }
  };

  return (
    <article
      className={`h-auto rounded-2xl p-16 pt-32 grid grid-cols-2 gap-10 relative z-10 max-lg:w-full max-lg:p-8  max-lg:pt-32 justify-center${
        theme === "dark"
          ? "bg-[--blackblue] dark-mode-shadow"
          : "bg-[--icewhite] dark-shadow"
      }`}
    >
      <div
        className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2  rounded-t-xl `}
      >
        <p className="font-black text-4sxl text-center whitespace-nowrap">
          {skillsData[0].skillsTitle}
        </p>
      </div>
      {skillsData[0].skills.map((skill, index) => (
          <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
          >
            <div
                className={`skill-item 
                   cursor-pointer flex flex-col gap-6 rounded-2xl p-8 border-solid border-[0.25rem] text-center items-center 
                   justify-center
                   w-[18rem] h-[18rem]
                   max-xl:w-[14rem] max-xl:h-[14rem]
                   max-lg:w-[16rem] max-lg:h-[16rem] 
                   
                   ${
                    theme === "dark" ? "bg-[--darkblue]" : "bg-[--icewhite]"
                }`}
                style={{
                  borderColor: getSkillColor(theme, skill),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.animation = "pulse 2s infinite";
                  e.currentTarget.style.transform = "scale(1)";
                  document.documentElement.style.setProperty(
                      "--box-shadow-color",
                      `${getSkillColor(theme, skill)}b3`
                  );
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animation = "";
                  e.currentTarget.style.transform = "";
                  document.documentElement.style.setProperty(
                      "--box-shadow-color",
                      "inherit"
                  );
                }}
            >
              <img
                  src={getSkillIconSrc(theme, skill)}
                  alt={`${skill.icon}-icon`}
                  className={`
                    ${skill.hash === "#Wera" ? "w-[130%] max-w-none": ""}
                    ${skill.hash === "#Suedbau" ? "w-[66%] " : ""}
                    ${skill.hash === "#Mussler" ? "w-[150%] max-w-none pt-6" : ""}
                    ${skill.hash === "#Carlton" ? "w-[100%]" : ""}
                  `}
              />
            </div>
          </a>
      ))}

    </article>
  );
};

export default SkillSection;
