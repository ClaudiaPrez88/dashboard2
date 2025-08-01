"use client";
import React from "react";
import Button from "../ui/button/Button";
import { useRouter } from "next/navigation";

interface Props {
  onComenzar?: () => void;
}

const ContactosGuardadosExito: React.FC<Props> = ({ onComenzar }) =>{
  const router = useRouter();
  const handleClick = () => {
  if (onComenzar) onComenzar();
  router.push("/");
};
  return (
    <div className="max-w-md p-6 bg-green-100 rounded">
      <h2 className="text-xl font-bold mb-4">¡Contactos guardados correctamente!</h2>
      <p>Ahora puedes comenzar a usar la aplicación.</p>
      <div className="py-4">
        <Button onClick={handleClick} >Iniciar</Button>
      </div>
    </div>
  );
};

export default ContactosGuardadosExito;
