import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import PowerButton from "../components/PowerButton";

export default function Landing({ onPower }) {
  return (
    <motion.div
      className="
        min-h-screen
        w-full
        flex items-center justify-center
        px-4
        relative overflow-hidden
      "
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(139,92,246,0.25), transparent 60%),
          radial-gradient(circle at 80% 80%, rgba(109,40,217,0.25), transparent 60%),
          linear-gradient(135deg, #05010d, #120720, #05010d)
        `,
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Soft breathing glow */}
      <motion.div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_70%)]
        "
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full flex justify-center">
        <GlassCard
          className="
            w-full
            max-w-[560px]
            px-6 py-8
            sm:px-8 sm:py-10
            lg:px-10 lg:py-12
            text-center
          "
        >
          {/* Power Button */}
          <div className="flex justify-center">
            <button onClick={onPower} className="focus:outline-none">
              <PowerButton />
            </button>
          </div>

          {/* Name */}
          <h1
            className="
              mt-8
              text-xl
              sm:text-2xl
              lg:text-3xl
              font-semibold
              tracking-[0.2em]
              text-[#F5F3FF]
              break-words
            "
          >
            MOHAMMED&nbsp;AADHIL&nbsp;N
          </h1>

          {/* Role */}
          <p
            className="
              mt-4
              text-xs
              sm:text-sm
              lg:text-base
              tracking-[0.25em]
              uppercase
              font-medium
              text-violetGlow
            "
          >
            Cybersecurity & Software Developer
          </p>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-md
              mx-auto
              text-sm
              sm:text-[15px]
              lg:text-[16px]
              leading-relaxed
              text-[#E9D5FF]
            "
          >
            I specialize in building secure, scalable software systems with a
            strong focus on cybersecurity, system architecture, and modern
            application development — driven by resilience, performance, and
            security by design.
          </p>

          {/* CTA */}
          <p
            className="
              mt-8
              text-xs
              sm:text-sm
              font-medium
              tracking-wide
              text-violetGlow
            "
          >
            Press the power button to enter my portfolio
          </p>
        </GlassCard>
      </div>
    </motion.div>
  );
}