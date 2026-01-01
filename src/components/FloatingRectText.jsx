export default function FloatingRectText() {
  return (
    <div
      className="
        absolute inset-0
        flex items-center justify-center
        pointer-events-none
        z-30
      "
    >
      <div
        className="
          relative
          w-[320px] h-[320px]
          sm:w-[380px] sm:h-[380px]
          animate-rotateSlow
        "
      >
        <svg
          viewBox="0 0 320 320"
          width="100%"
          height="100%"
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 160 160
                m -120 0
                a 120 120 0 1 1 240 0
                a 120 120 0 1 1 -240 0
              "
            />
          </defs>

          <text
            fill="#C4B5FD"
            fontSize="14"
            letterSpacing="4"
            fontFamily="system-ui, sans-serif"
            opacity="1"
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
