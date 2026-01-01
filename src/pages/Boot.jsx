import { useEffect, useState } from "react";

const boots = [
  {
    id: "mac",
    content: (
      <>
        <p className="text-white text-sm">Starting macOS</p>
        <div className="mt-4 w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      </>
    ),
  },
  {
    id: "linux",
    content: (
      <>
        <p className="text-green-400 font-mono text-sm">
          [ OK ] Initializing kernel
        </p>
        <p className="text-green-400 font-mono text-sm">
          [ OK ] Mounting file systems
        </p>
        <p className="text-green-400 font-mono text-sm">
          [ OK ] Starting services
        </p>
      </>
    ),
  },
  {
    id: "windows",
    content: (
      <>
        <p className="text-white text-sm mb-4">Starting Windows</p>
        <div className="flex gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white rounded-full animate-pulse"
            />
          ))}
        </div>
      </>
    ),
  },
];

export default function Boot({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= boots.length) {
      const done = setTimeout(onFinish, 800);
      return () => clearTimeout(done);
    }

    const timer = setTimeout(() => {
      setIndex((i) => i + 1);
    }, 2200);

    return () => clearTimeout(timer);
  }, [index, onFinish]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-3">
        {boots[index]?.content}
      </div>
    </div>
  );
}
