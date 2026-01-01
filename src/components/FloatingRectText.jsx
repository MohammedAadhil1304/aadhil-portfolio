export default function FloatingRectText() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <div className="relative w-full h-full animate-rotateSlow">
        <svg
          viewBox="0 0 460 560"
          width="100%"
          height="100%"
          className="scale-[0.9] sm:scale-100"
        >
          <defs>
            <path
              id="circlePath"
              d="M 230 280 m -150 0 a 150 150 0 1 1 300 0 a 150 150 0 1 1 -300 0"
            />
          </defs>

          <text
            fill="#A78BFA"
            fontSize="13"
            letterSpacing="5"
            opacity="0.9"
            fontFamily="Sora, sans-serif"
          >
            <textPath href="#circlePath">
              MOHAMMED AADHIL • CYBERSECURITY • SOFTWARE DEVELOPER •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
