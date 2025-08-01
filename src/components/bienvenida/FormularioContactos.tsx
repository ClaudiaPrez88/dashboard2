"use client";
import React from "react";
import Button from "../ui/button/Button";

interface Props {
  onGuardar?: () => void;
}

const FormularioContactos: React.FC<Props> = ({ onGuardar }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (onGuardar) onGuardar();
      }}
      className="max-w-md mx-auto pt-4 space-y-4"
    >
      
        <h3 className="text-lg font-semibold text-gray-800">Contactos de emergencia</h3>
       <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <label className="block">
        <span className="text-sm">Nombre contacto 1</span>
        <input
          type="text"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>

      <label className="block">
        <span className="text-sm">Teléfono contacto 1</span>
        <input
          type="tel"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>

      <label className="block">
        <span className="text-sm">Relación contacto 1</span>
        <input
          type="text"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <label className="block">
        <span className="text-sm">Nombre contacto 2</span>
        <input
          type="text"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>

      <label className="block">
        <span className="text-sm">Teléfono contacto 2</span>
        <input
          type="tel"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>

      <label className="block">
        <span className="text-sm">Relación contacto 2</span>
        <input
          type="text"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>
      </div>
      <Button>Guardar</Button>
    </form>
  );
};

export default FormularioContactos;
