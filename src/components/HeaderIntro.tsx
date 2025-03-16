import React from "react";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";

const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <h1>
        {language === "DE"
            ? headerIntroData.title.de
            : headerIntroData.title.en}
      </h1>
      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-2/5 shadow-2xl avatar-img max-lg:w-3/5 mb-3"
      />

      <h3>{headerIntroData.subtitle}</h3>
      <h3>{headerIntroData.subtitle2}</h3>
      <h3>{headerIntroData.subtitle3}</h3>
      <h3>{headerIntroData.subtitle4}</h3>
      <h3>{headerIntroData.subtitle5}</h3>

    </section>
  );
};

export default HeaderIntro;
