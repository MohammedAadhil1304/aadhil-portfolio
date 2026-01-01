export default function FloatingRectText() {
  return (
    <svg
  width="100%"
  height="100%"
  viewBox="0 0 460 560"
  preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 pointer-events-none"
    >
      <defs>
        {/* Rounded rectangle path */}
        <path
          id="rectPath"
          d="
            M 60 40
            H 400
            Q 420 40 420 60
            V 500
            Q 420 520 400 520
            H 60
            Q 40 520 40 500
            V 60
            Q 40 40 60 40
            Z
          "
        />
      </defs>

      <text
  fill="#8B5CF6"
  fontSize="12"
  letterSpacing="4"
  fontFamily="Sora, sans-serif"
  className="sm:text-[13px] lg:text-[14px]"
>

        <textPath href="#rectPath" startOffset="0%">
          {/* TRAIN EFFECT */}
          <animate
            attributeName="startOffset"
            from="0%"
            to="100%"
            dur="30s"
            repeatCount="indefinite"
          />
          MOHAMMED · AADHIL · CYBERSECURITY · SOFTWARE DEVELOPER ·
        </textPath>
      </text>
    </svg>
  );
}
