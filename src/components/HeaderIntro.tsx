import React from "react";
// import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";

const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);

  return (

        <section
            className="hero items-center h-[100vh]  px-16 gap-8 pt-32"
            ref={ref}
            id="home"
        >
          {/*<div className="grid grid-cols-2 border-golden border-4 rounded-xl">*/}
          {/*  /!* Linke Seite: Text *!/*/}
          {/*  <div className="flex flex-col gap-5 justify-center items-center ">*/}
          {/*    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-10xl max-lg:grid-cols-1">*/}
          {/*      {language === "DE" ? headerIntroData.title.de : headerIntroData.title.en}*/}
          {/*    </h1>*/}
          {/*    <br />*/}
          {/*    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-golden" >{headerIntroData.subtitle}</h2>*/}
          {/*    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-golden">{headerIntroData.subtitle2}</h2>*/}
          {/*    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-golden">{headerIntroData.subtitle3}</h2>*/}
          {/*    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-golden">{headerIntroData.subtitle4}</h2>*/}
          {/*    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-golden">{headerIntroData.subtitle5}</h2>*/}
          {/*  </div>*/}

          {/*  /!* Rechte Seite: Bild *!/*/}
          {/*  <div className="flex justify-center">*/}
          {/*    <img*/}
          {/*        src={headerIntroData.profilepicture}*/}
          {/*        alt="Profile"*/}
          {/*        className="max-w-full h-auto shadow-2xl rounded-r-xl ml-.5"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="grid grid-cols-2 max-md:flex max-md:flex-col border-golden border-4 rounded-xl">
            {/* Text (oben auf Mobile, links auf Desktop) */}
            <div className="flex flex-col gap-16 justify-center items-center order-1 max-lg:gap-10">
              <h1 className="text-4xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-10xl max-md: mt-9">
                {language === "DE" ? headerIntroData.title.de : headerIntroData.title.en}
              </h1>
              <br className="hidden md:block"/>
              <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl text-golden">{headerIntroData.subtitle}</h2>
              <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl text-golden">{headerIntroData.subtitle2}</h2>
              <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl text-golden">{headerIntroData.subtitle3}</h2>
              <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl text-golden">{headerIntroData.subtitle4}</h2>
              <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl text-golden">{headerIntroData.subtitle5}</h2>
            </div>

            {/* Bild (unten auf Mobile, rechts auf Desktop) */}
            <div className="flex justify-center order-2 max-md:order-2">
              <img
                  src={headerIntroData.profilepicture}
                  alt="Profile"
                  className="max-w-full h-auto shadow-2xl rounded-r-xl max-md:rounded-b-xl max-md:mt-6"
              />
            </div>
          </div>


          {/*<div className="border-golden border-4 rounded-xl p-6 max-md:p-4 max-md:grid-cols-1 grid grid-cols-2 max-md:flex max-md:flex-col max-md:items-center">*/}

          {/*  /!* Mobile: Bild zuerst *!/*/}
          {/*  <div className="flex justify-center max-md:order-1">*/}
          {/*    <img*/}
          {/*        src={headerIntroData.profilepicture}*/}
          {/*        alt="Profile"*/}
          {/*        className="max-w-full h-auto shadow-2xl rounded-r-xl max-md:rounded-xl max-md:w-4/5"*/}
          {/*    />*/}
          {/*  </div>*/}

          {/*  /!* Linke Seite: Text *!/*/}
          {/*  <div className="flex flex-col gap-3 justify-center items-center text-center max-md:text-center max-md:w-full">*/}
          {/*    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-10xl max-md:text-4xl">*/}
          {/*      {language === "DE" ? headerIntroData.title.de : headerIntroData.title.en}*/}
          {/*    </h1>*/}
          {/*    <br />*/}
          {/*    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-golden max-md:text-2xl">*/}
          {/*      {headerIntroData.subtitle}*/}
          {/*    </h2>*/}
          {/*    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-golden max-md:text-2xl">*/}
          {/*      {headerIntroData.subtitle2}*/}
          {/*    </h2>*/}
          {/*    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-golden max-md:text-2xl">*/}
          {/*      {headerIntroData.subtitle3}*/}
          {/*    </h2>*/}
          {/*    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-golden max-md:text-2xl">*/}
          {/*      {headerIntroData.subtitle4}*/}
          {/*    </h2>*/}
          {/*    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-golden max-md:text-2xl">*/}
          {/*      {headerIntroData.subtitle5}*/}
          {/*    </h2>*/}
          {/*  </div>*/}
          {/*</div>*/}



        </section>


  );
};

export default HeaderIntro;
