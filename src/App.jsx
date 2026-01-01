import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";
import BootSequence from "./pages/BootSequence";
import Desktop from "./pages/Desktop";

export default function App() {
  const [stage, setStage] = useState("entry");

  return (
    <AnimatePresence mode="wait">
      {stage === "entry" && <Landing onPower={() => setStage("boot")} />}
      {stage === "boot" && <BootSequence onFinish={() => setStage("desktop")} />}
      {stage === "desktop" && <Desktop />}
    </AnimatePresence>
  );
}
