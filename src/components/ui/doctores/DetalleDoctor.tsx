"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Image from "next/image";
import Button from "../button/Button";

interface Doctor {
  id: number;
  nombre: string;
  especialidad: string;
  imagen: string;
  descripcion: string;
}

interface DetalleDoctorProps {
  doctor: Doctor;
  onVolver: () => void;
}

export default function DetalleDoctor({ doctor, onVolver }: DetalleDoctorProps) {
  return (
    <ComponentCard title={doctor.nombre}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-6">
        <div>
          {doctor.imagen ? (
            <Image
              src={doctor.imagen}
              alt={doctor.nombre}
              width={400}
              height={300}
              className="mb-4 rounded-lg"
            />
          ) : (
            <div className="mb-4 rounded-lg bg-gray-200 w-full h-72 flex items-center justify-center">
              <p>Imagen no disponible</p>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            {doctor.especialidad}
          </h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-theme-md">
            {doctor.descripcion}
          </p>
          <button onClick={onVolver} className="mt-6 text-blue-600 underline">
            ← Volver
          </button>
        </div>
      </div>
    </ComponentCard>
  );
}
