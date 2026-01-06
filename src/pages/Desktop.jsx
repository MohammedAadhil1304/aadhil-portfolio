import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  AboutIcon,
  SkillsIcon,
  ProjectsIcon,
  ExperienceIcon,
  ContactIcon,
  ResumeIcon,
} from "../components/OrbitalIcons";
import { TerminalIcon } from "../components/DesktopIcons";

import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";

/* =========================
   SECTION CONTENT MAP
========================= */
const SECTIONS = {
  about: <About />,
  skills: <Skills />,
  projects: <Projects />,
  experience: <Experience />,
  resume: (
    <iframe
      src={`${import.meta.env.BASE_URL}resume.pdf`}
      title="Resume"
      className="w-full h-[70vh] rounded-xl border border-white/20"
    />
  ),
  contact: <Contact />,
  terminal: <Terminal />,
};

/* =========================
   SIDEBAR APPS
========================= */
const APPS = [
  { id: "about", title: "About", icon: AboutIcon },
  { id: "skills", title: "Skills", icon: SkillsIcon },
  { id: "projects", title: "Projects", icon: ProjectsIcon },
  { id: "experience", title: "Experience", icon: ExperienceIcon },
  { id: "resume", title: "Resume", icon: ResumeIcon },
  { id: "contact", title: "Contact", icon: ContactIcon },
  { id: "terminal", title: "Terminal", icon: TerminalIcon },
];

export default function Desktop() {
  const [activeSection, setActiveSection] = useState("about");
  const contentRef = useRef(null);

  const handleSelect = (id) => {
    setActiveSection(id);

    // Mobile: auto-scroll to content
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);
    }
  };

  return (
    <div className="min-h-screen bg-darkBase relative overflow-hidden flex flex-col lg:flex-row">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_60%)]" />

      {/* =========================
          LEFT SIDEBAR
      ========================= */}
      <aside className="relative z-10 w-full lg:w-72 p-5 sm:p-6 lg:p-10 space-y-3">
        {APPS.map((app) => {
          const Icon = app.icon;
          const isActive = activeSection === app.id;

          return (
            <button
              key={app.id}
              onClick={() => handleSelect(app.id)}
              className={`
                w-full flex items-center gap-4
                p-4 rounded-xl
                transition
                ${
                  isActive
                    ? "bg-violetGlow/25"
                    : "bg-[#161024]/70 hover:bg-[#1f1634]"
                }
              `}
            >
              <div className="p-2 rounded-lg border border-violetGlow/40">
                <Icon />
              </div>

              <span className="text-sm tracking-widest text-[#E9D5FF]">
                {app.title}
              </span>
            </button>
          );
        })}
      </aside>

      {/* =========================
          CENTER PROFILE
      ========================= */}
      <section className="relative z-10 flex items-center justify-center py-8 lg:py-0 lg:w-[420px]">
        <div className="relative w-[300px] h-[420px] sm:w-[360px] sm:h-[480px]">
          <div
            className="
              absolute inset-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[220px] h-[320px]
              sm:w-[260px] sm:h-[360px]
              rounded-2xl
              bg-[#161024]/90
              backdrop-blur-xl
              border border-violetGlow/60
              shadow-[0_0_120px_rgba(139,92,246,0.45)]
              overflow-hidden
              z-20
            "
          >
            {/* subtle ring */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-violetGlow/30 pointer-events-none" />

            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="MOHAMMED AADHIL N"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* =========================
          RIGHT CONTENT PANEL
      ========================= */}
      <main
        ref={contentRef}
        className="relative z-10 flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-12 overflow-y-auto"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              max-w-4xl mx-auto
              bg-[#1b1333]/85
              backdrop-blur-xl
              border border-violetGlow/30
              rounded-2xl
              p-5 sm:p-7 lg:p-10
              shadow-[0_30px_80px_rgba(0,0,0,0.6)]
            "
          >
            {SECTIONS[activeSection]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/* =========================
   TERMINAL SECTION
========================= */
function Terminal() {
  return (
    <div className="font-mono text-xs sm:text-sm space-y-2">
      <p className="text-violetGlow">{">"} whoami</p>
      <p className="text-[#F5F3FF] font-semibold">
        MOHAMMED AADHIL N
      </p>

      <p className="mt-3 text-violetGlow">{">"} ls</p>
      <p className="text-[#DDD6FE]">
        about&nbsp;&nbsp;skills&nbsp;&nbsp;projects&nbsp;&nbsp;
        experience&nbsp;&nbsp;resume&nbsp;&nbsp;contact
      </p>
    </div>
  );
}
