import React, { useRef } from "react";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import {
  // skillsDataCMS,
  skillsDataDesign, skillsDataDesign2,
  // skillsDataWeb,
} from "../assets/lib/data";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import SkillSection from "./SkillSection";
import RadialGradient from "./RadialGradient";
import { motion, useScroll, useTransform } from "framer-motion";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Skills");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <React.Fragment>
      <section
        className="relative tech-stack max-lg:p-16 h-screen pt-32 scroll-mt-20"
        id="partner"
        ref={ref}
      >
        <RadialGradient
          scale="scale-y-[3]"
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
            {/*<SkillSection skillsData={skillsDataCMS} theme={theme} />*/}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TechStack;
