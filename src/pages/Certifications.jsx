import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";
import {
  FaAward,
  FaTrophy,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
} from "react-icons/fa";

// ===== THEME STYLES =====
const themeStyles = {
  icy: {
    cardBg: "bg-white/15 backdrop-blur-xl border-white/20",
    cardHover:
      "hover:bg-white/25 hover:border-cyan-300/40 hover:shadow-cyan-400/20",
    text: "text-gray-800",
    textSecondary: "text-gray-600",
    accent: "text-cyan-600",
    button:
      "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-800 border-cyan-400/40",
    badge: "bg-cyan-100/30 text-cyan-800 border-cyan-300/40",
    glow: "shadow-cyan-400/20",
    filterActive: "bg-cyan-500/30 text-cyan-800 border-cyan-400/60",
    lightboxBg: "bg-white/95 backdrop-blur-xl",
  },
  hot: {
    cardBg: "bg-yellow-50/15 backdrop-blur-xl border-yellow-300/20",
    cardHover:
      "hover:bg-yellow-50/25 hover:border-yellow-400/40 hover:shadow-yellow-400/20",
    text: "text-yellow-900",
    textSecondary: "text-yellow-800",
    accent: "text-yellow-600",
    button:
      "bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-900 border-yellow-500/40",
    badge: "bg-yellow-100/30 text-yellow-900 border-yellow-400/40",
    glow: "shadow-yellow-400/20",
    filterActive: "bg-yellow-500/30 text-yellow-900 border-yellow-500/60",
    lightboxBg: "bg-yellow-50/95 backdrop-blur-xl",
  },
  dark: {
    cardBg: "bg-gray-900/15 backdrop-blur-xl border-gray-700/20",
    cardHover:
      "hover:bg-gray-900/25 hover:border-blue-500/40 hover:shadow-blue-400/20",
    text: "text-gray-100",
    textSecondary: "text-gray-300",
    accent: "text-blue-400",
    button:
      "bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 border-blue-500/40",
    badge: "bg-blue-900/30 text-blue-200 border-blue-500/40",
    glow: "shadow-blue-400/20",
    filterActive: "bg-blue-600/30 text-blue-200 border-blue-500/60",
    lightboxBg: "bg-gray-900/95 backdrop-blur-xl",
  },
};

// ======= CERTIFICATES DATA =======
const certificates = [
  {
    id: 1,
    title: "Code for Good Challenge 2025",
    organization: "JPMorganChase",
    image: `/images/code_for_good.jpg`
  },
  {
    id: 2,
    title: "DevOps and Agile Development",
    organization: "IBM",
    image: `/images/devops_agile.png`,
  },
  {
    id: 3,
    title: "DevOps Fundamentals",
    organization: "IBM",
    image: `/images/devops_fundamentals.png`,
  },
  {
    id: 4,
    title: "The Complete Full-Stack Web Development Bootcamp",
    organization: "Udemy",
    image: `/images/udemy_webdev.jpg`,
  },
  {
    id: 5,
    title: "C++ Programming Training",
    organization: "TIT Bombay",
    image: `/images/cpp_training.png`,
  },
  {
    id: 6,
    title: "MS Excel - Basic to Advanced",
    organization: "Vahani Scholarship",
    image: `/images/excel.png`,
  },
  {
    id: 7,
    title: "Programming Challenge",
    organization: "GDSC VIT Chennai",
    image: `/images/Code_conquest.png`,
  },
  {
    id: 8,
    title: "HANDS-ON TRAINING IN IOT",
    organization: "Vellore Institute of Technology, Chennai",
    image: `/images/IOT.png`,
  },
];


const CertificateCard = ({ certificate }) => {
  const { theme } = useTheme();
  const styles = themeStyles[theme] || themeStyles.icy;

  return (
    <>
      <div className="relative w-full sm:w-[500px] h-[220px] sm:h-[350px] overflow-hidden border shadow-md bg-white group transition-transform duration-300 hover:scale-105 hover:z-20 certificate-image">

        {/* Certificate Image */}
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover"
        />

        {/* Bottom Text Area - Appears on Hover */}
        <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-black/80 text-white translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-sm font-semibold">{certificate.title}</p>
          <p className="text-xs opacity-80">{certificate.organization}</p>
        </div>
      </div>
    </>
  );
};

const Certifications = () => {
  const { theme } = useTheme();
  const styles = themeStyles[theme] || themeStyles.icy;

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div id="certifications" className="pt-[120px] -mt-[120px]"></div>
        <div className="text-center mb-8">
          <h1
            className={`pt-10 text-4xl sm:text-5xl font-bold ${styles.text} mb-4 flex flex-wrap items-center justify-center gap-2 break-words`}
            style={{
              wordBreak: "break-word",
              overflowWrap: "break-word",
              minWidth: 0,
              maxWidth: "100%",
              whiteSpace: "normal",
            }}
          >
            <FaTrophy
              className={`shrink-0 ${styles.accent}`}
              style={{ fontSize: "1.2em" }}
            />
            <span style={{ minWidth: 0, maxWidth: "100%" }}>
              Certifications
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
      {/* Only clamp overflow-x on mobile for horizontal scroll issues */}
      <style>{`
        @media (max-width: 767px) {
          .max-w-7xl, .grid, .flex, .certifications-section {
            min-width: 0 !important;
            max-width: 100vw !important;
            box-sizing: border-box;
          }
          h1, .certifications-title {
            min-width: 0 !important;
            max-width: 100vw !important;
            box-sizing: border-box;
            word-break: break-word;
            overflow-wrap: break-word;
          }
          .grid > div {
            max-width: 100vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Certifications;
