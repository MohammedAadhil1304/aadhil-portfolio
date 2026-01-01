/* macOS-style icons (Finder inspired, original SVGs) */

export const FolderIcon = () => (
  <svg width="72" height="56" viewBox="0 0 72 56" fill="none">
    <defs>
      <linearGradient id="folderTop" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3b2466"/>
        <stop offset="100%" stopColor="#24113f"/>
      </linearGradient>
      <linearGradient id="folderBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a1850"/>
        <stop offset="100%" stopColor="#120720"/>
      </linearGradient>
    </defs>

    {/* Top flap */}
    <path
      d="M6 10h22l6 6h32v8H6z"
      fill="url(#folderTop)"
    />

    {/* Body */}
    <rect
      x="6"
      y="16"
      width="60"
      height="34"
      rx="6"
      fill="url(#folderBody)"
      stroke="#8B5CF6"
      strokeOpacity="0.45"
    />
  </svg>
);

export const ResumeIcon = () => (
  <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
    <defs>
      <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a1850"/>
        <stop offset="100%" stopColor="#120720"/>
      </linearGradient>
    </defs>

    <rect
      x="8"
      y="4"
      width="48"
      height="64"
      rx="6"
      fill="url(#paper)"
      stroke="#8B5CF6"
      strokeOpacity="0.5"
    />

    <line x1="16" y1="20" x2="48" y2="20" stroke="#8B5CF6"/>
    <line x1="16" y1="28" x2="48" y2="28" stroke="#8B5CF6"/>
    <line x1="16" y1="36" x2="40" y2="36" stroke="#8B5CF6"/>
  </svg>
);

export const TerminalIcon = () => (
  <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
    <rect
      x="2"
      y="2"
      width="60"
      height="44"
      rx="6"
      fill="#120720"
      stroke="#8B5CF6"
      strokeOpacity="0.45"
    />
    <path
      d="M14 16l6 6-6 6"
      stroke="#8B5CF6"
      strokeWidth="2"
    />
    <line
      x1="26"
      y1="28"
      x2="42"
      y2="28"
      stroke="#8B5CF6"
      strokeWidth="2"
    />
  </svg>
);
