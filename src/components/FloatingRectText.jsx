export default function FloatingRectText() {
  return (
    <svg
  width="100%"
  height="100%"
  viewBox="0 0 460 560"
  preserveAspectRatio="xMidYMid meet"
  className="
    absolute inset-0
    scale-[0.9]
    sm:scale-100
  "
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
  fill="#A78BFA"
  fontSize="13"
  letterSpacing="5"
  opacity="0.9"
>


        <textPath href="#rectPath" startOffset="0%">
          {/* TRAIN EFFECT */}
          <animateTransform
  attributeName="transform"
  type="rotate"
  from="0 230 280"
  to="360 230 280"
  dur="18s"
  repeatCount="indefinite"
/>
         MOHAMMED AADHIL • CYBERSECURITY • SOFTWARE DEVELOPER •
        </textPath>
      </text>
    </svg>
  );
}
