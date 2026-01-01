import { motion } from "framer-motion";

export default function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`
        relative
        w-full
        max-w-[520px] sm:max-w-[640px] lg:max-w-[860px]
        mx-auto
        px-6 py-8
        sm:px-10 sm:py-12
        lg:px-20 lg:py-16
        rounded-2xl sm:rounded-3xl
        bg-[#1a102b]/65
        backdrop-blur-2xl
        border border-violetGlow/35
        shadow-[0_30px_100px_rgba(139,92,246,0.35)]
        text-center
        overflow-hidden
        ${className}
      `}
    >
      {/* Inner depth (glass thickness) */}
      <div
        className="
          absolute inset-0
          rounded-2xl sm:rounded-3xl
          shadow-inner
          shadow-black/40
          pointer-events-none
        "
      />

      {/* Purple aura */}
      <div
        className="
          absolute -inset-24
          bg-violetGlow/25
          blur-[140px]
          -z-10
        "
      />

      {/* Glass highlight */}
      <div
        className="
          absolute inset-0
          rounded-2xl sm:rounded-3xl
          bg-gradient-to-b
          from-white/15 via-transparent to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
