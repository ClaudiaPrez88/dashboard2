"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function BreathingExercise() {
  const [phase, setPhase] = useState("Inhala");
  const [running, setRunning] = useState(true);
  const controls = useAnimation();
  const intervalRef = useRef(null); // <- JS puro

  const startAnimation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let phases = ["Inhala", "Exhala"];
    let index = phases.indexOf(phase);

    intervalRef.current = setInterval(() => {
      index = (index + 1) % phases.length;
      setPhase(phases[index]);

      controls.start({
        background:
          phases[index] === "Inhala"
            ? "linear-gradient(to bottom, #F3CFDB, #C2E3EC)"
            : "linear-gradient(to bottom, #C2E3EC, #F3CFDB)",
        transition: { duration: 6, ease: "easeInOut" },
      });
    }, 6000);
  };

  useEffect(() => {
    controls.start({
      background: "linear-gradient(to bottom,#F3CFDB, #C2E3EC)",
    });

    if (running) startAnimation();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [controls, running]);

  const toggleRunning = () => {
    if (running) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setRunning(false);
    } else {
      setRunning(true);
    }
  };

  return (
   <>
    <motion.div
      initial={{ background: "linear-gradient(to bottom, #F3CFDB, #C2E3EC)" }}
      animate={controls}
      className="flex flex-col items-center justify-center min-h-[375px] md:h-full lg:h-full w-full rounded-2xl p-4"
    >
      <p className="pb-6">Tómate una pausa para respirar</p>
      <motion.div
        animate={{ scale: phase === "Inhala" && running ? 1.3 : 0.8 }}
        transition={{ duration: 6, ease: "easeInOut" }}
        className="w-40 h-40 rounded-full bg-brand-500 shadow-lg"
      />
      <p className="mt-6 text-2xl font-semibold text-gray-700">{phase}</p>
      <button
        onClick={toggleRunning}
        className="mt-6 px-4 py-2 bg-brand-500 text-white rounded hover:bg-brand-700 transition"
      >
        {running ? "Detener" : "Iniciar"}
      </button>
    </motion.div>
   </>
  );
}
