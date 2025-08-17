'use client';

import React, { useState } from 'react';

interface HorariosDisponiblesProps {
  rango: { start: string; end: string };
  onSeleccionar: (seleccion: string) => void;
}

function getDaysArray(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const days = [];
  for (let dt = new Date(startDate); dt <= endDate; dt.setDate(dt.getDate() + 1)) {
    days.push(dt.toLocaleDateString('es-CL', { day: 'numeric', month: 'short' }).toLowerCase());
  }
  return days;
}

// Simulación de horarios disponibles
const horariosSimulados: { [key: string]: string[] } = {
  '1 ago': ['15:00', '15:30', '16:40', '17:00', '18:00'],
  '2 ago': ['16:00', '16:30', '17:00', '18:00'],
  '3 ago': ['17:00', '17:30', '18:00'],
  '4 ago': ['16:40', '17:00', '18:00', '18:20'],
};

export default function HorariosDisponibles({ rango, onSeleccionar }: HorariosDisponiblesProps) {
  const dias = getDaysArray(rango.start, rango.end);
  const [horaSeleccionada, setHoraSeleccionada] = useState<string | null>(null);

  const handleClickHora = (dia: string, hora: string) => {
    const seleccion = `${dia} ${hora}`;
    setHoraSeleccionada(seleccion);
    onSeleccionar(seleccion);
  };

  return (
    <div className="overflow-x-auto mt-4">
      <div className="flex gap-4">
        {dias.map((dia) => {
          const horas = horariosSimulados[dia] || [];
          return (
            <div key={dia} className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-800 dark:text-white">{dia}</p>
              {horas.map((hora) => (
                <button
                  key={hora}
                  className={`mt-1 px-3 py-1 rounded text-sm ${
                    horaSeleccionada === `${dia} ${hora}`
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                  onClick={() => handleClickHora(dia, hora)}
                >
                  {hora}
                </button>
              ))}
            </div>
          );
        })}
      </div>
      {horaSeleccionada && (
        <p className="mt-4 text-center text-green-700">
          Hora seleccionada: <b>{horaSeleccionada}</b>
        </p>
      )}
    </div>
  );
}
