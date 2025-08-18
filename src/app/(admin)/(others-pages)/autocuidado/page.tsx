"use client";
import React, { useState, useEffect } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BlogLibrary from "@/components/ui/blog/BlogLibrary";
import DetalleBlog from "@/components/ui/blog/DetalleBlog";
import { useSelector, useDispatch } from "react-redux";
import { fetchEjercicios } from "@/redux/slices/ejerciciosSlides";
import { RootState, AppDispatch } from "@/redux/store";


interface Ejercicio {
  id: number;
  titulo: string;
  imagen: string | null;
  contenido: string;
  duracion: number; 
  rating: number;
  descripcion:string;
}

export default function AutoCuidado() {
  // 👈 CORRECCIÓN 1: Mover dispatch dentro del componente
  const dispatch = useDispatch<AppDispatch>();
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState<Ejercicio | null>(null);
  
  // 👈 Leer los datos del estado de Redux
  const { lista: ejercicios, loading, error } = useSelector((state: RootState) => state.ejercicios);
  
  const handleSelectEjercicio = (id: number) => {
    const ejercicio = ejercicios.find((e) => e.id === id) || null;
    // 👈 CORRECCIÓN 2: Asignar el objeto de un solo ejercicio
    setEjercicioSeleccionado(ejercicio);
  };

  const handleVolver = () => {
    setEjercicioSeleccionado(null);
  };
  
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
      <PageBreadcrumb pageTitle="Auto cuidado" />
      {!ejercicioSeleccionado ? (
        <BlogLibrary onSelectEjercicio={handleSelectEjercicio} />
      ) : (
        <DetalleBlog ejercicio={ejercicioSeleccionado} onVolver={handleVolver} />
      )}
    </div>
  );
}