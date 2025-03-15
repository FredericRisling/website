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
      <RadialGradient scale="scale-y-125" opacity="opacity-5" />

      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-1/6 drop-shadow-2xl shadow-2xl avatar-img max-lg:w-3/4"
      />
      <h1>
        {language === "DE"
          ? headerIntroData.title.de
          : headerIntroData.title.en}
      </h1>
      <h2>{headerIntroData.subtitle}</h2>

    </section>
  );
};

export default HeaderIntro;
