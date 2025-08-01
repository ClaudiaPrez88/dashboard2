import React from "react";
import Button from "../ui/button/Button";

interface FormularioEdadProps {
  nombre: string;
  onSeleccionEdad: (edad: "18+" | "13-17") => void;
}

const FormularioEdad = ({ nombre, onSeleccionEdad }: FormularioEdadProps) => {
  return (
    <div className="max-w-md mx-auto p-4">
      <p className="mb-4 text-lg">
        {nombre}, ¿Cuántos años tienes? Nos gustaría darte apoyo apropiado a tu edad.
      </p>
      <div className="flex gap-4">
        <Button size="md" variant="outline" className="mt-4"  onClick={() => onSeleccionEdad("18+")}>
         18 años o más
      </Button>
      <Button size="md" variant="outline" className="mt-4"  onClick={() => onSeleccionEdad("13-17")}>
        13-17 años
      </Button>
      </div>
    </div>
  );
};

export default FormularioEdad;
