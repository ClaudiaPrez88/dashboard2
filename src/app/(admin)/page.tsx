import type { Metadata } from "next";
import React from "react";
import CustomCard from "@/components/ecommerce/CustomCard";
import CustomCard2 from "@/components/ecommerce/CustomCard2";
import { CalendarClock } from "lucide-react";
import { CalendarPlus } from "lucide-react";
import CustomCardEjercicios from "@/components/ecommerce/CustomCardEjercicios";
import BreathingExercise from "../../components/Breathing/BreathingExercise"


export const metadata: Metadata = {
  title:
    "Yugen - Reduce tu ansiedad",
  description: "Este proyecto es parte de la Hackathon 2025 de Desafio LATAM",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 xl:col-span-4">
        <CustomCard url="/blank" color="6E80E2" backgroundImage="/images/cards/hablemos.png" />
      </div>
      <div className="col-span-12 xl:col-span-4">
        <CustomCard2 url="agendarCita" color="C2E3EC" backgroundImage="" text="Próximas citas" icon={<CalendarClock size={40} strokeWidth={1.5} />}/>
      </div>
    <div className="col-span-12 xl:col-span-4">
        <CustomCard2 url="doctores" color="F3CFDB" backgroundImage="" text="Agendar" icon={<CalendarPlus size={40} strokeWidth={1.5} />}/>
      </div>
      <div className="col-span-12 xl:col-span-12">
        <CustomCardEjercicios url="autocuidado"/>
      </div>
      {/* <div className="col-span-12 xl:col-span-12">
        <BreathingExercise/>
      </div> */}
    </div>
  );
}

