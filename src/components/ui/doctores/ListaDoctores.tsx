"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "../button/Button";
import Image from "next/image";
import { profesionales } from "@/data/profesionales";

interface ListaDoctoresProps {
  onSelectDoctor: (doctorId: number) => void;
}

export default function ListaDoctores({ onSelectDoctor }: ListaDoctoresProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-3">
      {profesionales.map((doctor) => (
        <div key={doctor.id} className="space-y-5 sm:space-y-6">
          <div className="flex justify-start sm:justify-center">
            <ComponentCard title={doctor.nombre}>
              <div className="w-full">
                {doctor.imagen ? (
                  <Image
                    src={doctor.imagen}
                    alt={doctor.nombre}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <div className="mb-4 rounded-lg bg-gray-200 w-full h-48 flex items-center justify-center">
                    <p>Imagen no disponible</p>
                  </div>
                )}
              </div>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                {doctor.especialidad}
              </p>
              <Button onClick={() => onSelectDoctor(doctor.id)}>Ver detalle</Button>
            </ComponentCard>
          </div>
        </div>
      ))}
    </div>
  );
}
