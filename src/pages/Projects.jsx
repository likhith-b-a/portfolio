import React, { useState, useRef, useEffect } from "react";
import {
  FaGithub, FaExternalLinkAlt, FaCodeBranch, FaStar, FaChevronLeft, FaChevronRight, FaRocket, FaFilter, FaCode,
  FaEye
} from "react-icons/fa";
// import {
//   SiReact, SiNodedotjs, SiMongodb, SiBootstrap, SiPython, SiPhp, SiDjango, SiMysql, SiScikitlearn, SiPandas, SiOpencv, SiFirebase,
//   SiSocketdotio
// } from "react-icons/si";

import { useTheme } from "../ThemeContext";

// ========== Theme Styles ==========
const themeStyles = {
  icy: {
    cardBg: "bg-white/10 backdrop-blur-xl border-white/20",
    cardHover: "hover:bg-white/20 hover:border-cyan-300/40 hover:shadow-cyan-400/30",
    text: "text-gray-800",
    textSecondary: "text-gray-600",
    accent: "text-cyan-600",
    button: "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-800 border-cyan-400/40",
    badge: "bg-cyan-100/30 text-cyan-800 border-cyan-300/40",
    glow: "shadow-cyan-400/20",
    filterActive: "bg-cyan-500/30 text-cyan-800 border-cyan-400/60",
    bg: ""
  },
  hot: {
    cardBg: "bg-yellow-50/10 backdrop-blur-xl border-yellow-300/20",
    cardHover: "hover:bg-yellow-50/20 hover:border-yellow-400/40 hover:shadow-yellow-400/30",
    text: "text-yellow-900",
    textSecondary: "text-yellow-800",
    accent: "text-yellow-600",
    button: "bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-900 border-yellow-500/40",
    badge: "bg-yellow-100/30 text-yellow-900 border-yellow-400/40",
    glow: "shadow-yellow-400/20",
    filterActive: "bg-yellow-500/30 text-yellow-900 border-yellow-500/60",
    bg: ""
  },
  dark: {
    cardBg: "bg-gray-900/10 backdrop-blur-xl border-gray-700/20",
    cardHover: "hover:bg-gray-900/20 hover:border-blue-500/40 hover:shadow-blue-400/30",
    text: "text-gray-100",
    textSecondary: "text-gray-300",
    accent: "text-blue-400",
    button: "bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 border-blue-500/40",
    badge: "bg-blue-900/30 text-blue-200 border-blue-500/40",
    glow: "shadow-blue-400/20",
    filterActive: "bg-blue-600/30 text-blue-200 border-blue-500/60",
    bg: ""
  }
};

// ========== Tech Icons ==========


import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiCloudinary,
  SiScikitlearn,
  SiPandas,
  SiStreamlit,
  SiRazorpay,
  SiJsonwebtokens,
  SiSocketdotio,
  SiDjango,
  SiExpress,
  SiTwilio,
  SiOpenai,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPytorch, SiPython, SiAxios, SiGooglecloud } from "react-icons/si";


const techIcons = {
  "React.js": <SiReact className="text-blue-500" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  // Cloudinary: <SiCloudinary className="text-blue-400" />,
  "Scikit-learn": <SiScikitlearn className="text-yellow-600" />,
  // NLTK: <SiNltk className="text-blue-600" />, // not in react-icons; optional placeholder
  Pandas: <SiPandas className="text-black" />,
  Streamlit: <SiStreamlit className="text-pink-500" />,
  Razorpay: <SiRazorpay className="text-indigo-500" />,
  JWT: <SiJsonwebtokens className="text-amber-500" />,
  "Socket.IO": <SiSocketdotio className="text-gray-800" />,
  Python: <FaPython className="text-yellow-500" />,
  Django: <SiDjango className="text-green-800" />,
  PyTorch: <SiPytorch className="text-orange-600" />,
  Torchvision: <SiPython className="text-yellow-500" />,
  Matplotlib: <SiPython className="text-blue-400" />,
  Axios: <SiAxios className="text-sky-600" />,
  "Google Gemini API": <SiGooglecloud className="text-blue-400" />,
  "Express.js": <SiExpress className="text-gray-700" />,
  Twilio: <SiTwilio className="text-red-500" />,
  "Tesseract OCR": <FaEye className="text-orange-500" />, // or fallback icon
  OpenAI: <SiOpenai className="text-black" />,
  "OpenAI/Gemini API": <SiOpenai className="text-black" />,
};

// ========== Projects ==========
const projects = [
  {
    id: 1,
    title: "ReadNext",
    description:
      "Content-based book recommendation system using NLP techniques like TF-IDF and cosine similarity. Analyzes 10,000+ book summaries.",
    image: `/project/books.png`,
    technologies: ["Streamlit", "Scikit-learn", "NLTK", "Pandas"],
    status: "Completed",
    github: "https://github.com/likhith-b-a/ReadNext",
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description:
      "Secure real-time chat app with one-on-one messaging, voice/video calls, and media sharing. Uses Socket.IO and Firebase Auth.",
    image: `/project/chat.png`,
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Firebase",
      "Cloudinary",
    ],
    status: "Completed",
    github: "https://github.com/likhith-b-a/CHAT-APP",
  },
  {
    id: 3,
    title: "EduSphere",
    description:
      "Full-stack e-learning platform with secure JWT authentication, Razorpay integration, and course tracking features.",
    image: `/project/ELearning.png`,
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Razorpay",
      "JWT",
      "Cloudinary",
    ],
    status: "Completed",
    github: "https://github.com/likhith-b-a/EduSphere",
  },
  {
    id: 4,
    title: "MNIST Digit Classifier",
    description:
      "A PyTorch-based neural network that classifies handwritten digits (0–9) from the MNIST dataset with 97.8% validation accuracy.",
    image: `/project/digits.png`,
    technologies: ["PyTorch", "Torchvision", "Matplotlib"],
    status: "Completed",
    github: "https://github.com/likhith-b-a/DIGIT_CLASSIFIER",
  },
  {
    id: 5,
    title: "Gemini Chatbot",
    description:
      "An intelligent chatbot powered by Google's Gemini 1.5 Flash API. Handles casual conversation and can be extended to domains like medical, education, or support.",
    image: `/project/bot.png`,
    technologies: [
      "Express.js",
      "Google Gemini API",
      "React.js",
      "Axios",
      "Node.js",
    ],
    status: "Completed",
    github: "https://github.com/likhith-b-a/ChatBot",
  },
  {
    id: 6,
    title: "Online Multiplayer Tic-Tac-Toe",
    description:
      "A real-time multiplayer Tic-Tac-Toe game with room creation, quick play matchmaking, and instant gameplay using Socket.IO and Node.js.",
    image: `/project/tic_tac_toe.png`,
    technologies: ["React.js", "Node.js", "Socket.IO", "Express.js"],
    status: "Completed",
    github: "https://github.com/likhith-b-a/Multiplayer-Tic-Tac-Toe",
  },
  {
    id: 7,
    title: "Task Tracker",
    description:
      "A visually rich task tracker where users can create solo or group challenges and track their daily progress using an interactive calendar. Perfect for personal growth, coding goals, or shared accountability among friends.",
    image: `/project/tasks.png`,
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
    ],
    status: "Completed",
    github: "https://github.com/likhith-b-a/TASK_TRACKER",
  },
  {
    id: 8,
    title: "Multi-Factor Authentication Module",
    description:
      "A plug-and-play MFA backend module built with Express and MongoDB. Includes password hashing, JWT-based sessions, email verification, and OTP-based mobile authentication via Twilio.",
    image: `/project/MFA.png`,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Twilio",
      "Nodemailer",
    ],
    status: "Completed",
    github: "https://github.com/likhith-b-a/MFA",
  },
  {
    id: 9,
    title: "AI Itinerary Generator",
    description:
      "A travel planner powered by GenAI that generates custom itineraries based on user preferences, duration, and budget. Integrates real-time location data, weather forecasts, and Google Maps APIs.",
    image: `/project/trip_planner.png`,
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Google Gemini API",
      "OpenAI",
      "Google Maps API",
    ],
    status: "In Progress",
    github: "",
  },
  {
    id: 10,
    title: "SnapNotes",
    description:
      "An AI-powered Streamlit app that converts pictures of handwritten notes, slides, or textbook pages into clean, structured study notes using OCR and NLP.",
    image: `/project/notes.png`,
    technologies: [
      "Streamlit",
      "Python",
      "OpenAI/Gemini API",
      "Tesseract OCR",
      "LangChain",
    ],
    status: "In Progress",
    github: "",
  },
];


// ========== Statuses ==========
const statuses = [
  "All",
  "Completed",
  "In Progress"
];

// ========== Responsive Helper ==========
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < breakpoint : false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}

const getCardStyle = (index, currentIndex, filteredProjects) => {
  if (filteredProjects.length === 0) return { display: 'none' };
  const totalCards = filteredProjects.length;
  let position = (index - currentIndex + totalCards) % totalCards;
  if (position > totalCards / 2) position = position - totalCards;
  const transition = "transform 0.43s cubic-bezier(.7,0,.3,1), opacity 0.33s cubic-bezier(.7,0,.3,1), filter 0.43s";

  // Values can be tweaked for stronger or softer effect
  if (position === 0) {
    // Center card
    return {
      filter: "none",
      boxShadow: "0 8px 32px 0 rgba(0,0,0,0.13), 0 2px 12px 0 rgba(0,0,0,0.10)",
      transform: 'translateX(-50%) scale(1.08) rotateY(0deg) translateZ(40px)',
      zIndex: 50,
      opacity: 1,
      left: '50%',
      background: "inherit",
      transition,
    };
  } else if (position === 1) {
    // Right card, bent away
    return {
      filter: "blur(1.2px) brightness(0.96)",
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)",
      transform: 'translateX(-50%) scale(0.95) rotateY(-38deg) translateZ(-60px)',
      zIndex: 25,
      opacity: 0.65,
      left: '68%',
      transition,
    };
  } else if (position === -1) {
    // Left card, bent away
    return {
      filter: "blur(1.2px) brightness(0.96)",
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)",
      transform: 'translateX(-50%) scale(0.95) rotateY(38deg) translateZ(-60px)',
      zIndex: 25,
      opacity: 0.65,
      left: '32%',
      transition,
    };
  } else if (position === 2) {
    // Far right card, more bent and further back
    return {
      filter: "blur(2.3px) brightness(0.92)",
      boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
      transform: 'translateX(-50%) scale(0.8) rotateY(-60deg) translateZ(-140px)',
      zIndex: 10,
      opacity: 0.30,
      left: '82%',
      transition,
    };
  } else if (position === -2) {
    // Far left card, more bent and further back
    return {
      filter: "blur(2.3px) brightness(0.92)",
      boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
      transform: 'translateX(-50%) scale(0.8) rotateY(60deg) translateZ(-140px)',
      zIndex: 10,
      opacity: 0.30,
      left: '18%',
      transition,
    };
  } else {
    // Hide any other cards
    return {
      filter: "none",
      boxShadow: "none",
      transform: 'translateX(-50%) scale(0.5) rotateY(0deg) translateZ(-220px)',
      zIndex: 1,
      opacity: 0,
      left: '50%',
      transition,
    };
  }
};

// ========== Mobile Card ==========
const MobileCard = ({ project, onPrev, onNext, isTransitioning, styles, techIcons }) => {
  if (!project) return null;
  return (
    <div className={`
      w-full max-w-sm mx-auto
      ${styles.cardBg} ${styles.cardHover}
      border rounded-2xl p-5 ${styles.glow} shadow-2xl
      transition-transform duration-300
      relative
    `}>
      <div className="w-full h-40 rounded-xl mb-4 relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <button
          onClick={onPrev}
          disabled={isTransitioning}
          className={`
            absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 bg-white/70 hover:bg-white/90 rounded-full shadow
            ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
            z-10
          `}
          aria-label="Previous"
          style={{ minWidth: 34, minHeight: 34 }}
        >
          <FaChevronLeft className="text-base text-gray-700" />
        </button>
        <button
          onClick={onNext}
          disabled={isTransitioning}
          className={`
            absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 bg-white/70 hover:bg-white/90 rounded-full shadow
            ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
            z-10
          `}
          aria-label="Next"
          style={{ minWidth: 34, minHeight: 34 }}
        >
          <FaChevronRight className="text-base text-gray-700" />
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className={`text-lg font-bold ${styles.text} mb-1`}>{project.title}</h3>
          <p className={`${styles.textSecondary} text-sm leading-relaxed`}>
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`${styles.badge} border px-2 py-1 rounded-full text-xs flex items-center gap-1 font-medium`}
            >
              {techIcons[tech] && <span className="w-3 h-3">{techIcons[tech]}</span>}
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={`${styles.badge} border px-2 py-1 rounded-full text-xs font-medium`}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className={`${styles.textSecondary} flex items-center gap-1`}>
            <FaRocket className="text-xs" />
            {project.status}
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-gray-700">
              <FaCodeBranch className="text-xs" />
              {project.forks}
            </span>
            <span className="flex items-center gap-1 text-yellow-600">
              <FaStar className="text-xs" />
              {project.stars}
            </span>
          </div>
        </div>
        <div className="flex gap-2 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${styles.button} border px-3 py-2 rounded-lg
              flex items-center gap-2 text-xs font-medium
              transition-all duration-300 hover:scale-105
              flex-1 justify-center
            `}
          >

            <FaGithub />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${styles.button} border px-3 py-2 rounded-lg
              flex items-center gap-2 text-xs font-medium
              transition-all duration-300 hover:scale-105
              flex-1 justify-center
            `}
          >
            <FaExternalLinkAlt />
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

// ========== Desktop Card ==========
const DesktopCard = ({ project, index, currentIndex, filteredProjects, styles, techIcons, goToSlide }) => {
  const cardStyle = getCardStyle(index, currentIndex, filteredProjects);
  const isCenter = (index - currentIndex + filteredProjects.length) % filteredProjects.length === 0;
  return (
    <div
      className={`
        absolute top-0
        w-[340px] h-[470px]
        ${styles.cardBg} ${isCenter ? styles.cardHover : ''}
        border rounded-2xl p-7 ${styles.glow} shadow-2xl
        cursor-pointer select-none
        ${isCenter ? 'hover:scale-105' : ''}
      `}
      style={{
        ...cardStyle,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
      onClick={() => !isCenter && goToSlide(index)}
    >
      <div className="w-full h-44 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="space-y-4">
        <div>
          <h3 className={`text-lg font-bold ${styles.text} mb-1 line-clamp-1`}>{project.title}</h3>
          <p className={`${styles.textSecondary} text-sm leading-relaxed line-clamp-2`}>
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 5).map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`${styles.badge} border px-2 py-1 rounded-full text-xs flex items-center gap-1 font-medium`}
            >
              {techIcons[tech] && <span className="w-3 h-3">{techIcons[tech]}</span>}
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className={`${styles.badge} border px-2 py-1 rounded-full text-xs font-medium`}>
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className={`${styles.textSecondary} flex items-center gap-1`}>
            <FaRocket className="text-xs" />
            {project.status}
          </span>
        </div>
        <div className="flex gap-2 pt-1">

          {
            project.github.length > 0  && 
          

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${styles.button} border px-3 py-2 rounded-lg
              flex items-center gap-2 text-xs font-medium
              transition-all duration-300 hover:scale-105
              flex-1 justify-center
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub />
            Code
          </a>
}
        </div>
      </div>
    </div>
  );
};

// ========== Main Component ==========
const Projects = () => {
  const { theme } = useTheme();
  const styles = themeStyles[theme] || themeStyles.icy;
  const isMobile = useIsMobile(768);

  const [activeStatus, setActiveStatus] = useState("All");

  const [currentIndex, setCurrentIndexState] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const isDraggingRef = useRef(false);

  const filteredProjects = projects.filter(p => activeStatus === "All" ? true : p.status === activeStatus);

  useEffect(() => {
    let newIndex = 0;
    setCurrentIndexState(0);
  }, [activeStatus, filteredProjects.length]);

  useEffect(() => {
    if (currentIndex >= filteredProjects.length) {
      setCurrentIndexState(Math.max(filteredProjects.length - 1, 0));
    }
    // eslint-disable-next-line
  }, [filteredProjects.length]);

  const nextSlide = () => {
    if (isTransitioning || filteredProjects.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndexState((prev) => (prev + 1) % filteredProjects.length);
    setTimeout(() => setIsTransitioning(false), isMobile ? 300 : 430);
  };

  const prevSlide = () => {
    if (isTransitioning || filteredProjects.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndexState((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    setTimeout(() => setIsTransitioning(false), isMobile ? 300 : 430);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndexState(index);
    setTimeout(() => setIsTransitioning(false), 430);
  };

  // Swipe handlers - do NOT call preventDefault (see earlier answers)
  const handleStart = (e) => {
    if (isTransitioning) return;
    isDraggingRef.current = true;
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
    startXRef.current = clientX;
    startYRef.current = clientY;
  };
  const handleMove = (e) => {
    if (!isDraggingRef.current || isTransitioning) return;
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
    const diffX = startXRef.current - clientX;
    const diffY = startYRef.current - clientY;
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      // Don't call preventDefault here; mobile warning fix
      if (diffX > 0) nextSlide();
      else prevSlide();
      isDraggingRef.current = false;
    }
  };
  const handleEnd = () => { isDraggingRef.current = false; };

  useEffect(() => {
    if (isMobile) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, [isTransitioning, filteredProjects.length, isMobile]);

  return (
    <div className={styles.bg + " min-h-screen relative overflow-hidden"}>
      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`pt-10 text-4xl md:text-5xl font-bold ${styles.text} mb-4 flex items-center justify-center gap-4`}>
              <FaCode className={styles.accent} />
              My Projects
            </h1>
            <p className={`text-lg md:text-xl ${styles.textSecondary} max-w-3xl mx-auto`}>
              A collection of my academic and personal projects.
            </p>
          </div>
          {/* Status Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-0">
            <span className="flex items-center gap-2">
              <FaFilter className={`${styles.textSecondary}`} />
              <span className={`${styles.text} font-medium`}>Filter by Status:</span>
            </span>
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={`
                  px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300
                  ${activeStatus === status
                    ? styles.filterActive + " ring-2 ring-offset-2 ring-cyan-400"
                    : `${styles.button} hover:scale-105`
                  }
                `}
              >
                {status}
                {activeStatus === status && (
                  <span className="ml-2 inline-block text-xs font-bold text-green-600">✓</span>
                )}
              </button>
            ))}
          </div>
          {/* Mobile View */}
          {isMobile ? (
            <div className="relative mt-8">
              <div
                className="w-full"
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
              >
                {filteredProjects.length > 0 && (
                  <MobileCard
                    project={filteredProjects[currentIndex]}
                    onPrev={prevSlide}
                    onNext={nextSlide}
                    isTransitioning={isTransitioning}
                    styles={styles}
                    techIcons={techIcons}
                  />
                )}
              </div>
              {/* Mobile Dots Indicator */}
              <div className="flex justify-center mt-6 gap-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndexState(index)}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${index === currentIndex
                        ? `${styles.accent} w-6`
                        : `${styles.textSecondary} opacity-50`
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Desktop View */
            <div className="relative mt-16">
              {/* Desktop Cards Container */}
              <div
                ref={containerRef}
                className="relative h-[540px] mx-0"
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
              >
                {filteredProjects.map((project, index) => (
                  <DesktopCard
                    key={project.id}
                    project={project}
                    index={index}
                    currentIndex={currentIndex}
                    filteredProjects={filteredProjects}
                    styles={styles}
                    techIcons={techIcons}
                    goToSlide={goToSlide}
                  />
                ))}
                {/* Navigation Buttons on card sides */}
                <button
                  onClick={prevSlide}
                  disabled={isTransitioning}
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2 z-40
                    p-4 rounded-full transition-all duration-300
                    ${styles.button} hover:scale-110 shadow-xl
                    ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                  style={{ marginLeft: '-10px' }}
                >
                  <FaChevronLeft className="text-xl" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={isTransitioning}
                  className={`
                    absolute right-0 top-1/2 -translate-y-1/2 z-40
                    p-4 rounded-full transition-all duration-300
                    ${styles.button} hover:scale-110 shadow-xl
                    ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                  style={{ marginRight: '-10px' }}
                >
                  <FaChevronRight className="text-xl" />
                </button>
              </div>
              {/* Desktop Dots Indicator */}
              <div className="flex justify-center mt-8 gap-3">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300 hover:scale-125
                      ${index === currentIndex
                        ? `${styles.accent} shadow-lg`
                        : `${styles.textSecondary} opacity-60 hover:opacity-80`
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          )}
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className={`text-6xl ${styles.textSecondary} mb-4`}>🔍</div>
              <h3 className={`text-2xl font-bold ${styles.text} mb-2`}>No projects found</h3>
              <p className={`${styles.textSecondary}`}>
                Try adjusting your filters to see more projects.
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-32 h-32 ${styles.accent} opacity-10 rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 right-10 w-24 h-24 ${styles.accent} opacity-10 rounded-full blur-2xl animate-pulse delay-1000`} />
        <div className={`absolute top-1/2 left-1/2 w-40 h-40 ${styles.accent} opacity-5 rounded-full blur-3xl animate-pulse delay-500`} />
      </div>
      <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .touch-pan-x {
          touch-action: pan-x;
        }
        .space-y-3 > :last-child {
          margin-bottom: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default Projects;