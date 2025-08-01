import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Image from "next/image";
import { Star } from "lucide-react";

interface Ejercicio {
  id: number;
  titulo: string;
  imagen: string;
  contenido: string;
  duracion: string; 
  rating: number;
  descripcion:string;
}

interface DetalleBlogProps {
  ejercicio: Ejercicio;
  onVolver: () => void;
}

export default function DetalleBlog({ ejercicio, onVolver }: DetalleBlogProps) {
  return (
    <>
     <ComponentCard title={ejercicio.titulo}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-6">
            <div>
            {ejercicio.imagen ? (
                <Image
                src={ejercicio.imagen}
                alt={ejercicio.titulo}
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
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">{ejercicio.descripcion}</h3>
                 <ul className="list-disc pl-6 mt-2 text-gray-500 dark:text-gray-400 text-theme-md">
                    {ejercicio.contenido
                    .split("\n")
                    .filter((linea) => linea.trim() !== "")
                    .map((linea, idx) => (
                        <li key={idx} className="mb-2">{linea.trim()}</li>
                    ))}
                </ul>
                <p className="flex items-center gap-1  py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    {ejercicio.duracion} min •
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    {ejercicio.rating}
                    </p>
                <button onClick={onVolver} className="mb-4 text-blue-600 underline">
                    ← Volver
                </button>
            </div>
        </div>
    </ComponentCard>

    </>
  );
}
