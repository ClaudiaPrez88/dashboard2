import React from 'react'
import Button from '../ui/button/Button'

interface Props {
  onSeleccionPlan: (respuesta: "si" | "no") => void;
}

export default function FormularioElegirPlan({ onSeleccionPlan }: Props) {
  return (
    <div>
    <h3 className="text-lg font-semibold text-gray-800 pb-4">Crea tu plan de emergencia</h3>
    <p className="mb-4">¿Te gustaría que guardar un par de contactos los cuales puedas llamar en caso de emergencia? </p>
    <p className="mb-4 text-sm text-gray-500">Esta es una forma de prepararte para pedir ayuda en caso de ser necesaria.</p>


    <div className="flex flex-row gap-4">
        <Button variant="primary" onClick={() => onSeleccionPlan("si")}>Sí</Button>
        <Button variant="outline" onClick={() => onSeleccionPlan("no")}>No</Button>
    </div>
    </div>
  )
}
