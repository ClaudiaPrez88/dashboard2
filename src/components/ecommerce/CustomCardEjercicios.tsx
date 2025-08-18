"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchEjercicios } from "@/redux/slices/ejerciciosSlides";
import { RootState, AppDispatch } from "@/redux/store";
import { useEffect } from "react";

interface CardProps {
  url:string;
}

const CustomCardEjercicios: React.FC<CardProps> = ({ url }) => {
  const dispatch = useDispatch<AppDispatch>();
  // 👈 Selecciona los datos del estado de Redux
  const { lista: ejercicios, loading, error } = useSelector((state: RootState) => state.ejercicios);

  // 👈 Dispara la petición a la API cuando el componente se monta
  useEffect(() => {
    dispatch(fetchEjercicios());
  }, [dispatch]);
  // 👈 Renderiza un mensaje mientras carga la información
  if (loading) {
    return (
      <div className="text-center py-8">
        <p>Cargando ejercicios...</p>
      </div>
    );
  }

  // 👈 Renderiza un mensaje si ocurre un error
  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <>
    <Link href={url}>
        <div
          className="rounded-2xl border border-gray-200 bg-brand-500 dark:border-gray-800 dark:bg-white/[0.1] mb-0 px-4 pt-4 pb-11">
                      <div className="grid grid-cols-12 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-12 gap-4">
                          <div className="col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
                            <Image
                              src="/images/relax.svg"
                              alt="Relax Icon"
                              width={40}
                              height={40}
                            className="object-contain sm:w-20 sm:h-12 md:w-16 md:h-16 lg:w-10 lg:h-10"
                            />
                          </div>
                          <div className="col-span-9 sm:col-span-8 md:col-span-11 lg:col-span-11">
                                <h3 className="text-lg font-semibold text-white dark:text-white/90">Autocuidado
                                </h3>
                                <p className="text-theme-xs text-white dark:text-white/90">
                                  Ejercicios de relajación
                                </p>
                        </div>
                       </div>
          
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-600 sm:p-6 space-y-4 -mt-6 z-10 relative">
                    
            {/* 👈 Ahora se mapea sobre el array 'ejercicios' que viene del estado de Redux */}
            {ejercicios.map((ejercicio)=>(
                      <div key={ejercicio.id} className="grid grid-cols-12 sm:grid-cols-6 md:grid-cols-12 lg:grid-cols-12 gap-4">
                        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 justify-center items-start">
                          <Image
                            // 👈 Usa 'ejercicio.imagen' para evitar errores de tipo
                            src={ejercicio.imagen!}
                            alt="Imagen del ejercicio"
                            width={80}
                            height={80}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="col-span-7 sm:col-span-4 md:col-span-10 lg:col-span-10">
                          <p className="text-lg text-gray-800 dark:text-white/90">{ejercicio.titulo}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Duración: {ejercicio.duracion}</p>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 flex justify-center items-start">
                          <Image
                            src="/images/check.svg"
                            alt="Check Icon"
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
              ))}
        </div>
    </Link>
    </>
  );
};

export default CustomCardEjercicios;
