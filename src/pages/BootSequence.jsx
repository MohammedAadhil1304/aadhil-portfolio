import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =======================
   SVG LOGOS (96px)
======================= */

// Apple (clean, minimal)
const AppleLogo = () => (
  <svg width="96" height="96" viewBox="0 0 24 24" fill="white">
    <path d="M16.365 1.43c0 1.14-.465 2.09-1.39 2.85-.94.78-2.12 1.38-3.43 1.27-.15-1.07.47-2.16 1.35-2.88.96-.8 2.33-1.4 3.47-1.24zM20.98 17.18c-.39.91-.57 1.32-1.08 2.14-.71 1.14-1.72 2.55-2.97 2.56-1.11.01-1.4-.73-2.93-.73-1.53 0-1.86.72-2.98.74-1.25.01-2.2-1.29-2.91-2.43-1.98-3.2-2.19-6.96-.97-8.88.87-1.38 2.24-2.18 3.53-2.18 1.32 0 2.16.73 3.25.73 1.05 0 1.69-.74 3.24-.74 1.14 0 2.35.62 3.22 1.7-2.83 1.55-2.37 5.58.6 6.89z"/>
  </svg>
);

// Kali-style Dragon (sharp, powerful, elite)
const LinuxDragonLogo = () => (
  <svg
    width="96"
    height="96"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#8B5CF6"
      d="M256 32c-28 40-22 92 10 132l-40 28c-28-20-66-18-90 8
         -30 32-22 86 14 114l-32 44c-40-10-84 10-102 50
         44-14 86 2 106 38 20 36 6 82-28 104
         54 4 98-30 108-78l52-10c24 28 64 36 96 18
         36-20 50-66 30-102l44-34c38 26 90 22 122-14
         -48 6-88-18-94-58-6-38 22-74 62-80
         -44-30-104-24-142 14l-50-32c14-36 2-80-30-102z"
    />
  </svg>
);

// Windows (stable, enterprise)
const WindowsLogo = () => (
  <svg width="96" height="96" viewBox="0 0 24 24" fill="white">
    <path d="M3 4l8-1v9H3V4zm10-1l8-1v10h-8V3zM3 13h8v9l-8-1v-8zm10 0h8v10l-8-1v-9z"/>
  </svg>
);

/* =======================
   BOOT STEPS
======================= */

const STEPS = [
  {
    id: "mac",
    duration: 2200,
    render: () => (
      <>
        <AppleLogo />

        <motion.div
          className="mt-6 w-12 h-12 border-2 border-white/30 border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        <p className="mt-6 text-xs tracking-widest text-white/60">
          Starting macOS
        </p>
      </>
    ),
  },

  {
    id: "linux",
    duration: 2200,
    render: () => (
      <>
        <LinuxDragonLogo />

        <div className="mt-6 space-y-1 text-xs font-mono text-violetGlow/80">
          <p>[ OK ] Initializing kernel</p>
          <p>[ OK ] Mounting file systems</p>
          <p>[ OK ] Starting services</p>
        </div>

        <motion.div
          className="mt-4 h-[2px] w-56 bg-violetGlow"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
      </>
    ),
  },

  {
    id: "windows",
    duration: 2200,
    render: () => (
      <>
        <WindowsLogo />

        <p className="mt-6 text-xs tracking-widest text-white/60">
          Starting Windows
        </p>

        <motion.div
          className="mt-4 flex gap-2"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-white/80"
            />
          ))}
        </motion.div>
      </>
    ),
  },
];

/* =======================
   COMPONENT
======================= */

export default function BootSequence({ onFinish }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= STEPS.length) {
      onFinish();
      return;
    }

    const timer = setTimeout(
      () => setStep((s) => s + 1),
      STEPS[step].duration
    );

    return () => clearTimeout(timer);
  }, [step, onFinish]);

  return (
    <div className="min-h-screen bg-darkBase flex items-center justify-center relative overflow-hidden">
      {/* Purple ambient glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.18),_transparent_65%)]
        "
      />

      <AnimatePresence mode="wait">
        {STEPS[step] && (
          <motion.div
            key={STEPS[step].id}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center text-white"
          >
            {STEPS[step].render()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
