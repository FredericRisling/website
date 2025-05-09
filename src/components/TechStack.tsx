import React from "react";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import {
  skillsDataDesign,
} from "../assets/lib/data";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import SkillSection from "./SkillSection";
// import RadialGradient from "./RadialGradient";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Partner");
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <React.Fragment>
      <section
        className="relative tech-stack top-full items-center gap-10 h-[80vh] max-lg:h-[105vh] pt-32 scroll-mt-20"
        id="partner"
        ref={ref}
      >
        {/*<RadialGradient*/}
        {/*  scale="scale-y-[1]"*/}
        {/*  opacity={theme === "light" ? "opacity-30" : "opacity-30"}*/}
        {/*  position="top-[55rem]"*/}
        {/*/>*/}


        <h2 className="text-center">
          {language === "DE" ? "PARTNER" : "PARTNER"}
        </h2>
        <div className="flex justify-center max-md:flex-col mt-24">

          <div className="w-600px max-xl:w-[40%] max-lg:w-[50%] max-md:w-full">
            <SkillSection skillsData={skillsDataDesign} theme={theme} />
          </div>
          {/*<div className="flex flex-col h-[inherit]  justify-around max-lg:gap-40">*/}

          {/*  <SkillSection skillsData={skillsDataDesign2} theme={theme} />*/}
          {/*</div>*/}
        </div>
      </section>
    </React.Fragment>
  );
};

export default TechStack;
