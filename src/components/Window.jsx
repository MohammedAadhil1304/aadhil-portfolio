import { motion } from "framer-motion";

export default function Window({
  title,
  zIndex,
  position,
  onFocus,
  onClose,
  children,
}) {
  return (
    <motion.div
      drag={window.innerWidth >= 1024}

      dragMomentum={false}
      onMouseDown={onFocus}
      style={{
        zIndex,
        top: position.top,
        left: position.left,
      }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        absolute
w-[92vw] lg:w-[760px]
left-1/2 lg:left-auto
-translate-x-1/2 lg:translate-x-0
        rounded-2xl
        bg-[#161024]/90
        backdrop-blur-xl
        border border-white/10
        shadow-[0_40px_120px_rgba(0,0,0,0.6)]
        text-[#E6E6EB]
      "
    >
      {/* macOS Title Bar */}
      <div
        className="
          flex items-center
          h-11 px-4
          border-b border-white/10
          select-none
        "
      >
        {/* Traffic lights */}
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-[#ff5f57]"
          />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Title */}
        <div className="flex-1 text-center">
          <span className="text-xs tracking-wide text-white/60">
            {title}
          </span>
        </div>
      </div>

      {/* Window Content */}
      <div className="px-10 py-8">
        {children}
      </div>
    </motion.div>
  );
}
