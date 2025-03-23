import React from "react";
// import Button from "./Button";
// import { Highlight, themes } from "prism-react-renderer";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import "react-toastify/dist/ReactToastify.css";
// import Divider from "./Divider.tsx";

const Contact: React.FC = () => {
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();

  return (
    <React.Fragment>
      <section
          className="relative contact-container min-h-[60vh] max-lg:min-h-[115vh] max-s:min-h-[200vh] flex flex-col justify-end scroll-mt-20 mb-10"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >

        </div>
      {/*  <Divider*/}
      {/*    thickness="0.25rem"*/}
      {/*    direction="middle"*/}
      {/*    color="gold"*/}
      {/*    height="small"*/}
      {/*    dividerStyle="solid"*/}
      {/*/>*/}
        <h2 className="text-center">
          {language === "DE"
              ? "Kontakt"
              : "Kontakt"}
        </h2>

        <div className="flex flex-col items-center justify-center mt-24 space-y-6">
          {/* 📧 E-Mail */}
          <a
              href="mailto:info@markuskammerer.immo"
              className="flex items-center justify-center bg-gray-800 w-[350px] h-[60px] rounded-lg hover:bg-gray-700 transition text-white text-3xl"
          >
            <span>Mail: info@markuskammerer.immo</span>
          </a>

          {/* 📞 Telefon DE */}
          <a
              href="tel:+491723750007"
              className="flex items-center justify-center bg-gray-800 w-[350px] h-[60px] rounded-lg hover:bg-gray-700 transition text-white text-3xl"
          >
            <span>Phone DE: +49 172 3750 007</span>
          </a>

          {/* 📞 Telefon FR */}
          <a
              href="tel:+33663677650"
              className="flex items-center justify-center bg-gray-800 w-[350px] h-[60px] rounded-lg hover:bg-gray-700 transition text-white text-3xl"
          >
            <span>Phone FR: +33 6 63 67 76 50</span>
          </a>
        </div>


      </section>
    </React.Fragment>
  );
};

export default Contact;
