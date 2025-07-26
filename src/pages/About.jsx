import React, { useState } from "react";
import {
  FaGraduationCap,
  FaCode,
  FaTrophy,
  FaSchool,
  FaUniversity,
  FaServer,
  FaTools,
  FaDatabase,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaJira,
  FaBug,
  FaJava,
  FaCuttlefish,
  FaBrain,
} from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiC,
  SiRedux,
  SiPostman,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNextdotjs,
  SiScikitlearn,
  SiPandas,
  SiPlotly,
  SiJupyter,
  SiFlask,
} from "react-icons/si";
import { FaChrome } from "react-icons/fa";
import { useTheme } from "../ThemeContext";
import { HiOutlineChartBar } from "react-icons/hi";

// ========== THEME STYLES (certificate style) ==========
const themeStyles = {
  icy: {
    cardBg: "bg-white/15 backdrop-blur-xl border-white/20",
    cardHover: "hover:bg-white/25 hover:border-cyan-300/40 hover:shadow-cyan-400/20",
    text: "text-gray-800",
    textSecondary: "text-gray-600",
    accent: "text-cyan-600",
    cardTitle: "font-bold text-gray-800",
    cardDesc: "font-normal text-gray-700",
    percent: "text-cyan-500",
    barBg: "bg-cyan-100/50",
    bar: "from-cyan-400 to-cyan-200",
    button: "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-800 border-cyan-400/40",
    glow: "shadow-cyan-400/20",
    badge: "bg-cyan-100/30 text-cyan-800 border-cyan-300/40",
    filterActive: "bg-cyan-500/30 text-cyan-800 border-cyan-400/60",
    sidebarActive: "bg-cyan-500/20 text-cyan-800 border-cyan-400/40 font-bold",
    sidebar: "text-cyan-900 hover:text-cyan-700"
  },
  hot: {
    cardBg: "bg-yellow-50/15 backdrop-blur-xl border-yellow-300/20",
    cardHover: "hover:bg-yellow-50/25 hover:border-yellow-400/40 hover:shadow-yellow-400/20",
    text: "text-yellow-900",
    textSecondary: "text-yellow-800",
    accent: "text-yellow-600",
    cardTitle: "font-bold text-yellow-900",
    cardDesc: "font-normal text-yellow-800",
    percent: "text-yellow-600",
    barBg: "bg-yellow-100/50",
    bar: "from-yellow-400 to-yellow-200",
    button: "bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-900 border-yellow-500/40",
    glow: "shadow-yellow-400/20",
    badge: "bg-yellow-100/30 text-yellow-900 border-yellow-400/40",
    filterActive: "bg-yellow-500/30 text-yellow-900 border-yellow-500/60",
    sidebarActive: "bg-yellow-400/20 text-yellow-900 border-yellow-500/40 font-bold",
    sidebar: "text-yellow-900 hover:text-yellow-700"
  },
  dark: {
    cardBg: "bg-gray-900/15 backdrop-blur-xl border-gray-700/20",
    cardHover: "hover:bg-gray-900/25 hover:border-blue-500/40 hover:shadow-blue-400/20",
    text: "text-gray-100",
    textSecondary: "text-gray-300",
    accent: "text-blue-400",
    cardTitle: "font-bold text-gray-100",
    cardDesc: "font-normal text-gray-300",
    percent: "text-blue-400",
    barBg: "bg-blue-900/50",
    bar: "from-blue-400 to-blue-900",
    button: "bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 border-blue-500/40",
    glow: "shadow-blue-400/20",
    badge: "bg-blue-900/30 text-blue-200 border-blue-500/40",
    filterActive: "bg-blue-600/30 text-blue-200 border-blue-500/60",
    sidebarActive: "bg-blue-600/20 text-blue-200 border-blue-500/40 font-bold",
    sidebar: "text-blue-200 hover:text-blue-400"
  }
};

const allSkillDetails = [
  { key: "Python", name: "Python", icon: <SiPython className="text-yellow-500"/>, desc: "Programming Language" },
  { key: "Java", name: "Java", icon: <FaJava className="text-red-500"/>, desc: "Programming Language" },
  { key: "Javascript", name: "Javascript", icon: <SiJavascript className="text-yellow-400"/>, desc: "Programming Language" },
  { key: "C", name: "C", icon: <FaCuttlefish className="text-yellow-400"/>, desc: "Programming Language" },
  { key: "C++", name: "C++", icon: <FaCuttlefish className="text-yellow-400"/>, desc: "Programming Language" },

  { key: "Next", name: "Next.js", icon: <SiNextdotjs className="text-cyan-400"/>, desc: "Front-End Framework" },
  { key: "react", name: "React.js", icon: <FaReact className="text-cyan-400"/>, desc: "Front-End Framework" },
  { key: "redux", name: "Redux.js", icon: <SiRedux className="text-purple-600"/>, desc: "State Management" },
  { key: "tailwind", name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400"/>, desc: "CSS Framework" },

  { key: "nodejs", name: "Node.js", icon: <FaNodeJs className="text-green-600"/>, desc: "Backend Runtime" },
  { key: "express", name: "Express.js", icon: <SiExpress className="text-black dark:text-white"/>, desc: "Backend Framework" },

  {
  key: "flask",
  name: "Flask",
  icon: <SiFlask className="text-gray-700" />,
  desc: "Python Web Framework",
},
  {
  key: "streamlit",
  name: "Streamlit",
  icon: <HiOutlineChartBar className="text-red-500" />,
  desc: "Python App Framework",
},
  {
    key: "scikit",
    name: "Scikit-learn",
    icon: <SiScikitlearn className="text-orange-500" />,
    desc: "Machine Learning Library",
  },
  {
    key: "nltk",
    name: "NLTK",
    icon: <SiPandas className="text-blue-500" />,
    desc: "Natural Language Toolkit",
  },
  {
    key: "pandas",
    name: "Pandas",
    icon: <SiPandas className="text-purple-800" />,
    desc: "Data Analysis Library",
  },
  {
    key: "matplotlib",
    name: "Matplotlib",
    icon: <SiPlotly className="text-indigo-500" />,
    desc: "Data Visualization Library",
  },
  {
  key: "jupyter",
  name: "Jupyter Notebook",
  icon: <SiJupyter className="text-orange-400" />,
  desc: "Interactive Computing",
},
  {
  key: "nlp",
  name: "NLP",
  icon: <FaBrain className="text-pink-500" />,
  desc: "Natural Language Processing",
},


  { key: "restapi", name: "RESTful APIs", icon: <FaServer className="text-blue-400"/>, desc: "API Design" },
  { key: "mongodb", name: "MongoDB", icon: <SiMongodb className="text-green-500"/>, desc: "NoSQL Database" },
  { key: "mysql", name: "MySQL", icon: <SiMysql className="text-blue-700"/>, desc: "RDBMS" },
  { key: "firebase", name: "Firebase", icon: <SiFirebase className="text-yellow-500"/>, desc: "Cloud Database" },
  { key: "postman", name: "Postman", icon: <SiPostman className="text-orange-500"/>, desc: "API Testing" },
  { key: "chromedevtools", name: "Chrome Dev Tools", icon: <FaChrome className="text-blue-500"/>, desc: "Debugging" },
  { key: "git", name: "Git", icon: <FaGitAlt className="text-orange-700"/>, desc: "Version Control" },
  { key: "docker", name: "Docker", icon: <FaDocker className="text-blue-500"/>, desc: "Containerization" },
  { key: "vercel", name: "Vercel", icon: <SiVercel className="text-black dark:text-white"/>, desc: "Cloud Deployment" },
  { key: "agile", name: "Agile & Scrum", icon: <FaTools className="text-green-600"/>, desc: "Methodology" },
];

// GROUPS
const skillSections = [
  { group: "Programming Languages", icon: <FaCode className="text-yellow-600" />, keys: ["C++","C","Python", "Java", "Javascript"] },
  { group: "Front-End Development", icon: <FaReact className="text-cyan-400" />, keys: ["react", "redux", "Next", "tailwind"] },
  { group: "Back-End Development", icon: <FaServer className="text-blue-500" />, keys: ["nodejs", "express", "restapi", "flask"] },
  { group: "Machine Learning", icon: <FaBrain className="text-blue-500" />, keys: ["pandas", "matplotlib", "nltk", "scikit", "jupyter", "nlp", "streamlit"] },
  { group: "Databases", icon: <FaDatabase className="text-orange-700" />, keys: ["mongodb", "mysql", "firebase"] },
  { group: "Testing & Debugging", icon: <FaBug className="text-red-500" />, keys: ["postman", "chromedevtools"] },
  { group: "DevOps & Deployment", icon: <FaTools className="text-green-600" />, keys: ["git",  "docker", "vercel"] },
  { group: "Project Management", icon: <FaJira className="text-blue-500" />, keys: ["jira", "agile"] }
];

// HIGHLIGHTS, EXPERIENCE, EDUCATION
const highlights = [
  {
    emoji: "🎓",
    text: "Recipient of the prestigious Vahani Scholarship — awarded to only 50 students across India for full undergraduate studies."
  },
  {
    emoji: "💼",
    text: "Top 500 finalist (out of 50,000+) in J.P. Morgan Chase's Code for Good Hackathon 2025."
  },
  {
    emoji: "📜",
    text: "IBM Certified in DevOps & Agile — gained hands-on experience with Docker, Jenkins, and CI/CD pipelines."
  },
  {
    emoji: "📈",
    text: "Microsoft Excel Certified — recognized for outstanding performance by Vahani Scholarship Trust."
  },
  {
    emoji: "🏫",
    text: "Proud alumnus of Jawahar Navodaya Vidyalaya — a premier CBSE residential school for rural students."
  },
  {
    emoji: "🤝",
    text: "Mentored through the Avanti Fellows program — focused on educational equity and peer learning."
  },
  {
    emoji: "♟️",
    text: "Cluster-level Chess Player — represented school in CBSE regional sports meet (2022–23)."
  }
];

const educationGroups = [
  {
    label: "CBSE (Xth Grade)",
    icon: <FaSchool className="text-cyan-500" />,
    entries: [
      {
        institution: "Jawahar Navodaya Vidyalaya, Tumakuru",
        period: "2020-2021",
        location: "Tumakuru, Karnataka",
        grade: "94.00%",
      },
    ],
  },
  {
    label: "CBSE (XIIth Grade)",
    icon: <FaGraduationCap className="text-yellow-600" />,
    entries: [
      {
        institution: "Jawahar Navodaya Vidyalaya, Tumakuru",
        period: "2022-2023",
        location: "Tumakuru, Karnataka",
        grade: "94.20%",
      },
    ],
  },
  {
    label: "B.Tech - Computer Science",
    icon: <FaUniversity className="text-blue-500" />,
    entries: [
      {
        institution: "Vellore Institute of Technology, Chennai",
        period: "2023-Present",
        location: "Chennai, TamilNadu",
        grade: "9.49 CGPA",
      },
    ],
  },
];

// ========== COMPONENTS ==========
function MainTabBar({ activeTab, setActiveTab, styles }) {
  const tabs = [
    { id: "skills", label: "Skills", icon: <FaCode className="text-blue-500" /> },
    { id: "highlights", label: "Highlights", icon: <FaTrophy className="text-yellow-500" /> },
    { id: "education", label: "Education", icon: <FaGraduationCap className="text-green-500" /> }
  ];
  return (
    <div className="grid grid-cols-4 md:flex md:flex-row items-center justify-center mb-8 md:mb-12 gap-2 md:gap-0">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 justify-center text-sm md:text-base
            ${activeTab === tab.id
              ? `${styles.button} border ${styles.glow} shadow-lg scale-105`
              : `${styles.textSecondary} hover:${styles.text}`
            }`}
          style={{ minWidth: "auto" }}
        >
          <span className="text-base md:text-lg flex items-center">
            {tab.icon}
          </span>
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

function SideTabBar({ groups, activeIndex, setActiveIndex, iconMap = {} }) {
  const { theme } = useTheme();
  const styles = themeStyles[theme] || themeStyles.icy;
  return (
    <div className="grid grid-cols-2 md:flex md:flex-col gap-2 md:pr-6 mb-4 md:mb-0 w-full md:w-auto">
      {groups.map((g, idx) => (
        <button
          key={g.label || g.group}
          onClick={() => setActiveIndex(idx)}
          className={`
            text-left px-3 md:px-5 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 border flex items-center gap-1 md:gap-2 justify-left md:justify-start text-xs md:text-base
            ${activeIndex === idx
              ? `${styles.sidebarActive} border-2`
              : `${styles.sidebar} border-transparent`}
          `}
        >
          {iconMap && iconMap[g.label || g.group] ? iconMap[g.label || g.group] : g.icon}
          <span className="whitespace-nowrap text-xs md:text-lg leading-tight">{g.label || g.group}</span>
        </button>
      ))}
    </div>
  );
}

function SkillCard({ skill, styles, isMobile = false }) {
  if (isMobile) {
    // Mobile version - only show icon
    return (
      <div
        className={`
          ${styles.cardBg} ${styles.cardHover} border rounded-xl
          transition-all duration-300 transform ${styles.glow} shadow-lg
          hover:scale-105 flex items-center justify-center
        `}
        style={{
          minHeight: 60,
          padding: "1rem",
          border: "1.5px solid rgba(0,195,255,0.11)",
          backdropFilter: "blur(7px)",
          aspectRatio: "1"
        }}
      >
        <span className="text-2xl">{skill.icon}</span>
      </div>
    );
  }

  // Desktop version - full card
  return (
    <div
      className={`
        ${styles.cardBg} ${styles.cardHover} border rounded-2xl
        transition-all duration-300 transform ${styles.glow} shadow-lg
        hover:scale-105
      `}
      style={{
        minHeight: 110,
        padding: "1.2rem 1.4rem",
        border: "1.5px solid rgba(0,195,255,0.11)",
        backdropFilter: "blur(7px)"
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{skill.icon}</span>
          <div>
            <div className={`text-[18px] ${styles.cardTitle}`}>{skill.name}</div>
            <div className={`text-[15px] ${styles.cardDesc}`} style={{marginTop: -2}}>{skill.desc}</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

// ========== MAIN ==========
export default function About() {
  const { theme } = useTheme();
  const styles = themeStyles[theme] || themeStyles.icy;
  const [activeTab, setActiveTab] = useState("skills");
  const [skillsTab, setSkillsTab] = useState(0);
  const [eduTab, setEduTab] = useState(0);

  const skillGroupIcons = {};
  skillSections.forEach(s => { skillGroupIcons[s.group] = s.icon; });

  // Education heading coloring per theme
  const edulabelStyle = `text-xl md:text-2xl font-bold ${styles.text}`;

  return (
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto px-4 py-8 md:py-16 scroll-mt-24"
    >
      {/* About Me heading and description - always at the top */}
      <div className="text-center mb-8 pt-8">
        <h1
          className={`text-3xl md:text-5xl lg:text-6xl font-bold ${styles.text} mb-4`}
        >
          About <span className={styles.accent}>Me</span>
        </h1>
        <p
          className={`text-lg md:text-xl ${styles.textSecondary} max-w-3xl mx-auto leading-relaxed`}
        >
          Skilled in React.js, Node.js, Python, and Git. Passionate about
          building full-stack applications and exploring real-world uses of AI.
        </p>
      </div>
      {/* Main Tabs */}
      <MainTabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        styles={styles}
      />
      <div className="min-h-[400px] md:min-h-[600px] transition-all duration-500">
        {/* Skills */}
        {activeTab === "skills" && (
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 animate-fadein">
            <SideTabBar
              groups={skillSections}
              activeIndex={skillsTab}
              setActiveIndex={setSkillsTab}
              iconMap={skillGroupIcons}
            />
            <div className="flex-1 transition-all duration-500">
              <div className="mb-4 md:mb-6 flex items-center gap-2">
                {skillSections[skillsTab].icon}
                <h2
                  className={`text-lg md:text-2xl font-bold ${styles.text} mb-3`}
                >
                  {skillSections[skillsTab].group}
                </h2>
              </div>
              {/* Mobile Grid - 4 columns */}
              <div className="grid grid-cols-4 gap-3 md:hidden">
                {skillSections[skillsTab].keys.map((key) => {
                  const skill = allSkillDetails.find((s) => s.key === key);
                  if (!skill) return null;
                  return (
                    <SkillCard
                      key={key}
                      skill={skill}
                      styles={styles}
                      isMobile={true}
                    />
                  );
                })}
              </div>
              {/* Desktop Grid - 2 columns */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                {skillSections[skillsTab].keys.map((key) => {
                  const skill = allSkillDetails.find((s) => s.key === key);
                  if (!skill) return null;
                  return (
                    <SkillCard
                      key={key}
                      skill={skill}
                      styles={styles}
                      isMobile={false}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/* Highlights */}
        {activeTab === "highlights" && (
          <div className="w-full transition-all duration-500 animate-fadein">
            <div
              className={`w-full mx-auto ${styles.cardBg} ${styles.cardHover} border rounded-2xl shadow-xl p-4 md:p-7 ${styles.glow} transition-all duration-500`}
            >
              <div className="flex items-center mb-4 md:mb-6 gap-3">
                <FaTrophy className={`text-2xl md:text-3xl ${styles.accent}`} />
                <h2 className={`text-2xl md:text-3xl font-bold ${styles.text}`}>
                  Highlights
                </h2>
              </div>
              <ul className="flex flex-col gap-4 md:gap-6 w-full">
                {highlights.map((ach, i) => (
                  <li
                    key={i}
                    className="flex gap-3 md:gap-4 items-start animate-slideup"
                    style={{ animationDelay: `${i * 0.11}s` }}
                  >
                    <span className="text-xl md:text-2xl mt-1 leading-none select-none">
                      {ach.emoji}
                    </span>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center gap-2 text-sm md:text-lg font-medium">
                        <span className={`${styles.text}`}>{ach.text}</span>
                        {ach.link && (
                          <a
                            href={ach.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`ml-1 ${styles.accent} hover:underline inline-flex items-center`}
                          >
                            <FaExternalLinkAlt className="text-xs md:text-sm" />
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* Education */}
        {activeTab === "education" && (
          <div className="flex flex-col md:flex-row gap-4 md:gap-7 items-stretch animate-fadein">
            {educationGroups.map((edu, idx) => (
              <div
                key={edu.label}
                className={`flex-1 min-w-[200px] mb-6 md:mb-0 p-4 md:p-6 rounded-2xl border ${styles.cardBg} ${styles.cardHover} ${styles.glow} shadow-lg flex flex-col gap-3 md:gap-4 items-center animate-slideup`}
                style={{ animationDelay: `${idx * 0.16}s` }}
              >
                <div className="mb-2 flex items-center gap-2">
                  {edu.icon}
                  <span className={edulabelStyle}>{edu.label}</span>
                </div>
                {edu.entries.map((entry, idy) => (
                  <div
                    key={idy}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="text-base md:text-lg font-bold mb-1 flex items-center gap-2">
                      <FaGraduationCap className="text-cyan-500" />
                      {entry.degree}
                    </div>
                    <div
                      className={`text-sm md:text-base font-semibold ${styles.accent}`}
                    >
                      {entry.institution}
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3 justify-center text-xs md:text-sm items-center my-2">
                      <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <FaCalendarAlt className="text-xs" />
                        {entry.period}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <FaMapMarkerAlt className="text-xs" />
                        {entry.location}
                      </span>
                    </div>
                    <div
                      className={`text-sm md:text-base font-semibold ${styles.text} mt-2`}
                    >
                      {entry.grade}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Animation styles */}
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideup {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.6s ease-out forwards;
        }
        .animate-slideup {
          animation: slideup 0.8s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}