import React from "react";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import {
  skillsDataDesign, skillsDataDesign2,
} from "../assets/lib/data";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import SkillSection from "./SkillSection";
import RadialGradient from "./RadialGradient";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Partner");
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <React.Fragment>
      <section
        className="relative tech-stack items-center gap-10 h-[80vh] max-lg:h-[150vh] pt-32 scroll-mt-20"
        id="partner"
        ref={ref}
      >
        <RadialGradient
          scale="scale-y-[1]"
          opacity={theme === "light" ? "opacity-30" : "opacity-30"}
          position="top-[55rem]"
        />


        <h2 className="text-center">
          {language === "DE" ? "Partner" : "Partner"}
        </h2>
        <div className="flex gap-40 justify-center max-lg:flex-col mt-24">

          <div className="w-1/3 max-lg:w-full">
            <SkillSection skillsData={skillsDataDesign} theme={theme} />
          </div>
          <div className="flex flex-col h-[inherit]  justify-around max-lg:gap-40">

            <SkillSection skillsData={skillsDataDesign2} theme={theme} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TechStack;
