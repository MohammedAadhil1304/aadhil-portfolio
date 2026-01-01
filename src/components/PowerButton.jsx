import { motion } from "framer-motion";

export default function PowerButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.88 }}
      animate={{
        boxShadow: [
          "0 0 20px rgba(139,92,246,0.4)",
          "0 0 60px rgba(139,92,246,0.9)",
          "0 0 20px rgba(139,92,246,0.4)",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        w-14 h-14
        sm:w-16 sm:h-16
        md:w-20 md:h-20
        rounded-full
        bg-gradient-to-br from-[#2a1850] to-black
        border border-violetGlow/50
        text-2xl
        sm:text-3xl
        md:text-5xl
        text-violetGlow
        shadow-xl
        flex items-center justify-center
        focus:outline-none
      "
      aria-label="Enter portfolio"
    >
      ⏻
    </motion.button>
  );
}
