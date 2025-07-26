import React, { useState, useEffect } from "react";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket, FaLightbulb, FaArrowUp, FaHeart, FaReact,
  FaGithub, FaLinkedin, FaInstagram
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGooglescholar, SiQwiklabs } from "react-icons/si";
import { useTheme } from "../ThemeContext";

// =================== Theme Styles ===================
const themeStyles = {
  icy: {
    cardBg: "bg-white/15 backdrop-blur-xl border-white/20",
    cardHover: "hover:bg-white/25 hover:border-cyan-300/40",
    text: "text-gray-800",
    textSecondary: "text-gray-600",
    accent: "text-cyan-600",
    icon: "text-cyan-600",
    footerBg: "bg-gradient-to-t from-white/20 to-white/10 backdrop-blur-xl border-t border-white/20",
    primaryButton: "bg-cyan-500 hover:bg-cyan-600 text-white",
    glow: "shadow-cyan-400/20"
  },
  hot: {
    cardBg: "bg-yellow-50/15 backdrop-blur-xl border-yellow-300/20",
    cardHover: "hover:bg-yellow-50/25 hover:border-yellow-400/40",
    text: "text-yellow-900",
    textSecondary: "text-yellow-800",
    accent: "text-yellow-600",
    icon: "text-yellow-600",
    footerBg: "bg-gradient-to-t from-yellow-50/20 to-yellow-50/10 backdrop-blur-xl border-t border-yellow-300/20",
    primaryButton: "bg-yellow-500 hover:bg-yellow-600 text-white",
    glow: "shadow-yellow-400/20"
  },
  dark: {
    cardBg: "bg-gray-900/15 backdrop-blur-xl border-gray-700/20",
    cardHover: "hover:bg-gray-900/25 hover:border-blue-500/40",
    text: "text-gray-100",
    textSecondary: "text-gray-300",
    accent: "text-blue-400",
    icon: "text-blue-400",
    footerBg: "bg-gradient-to-t from-gray-900/20 to-gray-900/10 backdrop-blur-xl border-t border-gray-700/20",
    primaryButton: "bg-blue-600 hover:bg-blue-700 text-white",
    glow: "shadow-blue-400/20"
  }
};

const emailInitial = "likhithba2005@gmail.com";
const emailDomains = [
  { domain: "gmail.com", color: "#06b622" },
];

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "likhithba2005@gmail.com", 
    link: "mailto:likhithba2005@gmail.com",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+91 7022353911",
    link: "tel:+917022353911",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Sira, Karnataka",
    link: "https://maps.google.com/?q=Udupi,Karnataka",
  }
];

const socialLinks = [
  {
    icon: <FaGithub />,
    name: "GitHub",
    url: "https://github.com/likhith-b-a",
    color: "text-gray-800 dark:text-gray-200",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    url: "https://linkedin.com/in/ba-likhith",
    color: "text-blue-600",
  },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    url: "https://www.instagram.com/likhithba_51",
    color: "text-pink-500",
  }
];

// Contact Card with animated domain for email
const ContactCard = ({ contact, index, theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const styles = themeStyles[theme];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);


  return (
    <a
      href={contact.link}
      target={contact.link.startsWith('http') ? "_blank" : "_self"}
      rel={contact.link.startsWith('http') ? "noopener noreferrer" : undefined}
      className={`block p-6 rounded-2xl border transition-all duration-700 ${styles.cardBg} ${styles.cardHover} shadow-lg transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} group overflow-x-auto`}
    >
      <div className="flex items-start gap-4 min-w-0">
        <div className={`p-3 rounded-xl ${styles.cardBg} border group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
          <span className={`text-2xl ${styles.icon}`}>{contact.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`text-lg font-bold ${styles.text} mb-1`}>{contact.label}</h3>
          <p className={`text-base font-semibold ${styles.accent} mb-2 break-all`}>
            {contact.value}
          </p>
        </div>
      </div>
    </a>
  );
};

// Social card (old card grid style)
const SocialCard = ({ social, index, theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const styles = themeStyles[theme];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 120);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-4 rounded-xl border transition-all duration-500 ${styles.cardBg} ${styles.cardHover} shadow-lg transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} group`}
      style={{ transitionDelay: `${index * 75}ms` }}
      aria-label={social.name}
      title={social.name}
    >
      <div className="text-center">
        <div className={`inline-flex p-3 rounded-lg ${styles.cardBg} border mb-3 group-hover:scale-110 transition-transform duration-300`}>
          <span className={`text-2xl ${social.color}`}>{social.icon}</span>
        </div>
        <h3 className={`font-semibold ${styles.text} mb-1`}>{social.name}</h3>
        <p className={`text-xs ${styles.textSecondary}`}>{social.description}</p>
      </div>
    </a>
  );
};

// Scroll To Top
const ScrollToTop = ({ theme }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const styles = themeStyles[theme];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full ${styles.primaryButton} shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default function Contact() {
  const { theme } = useTheme();
  const styles = themeStyles[theme] || themeStyles.icy;
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 relative">
      {/* Header centered */}
      <div className="mb-16 flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className={`text-5xl md:text-6xl font-bold ${styles.text} mb-4`}>
            Get In <span className={styles.accent}>Touch</span>
          </h1>
          <p
            className={`text-xl ${styles.textSecondary} max-w-3xl mx-auto leading-relaxed`}
          >
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {contactInfo.map((contact, index) => (
            <ContactCard
              key={contact.label}
              contact={contact}
              index={index}
              theme={theme}
            />
          ))}
        </div>
      </div>

      {/* Social Links (old card grid style) */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold ${styles.text} mb-4 flex items-center justify-center gap-3`}
          >
            <FaLightbulb className={styles.accent} />
            Follow My Journey
          </h2>
          <p className={`${styles.textSecondary} text-lg`}>
            Stay updated with my latest projects and tech insights
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {socialLinks.map((social, index) => (
            <SocialCard
            key={social.name}
            social={social}
            index={index}
            theme={theme}
            />
          ))}
        </div>
      </div>

      {/* Footer & Scroll to Top */}
      <ScrollToTop theme={theme} />
      <footer className={`relative mt-20 ${styles.footerBg}`}>
        <div
          className={`border-t border-opacity-20 ${styles.cardBg} backdrop-blur-xl`}
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div
                className={`text-sm ${styles.textSecondary} text-center md:text-left break-words w-full`}
              >
                <p className="flex items-center justify-center md:justify-start gap-2 flex-wrap break-all w-full">
                  Designed By Likhith B A
                </p>
              </div>
              {/* Fix: Always force 'Powered by React' to be a single line on desktop */}
            </div>
          </div>
        </div>
        {/* Custom CSS for animations and horizontal overflow fix */}
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg);}
            to { transform: rotate(360deg);}
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-spin-slow, .animate-pulse { animation: none; }
          }
        `}</style>
      </footer>
    </div>
  );
}