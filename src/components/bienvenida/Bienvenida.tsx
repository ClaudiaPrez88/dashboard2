import React from "react";
import Button from "../ui/button/Button";

interface BienvenidaProps {
  titulo?: string;
  appName?: string;
  description: string;
  buttonText: string;
  onStart?: () => void;
}

const Bienvenida: React.FC<BienvenidaProps> = ({
  titulo,
  appName,
  description,
  buttonText,
  onStart,
}) => {
  return (
    <div className="max-w-lg text-center lg:text-left">
      {titulo ? (
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          {titulo}
        </h1>
      ) : appName ? (
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Hola, soy <span className="text-brand-500">{appName}</span>.
        </h1>
      ) : null}

      <p className="text-gray-600 dark:text-gray-300 text-lg">{description}</p>

      <Button size="md" variant="primary" className="mt-4" onClick={onStart}>
        {buttonText}
      </Button>
    </div>
  );
};

export default Bienvenida;

