"use client";
import React, { useState } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BlogLibrary from "@/components/ui/blog/BlogLibrary";
import DetalleBlog from "@/components/ui/blog/DetalleBlog";
import { ejercicios } from "@/data/ejercicios";

interface Ejercicio {
  id: number;
  titulo: string;
  imagen: string;
  contenido: string;
  duracion: string; 
  rating: number;
  descripcion:string;
}

export default function AutoCuidado() {
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState<Ejercicio | null>(null);

  const handleSelectEjercicio = (id: number) => {
    const ejercicio = ejercicios.find((e) => e.id === id) || null;
    setEjercicioSeleccionado(ejercicio);
  };

  const handleVolver = () => {
    setEjercicioSeleccionado(null);
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Auto cuidado" />
      {!ejercicioSeleccionado ? (
        <BlogLibrary onSelectEjercicio={handleSelectEjercicio} />
      ) : (
        <DetalleBlog ejercicio={ejercicioSeleccionado} onVolver={handleVolver} />
      )}
    </div>
  );
}
