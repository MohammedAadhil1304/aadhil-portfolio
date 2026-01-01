import { motion } from "framer-motion";

export default function PowerButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      animate={{
        boxShadow: [
          "0 0 40px rgba(139,92,246,0.5)",
          "0 0 120px rgba(139,92,246,1)",
          "0 0 40px rgba(139,92,246,0.5)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        w-16 h-16 sm:w-20 sm:h-20

        rounded-full
        bg-gradient-to-br from-[#2a1850] to-black
        border border-violetGlow/50
        text-6xl text-violetGlow
        shadow-2xl
        flex items-center justify-center
        focus:outline-none
      "
    >
      ⏻
    </motion.button>
  );
}
