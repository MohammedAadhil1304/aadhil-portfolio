import { motion } from "framer-motion";

export default function FloatingRectText() {
  return (
    <motion.div
      className="
        absolute inset-0
        flex items-center justify-center
        pointer-events-none
        z-10
      "
      animate={{ rotate: 360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 460 560"
        width="100%"
        height="100%"
        className="
          scale-[0.9]
          sm:scale-100
        "
      >
        <defs>
          <path
            id="textPath"
            d="M 80 280 A 150 150 0 1 1 380 280 A 150 150 0 1 1 80 280"
          />
        </defs>

        <text
          fill="#A78BFA"
          fontSize="13"
          letterSpacing="5"
          opacity="0.9"
          fontFamily="Sora, sans-serif"
        >
          <textPath href="#textPath">
            MOHAMMED AADHIL • CYBERSECURITY • SOFTWARE DEVELOPER •
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
