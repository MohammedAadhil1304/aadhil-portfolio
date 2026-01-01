export default function PowerButton() {
  return (
    <button
      className="
        w-14 h-14
        sm:w-16 sm:h-16
        md:w-20 md:h-20
        rounded-full
        bg-gradient-to-br from-[#2a1850] to-black
        border border-violetGlow/50
        shadow-xl
        flex items-center justify-center
        focus:outline-none
        animate-powerGlow
      "
      aria-label="Enter portfolio"
    >
      {/* SVG Power Icon */}
      <svg
        viewBox="0 0 24 24"
        className="
          w-6 h-6
          sm:w-7 sm:h-7
          md:w-9 md:h-9
          stroke-violetGlow
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v10" />
        <path d="M6.38 6.38a9 9 0 1 0 11.24 0" />
      </svg>
    </button>
  );
}
