import React, { useState, useEffect, useRef } from "react";
// import Button from "./Button";
import axios from "axios";
// import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [error, setError] = useState<string | any>(null);

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setError(null);
    console.log(error);

    e.preventDefault();
    const data = new FormData(e.currentTarget);

    try {
      const response = await axios.post(apiBaseUrl, data);
      console.log(response);
      if (language === "DE") {
        toast.success(toastMessages.successEmailSent.de);
      } else {
        toast.success(toastMessages.successEmailSent.en);
      }
    } catch (error) {
      console.log(error);
      if (language === "DE") {
        toast.error(toastMessages.failedEmailSent.de);
      } else {
        toast.error(toastMessages.failedEmailSent.en);
      }
      setError("An Error occured, try again later");
    }
  };

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  const wordWrap = (
    text: string,
    maxLineLength: number,
    indentation: string
  ) => {
    const words = text.split(" ");
    let lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      if (currentLine.length + word.length <= maxLineLength) {
        currentLine += word + " ";
      } else {
        lines.push(currentLine.trim());
        currentLine = `${indentation}${word} `;
      }
    });

    if (currentLine) {
      lines.push(currentLine.trim());
    }

    return lines.join("\n");
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }

    setLastUpdatedField(name);
  };

  const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const codeSnippet = `
import  { useState } from "react";

// 🌈 Spreading Stardust: 
// Crafting Cosmic Email 🌌

const [sender, setSender] = "${name}${
    lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""
  }🚀";
const [recipient, setRecipient] = "${email}${
    lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""
  }📧";
const [subject, setSubject] = \n"${subject}${
    lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""
  }✨";
const [message, setMessage] = 
\`Hello, intrepid traveler! 👋\n
Across the cosmos, a message for you:\n
"${wordWrap(message, 40, " ")}${
    lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""
  }"\n
Wishing you stardust dreams,\n
${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}
\``;

  //   const codeSnippet2 = `
  // // 🚀 Initiating Quantum Email Transmission 🪐
  // const launchEmail = async () => {
  //   try {
  //     const response = await fetch('https://alpaycelik.dev/send',{
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //      sender,
  //      recipient,
  //      subject,
  //      message
  //     })
  //    });

  //    if (response.ok) {
  //    console.log('🌌 Transmission successful!');
  //    } else {
  //    console.error('🌠 Cosmic glitch encountered...');
  //    }
  //   } catch (error) {
  //   console.error('🌪 Quantum disturbance detected:', error);
  //   }
  // };
  // // 🚀 Ready for Liftoff? 🛸
  // launchEmail();`;

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16 h-screen pt-32 scroll-mt-20"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >


        </div>
        <h2 className="text-[--black] text-center text-golden">
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
