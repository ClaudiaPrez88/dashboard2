"use client";
import React, { useEffect } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "../button/Button";
import Image from "next/image";
import { Star } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEjercicios } from "@/redux/slices/ejerciciosSlides";
import { RootState, AppDispatch } from "@/redux/store";

interface BlogLibraryProps {
  onSelectEjercicio: (ejercicioId: number) => void;
}

export default function BlogLibrary({ onSelectEjercicio }: BlogLibraryProps) {
  const dispatch = useDispatch<AppDispatch>();
  
  // 👈 Leer los datos del estado de Redux
  const { lista: ejercicios, loading, error } = useSelector((state: RootState) => state.ejercicios);
  
  // 👈 Disparar la petición cuando el componente se monte
  useEffect(() => {
    // Solo si la lista no ha sido cargada
    if (ejercicios.length === 0) {
      dispatch(fetchEjercicios());
    }
  }, [dispatch, ejercicios.length]);
  
  // 👈 Manejar los estados de carga y error
  if (loading) {
    return (
      <div className="text-center py-8">
        <p>Cargando ejercicios...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-3">
        {/* 👈 Ahora se mapea sobre el array de Redux */}
        {ejercicios.map((ejercicio) => (
          <div key={ejercicio.id} className="space-y-5 sm:space-y-6">
            <div className="flex justify-start sm:justify-center">
            <ComponentCard title={ejercicio.titulo}>
               <div className="w-full">
                <Image
                // 👈 Usar la propiedad 'imagen' que siempre tiene un string
                src={ejercicio.imagen!}
                alt={ejercicio.titulo}
                width={400} // Se recomienda definir un tamaño fijo
                height={300}
                className="w-full h-auto"
                />
            </div>
              <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-2">
                {ejercicio.duracion} min •
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                {ejercicio.rating}
                </p>
              <Button onClick={() => onSelectEjercicio(ejercicio.id)}>
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
