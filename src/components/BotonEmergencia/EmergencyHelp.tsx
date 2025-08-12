// src/components/ui/EmergencyHelp.tsx
import { UserStar } from "lucide-react";
import { Building } from "lucide-react";
import {Phone} from "lucide-react";
import { ArrowRight } from "lucide-react";

import React from "react";

const EmergencyHelp = () => {
  return (
    <div className="min-h-screen rounded-2xl border border-gray-200 bg-white  dark:border-gray-800 dark:bg-white/[0.03] ">
      <div className="mx-auto w-full px-5 py-7 xl:px-10 xl:py-12">
      <p className="mb-4 mt-1 font-normal text-gray-500 text-theme-sm dark:text-gray-400">
        Si estás lidiando con una situación en la que te sientes sobrepasada, es importante que hables con una persona sobre lo que estás
        sintiendo.
      </p>

      {/* Red de apoyo */}
      <h3 className="mb-2 text-base font-medium text-gray-800 dark:text-white/90">Red de apoyo</h3>
      <ul className="mb-4 space-y-2 text-gray-800 dark:text-white/90">
        <li className="rounded-md border p-2 item-lista">
          <span className="lista-user">
            <div className="icon-list">
              <UserStar className="text-brand-600"/></div>Papá</span><Phone/></li>
        <li className="rounded-md border p-2 item-lista">
          <span className="lista-user"><div className="icon-list"><UserStar className="text-brand-600"/></div>Gabriela</span><Phone/></li>
        <li className="rounded-md border p-2 item-lista">
          <span className="lista-user"><div className="icon-list"><Building className="text-brand-600"/></div>Centro de salud mental</span><Phone/></li>
      </ul>

      {/* Líneas de emergencia */}
      <h3 className="mb-2 text-base font-medium text-gray-800 dark:text-white/90">Líneas de emergencia</h3>
      <ul className="mb-4 space-y-2 text-gray-800 dark:text-white/90">
        <li className="rounded-md border p-2 item-lista">
         <span className="lista-user"><div className="icon-list"><Building className="text-brand-600"/></div>Fono Salud</span> 
         <Phone/>
        </li>
        <li className="rounded-md border p-2 item-lista">
          <span className="lista-user"><div className="icon-list"><Building className="text-brand-600"/></div>Emergencia Médica</span><Phone/></li>
        <li className="rounded-md border p-2 item-lista">
          <span className="lista-user"><div className="icon-list"><Building className="text-brand-600"/></div>Salud responde</span><Phone/></li>
      </ul>

      {/* Ejercicios */}
      <h3 className="mb-2 text-base font-medium text-gray-800 dark:text-white/90">Ejercicios S.O.S. para tu ansiedad</h3>
      <ul className="space-y-2 text-gray-800 dark:text-white/90">
        <li className="rounded-md border p-2 list-no"><span>Respiración en caso de crisis</span><ArrowRight/></li>
        <li className="rounded-md border p-2 list-no"><span>Conexión al presente</span><ArrowRight/></li>
      </ul>
      </div>
    </div>
  );
};

export default EmergencyHelp;
