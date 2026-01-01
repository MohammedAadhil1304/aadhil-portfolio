const base = {
  stroke: "#8B5CF6",
  strokeWidth: 2,
};

export const AboutIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" {...base} />
    <path d="M4 22c0-4 4-6 8-6s8 2 8 6" {...base} />
  </svg>
);

export const SkillsIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l3.5 6.5L22 10l-5 4.5L18 22l-6-3.5L6 22l1-7.5L2 10l6.5-1.5L12 2z"
      {...base}
    />
  </svg>
);

export const ProjectsIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="2" {...base} />
    <rect x="14" y="3" width="7" height="7" rx="2" {...base} />
    <rect x="3" y="14" width="7" height="7" rx="2" {...base} />
    <rect x="14" y="14" width="7" height="7" rx="2" {...base} />
  </svg>
);

export const ExperienceIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="6" width="16" height="14" rx="2" {...base} />
    <path d="M9 6V4h6v2" {...base} />
  </svg>
);

export const ContactIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <path d="M4 4h16v12H4z" {...base} />
    <path d="M4 6l8 6 8-6" {...base} />
  </svg>
);

export const ResumeIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="3" width="14" height="18" rx="2" {...base} />
    <path d="M8 9h8M8 13h6" {...base} />
  </svg>
);
