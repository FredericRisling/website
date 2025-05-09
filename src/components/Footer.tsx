// @ts-nocheck
import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { sideBarLeftSocials, FooterLinks } from "../assets/lib/data";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";

import Popup from "reactjs-popup";
import { VscChromeClose } from "react-icons/vsc";
const LazyServiceStatus = lazy(() => import("../components/ServiceStatus"));

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  strokeColor?: string;
  altimgname: string;
  iconcolor?: string;
}

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer className="bg-darkblue flex justify-around items-center gap-10 p-10 max-lg:flex-col max-lg:pb-48 relative z-[1]">
      <div className="flex gap-10">
        {FooterLinks.map((link, index) => (
          <Popup
            trigger={
              <Link
                to="#"
                className="text-2xl font-bold hover:text-white"
              >
                {language === "DE" ? link.de : link.en}
              </Link>
            }
            modal
            key={index}
          >
            {(close: () => void) =>
              (
                <>
                  <div
                    className={`p-32 max-lg:p-16  rounded-3xl dark-shadow relative max-h-[80vh] overflow-y-auto ${
                      theme === "dark" ? "bg-darkblue" : "bg-white"
                    }`}
                  >
                    <button
                      className="fixed top-0 right-0 bg-white p-4 z-10 rounded-2xl m-4 hover:bg-lightblue transition-all duration-500 dark-shadow text-white"
                      onClick={() => {
                        close();
                      }}
                    >
                      <VscChromeClose />
                    </button>
                    {link.data}
                  </div>
                </>
              ) as React.ReactNode
            }
          </Popup>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
