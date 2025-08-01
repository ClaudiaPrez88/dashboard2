"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "../button/Button";
import Image from "next/image";
import { ejercicios } from "@/data/ejercicios";
import { Star } from "lucide-react";


interface BlogLibraryProps {
  onSelectEjercicio: (ejercicioId: number) => void;
}

export default function BlogLibrary({ onSelectEjercicio }: BlogLibraryProps) {


  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-3">
        {ejercicios.map((ejercicios) => (
          <div key={ejercicios.id} className="space-y-5 sm:space-y-6">
            <div className="flex justify-start sm:justify-center">
            <ComponentCard title={ejercicios.titulo}>
               <div className="w-full">
                <Image
                src={ejercicios.imagen}
                alt={ejercicios.titulo}
                width={0} // Required for layout="intrinsic"
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                />
            </div>
              <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-2">
                {ejercicios.duracion} min •
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                {ejercicios.rating}
                </p>
              <Button onClick={() => onSelectEjercicio(ejercicios.id)}>
                Ir a ejercicio
              </Button>
            </ComponentCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

