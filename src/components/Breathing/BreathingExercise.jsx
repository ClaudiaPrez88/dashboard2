"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function BreathingExercise() {
  const [phase, setPhase] = useState("Inhala");
  const controls = useAnimation();

  useEffect(() => {
    let phases = ["Inhala", "Exhala"];
    let index = 0;

    // Animación inicial
    controls.start({
      background: "linear-gradient(to bottom, #a0d8f1, #70c1f1)", // azul claro
    });

    const interval = setInterval(() => {
      index = (index + 1) % phases.length;
      setPhase(phases[index]);

    // Animar el fondo según la fase
      controls.start({
        background: phases[index] === "Inhala" 
          ? "linear-gradient(to bottom, #a0d8f1, #70c1f1)" // azul claro
          : "linear-gradient(to bottom, #4a90e2, #357ABD)", // azul más profundo
        transition: { duration: 6, ease: "easeInOut" },
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <motion.div
    initial={{ background: "linear-gradient(to bottom, #a0d8f1, #70c1f1)" }} // <- color inicial
      animate={controls}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <motion.div
        animate={{ scale: phase === "Inhala" ? 1.3 : 0.8 }}
        transition={{ duration: 6, ease: "easeInOut" }}
        className="w-40 h-40 rounded-full bg-blue-500 shadow-lg"
      />
      <p className="mt-6 text-2xl font-semibold text-gray-700">{phase}</p>
    </motion.div>
  );
}
