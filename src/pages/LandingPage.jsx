import React, { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import "./LandingPage.css"


const accentsMap = {
  icy: {
    highlight: "text-cyan-600",
    secondary: "text-gray-700",
    text: "text-gray-600",
    glassBackground: "bg-white/[0.08]",
    glassBorder: "border-white/[0.15]",
    buttonPrimary: "bg-cyan-500 hover:bg-cyan-400 text-white border-none",
    buttonSecondary: "bg-white/90 text-cyan-700 hover:bg-white border-none",
    imageBorder: "border-white/[0.2]",
    shadowColor: "rgba(255, 255, 255, 0.1)",
    nameColor: "text-cyan-600",
    backdropBlur: "backdrop-blur-[20px]",
  },
  hot: {
    highlight: "text-yellow-600",
    secondary: "text-white/80",
    text: "text-white/90",
    glassBackground: "bg-white/[0.08]",
    glassBorder: "border-white/[0.15]",
    buttonPrimary: "bg-yellow-400/90 hover:bg-yellow-300 text-yellow-900 border-none",
    buttonSecondary: "bg-white/90 text-yellow-700 hover:bg-yellow-100 border-none",
    imageBorder: "border-white/[0.2]",
    shadowColor: "rgba(255, 255, 255, 0.1)",
    nameColor: "text-yellow-600",
    backdropBlur: "backdrop-blur-[20px]",
  },
  dark: {
    highlight: "text-blue-400",
    secondary: "text-white/80",
    text: "text-white/90",
    glassBackground: "bg-white/[0.08]",
    glassBorder: "border-white/[0.15]",
    buttonPrimary: "bg-blue-600/90 hover:bg-blue-500 text-white border-none",
    buttonSecondary: "bg-white/90 text-blue-900 hover:bg-blue-100 border-none",
    imageBorder: "border-white/[0.2]",
    shadowColor: "rgba(255, 255, 255, 0.1)",
    nameColor: "text-blue-400",
    backdropBlur: "backdrop-blur-[20px]",
  }
};

const typewriterText = [
  "Full-Stack Developer | AI Enthusiast",
];

export default function LandingPage() {
  const { theme } = useTheme();
  const accents = accentsMap[theme] || accentsMap.icy;

  // Mouse position for subtle parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main
      className="relative z-20 flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-2 md:px-8 py-8 space-y-8 md:space-y-0 md:space-x-10 overflow-x-hidden"
      style={{ width: "100vw", minHeight: "82vh" }}
    >
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float opacity-40"
            style={{
              background: "rgba(255, 255, 255, 0.4)",
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Content Section - Side by Side with Image, Centered Card on Mobile */}
      <div
        className={` 
          relative transition-all duration-1000 ease-out delay-200 w-full max-w-[580px]
          flex justify-center mx-auto
        `}
      >
        <div
          className={` 
            rounded-[2rem] p-8 md:p-10 lg:p-12 relative overflow-hidden pt-300
            mx-auto
          `}
          style={{
            maxWidth: 580,
            minWidth: 0,
            minHeight: "400px",
            transform: `translate(${-mousePos.x * 0.2}px, ${
              -mousePos.y * 0.2
            }px)`,
          }}
        >
          <div className="relative z-10 pt-16">
            {/* Greeting */}
            <div className="mb-8 text-center md:text-left">
              <div className="text-lg md:text-xl lg:text-2xl mb-6">
                <span
                  className={`font-bold text-2xl md:text-3xl lg:text-4xl ${accents.nameColor} drop-shadow-sm`}
                >
                  Likhith B A
                </span>
              </div>

              <div className="h-8 flex items-center md:justify-start justify-center">
                <span
                  className={`text-lg md:text-xl ${accents.secondary} font-mono`}
                >
                  Full-Stack Developer | AI Enthusiast
                </span>
              </div>
            </div>

            {/* Description */}
            <div
              className={`space-y-4 mb-10 ${accents.text} text-center md:text-left`}
            >
              <p className="text-lg md:text-xl leading-relaxed animate-fade-in-up">
                A Proud Vahani Scholar
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400 justify-center md:justify-start">
              <a
                href={`/Likhith_Resume.pdf`}
                download
                className={`
                  group px-8 py-4 rounded-2xl font-semibold transition-all duration-300
                  ${accents.buttonPrimary}
                  transform hover:scale-105 hover:-translate-y-1
                  shadow-lg hover:shadow-xl
                  relative overflow-hidden text-center
                  whitespace-nowrap flex-1 sm:flex-none min-w-[200px]
                `}
              >
                <span className="relative z-10">Download Resume</span>
                <div className="freeze-effect" />
              </a>

              <button
                type="button"
                className={`
                  group px-8 py-4 rounded-2xl font-semibold transition-all duration-300
                  ${accents.buttonSecondary}
                  transform hover:scale-105 hover:-translate-y-1
                  shadow-lg hover:shadow-xl
                  relative overflow-hidden text-center
                  whitespace-nowrap flex-1 sm:flex-none min-w-[200px]
                `}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="relative z-10">Let's Connect</span>
                <div className="freeze-effect" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Image Section */}
      <div
        className="flex items-center justify-center profile-pic-container"
        style={{
          flex: "0 0 auto",
          minWidth: "320px",
          minHeight: "320px",
          width: "100%",
          height: "100%",
          maxWidth: "420px",
          maxHeight: "620px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="rounded-3xl overflow-hidden bg-transparent relative flex items-center justify-center"
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: "1/1",
          }}
        >
          <img
            src={`/images/profile1.png`}
            className={`
                absolute rounded-3xl w-full h-full object-contain object-center
                profile-img-fade pb-16
                mr-36
              `}
            style={{
              transition: "opacity 2.4s cubic-bezier(.4,0,.2,1)",
              background: "transparent",
              borderRadius: "1.5rem",
            }}
          />
        </div>
      </div>
    </main>
  );
}