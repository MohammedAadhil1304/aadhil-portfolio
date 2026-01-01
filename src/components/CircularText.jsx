import { motion } from "framer-motion";

export default function CircularText() {
  return (
    <motion.svg
      width="440"
      height="440"
      viewBox="0 0 440 440"
      className="absolute inset-0 pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{
        duration: 50,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <defs>
        <path
          id="textCircle"
          d="
            M 220, 220
            m -190, 0
            a 190,190 0 1,1 380,0
            a 190,190 0 1,1 -380,0
          "
        />
      </defs>

      <text
        fill="#8B5CF6"
        fontSize="15"
        letterSpacing="5"
        fontFamily="Sora, sans-serif"
      >
        <textPath
          href="#textCircle"
          startOffset="50%"
          textAnchor="middle"
        >
          MOHAMMED · AADHIL · CYBERSECURITY · SOFTWARE DEVELOPER ·
        </textPath>
      </text>
    </motion.svg>
  );
}
