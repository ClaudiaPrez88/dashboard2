"use client";
import Image from "next/image";
import Link from "next/link";
import Bienvenida from "@/components/bienvenida/Bienvenida";
import FormularioNombre from "@/components/bienvenida/FormularioNombre";
import FormularioEdad from "@/components/bienvenida/FormularioEdad";
import FormularioElegirPlan from "@/components/bienvenida/FormularioElegirPlan";
import ContactosGuardadosExito from "@/components/bienvenida/ContactosGuardadosExito";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import FormularioContactos from "@/components/bienvenida/FormularioContactos";

export default function IngresoPage() {
  type Step =
    | "inicio"
    | "preguntas"
    | "formularioNombre"
    | "formularioEdad"
    | "formularioElegirPlan"
    | "formularioContactos"
    | "contactosGuardados" 
    | "cuenta";
  const [step, setStep] = useState<Step>("inicio");
  const [nombre, setNombre] = useState<string>("");

  const textos = {
    inicio: {
      appName: "Intum",
      titulo: undefined,
      description:
        "Estamos aquí para ayudarte a reducir los niveles de estrés y cuidar mejor de ti.",
      buttonText: "Comenzar",
    },
    preguntas: {
      appName: undefined,
      titulo: undefined,
      description:
        "Nuestras conversaciones serán privadas, pero primero necesito hacerte unas preguntas para crear tu perfil.",
      buttonText: "Continuar",
    },
    cuenta: {
      appName: undefined,
      titulo: "¡Tu cuenta ha sido creada exitosamente!",
      description: "Ahora puedes comenzar a usar la app.",
      buttonText: "Iniciar",
    },
  };
  const handleStartClick = () => {
    if (step === "inicio") {
      setStep("preguntas");
    } else if (step === "preguntas") {
      setStep("formularioNombre");
    }
  };
  const handleNombreSubmit = (datos: { nombre: string }) => {
  setNombre(datos.nombre);
  setStep("formularioEdad");
};
  const handleSeleccionEdad = (edad: "18+" | "13-17") => {
    setStep("formularioElegirPlan");
  };
  const handleSeleccionPlan = (respuesta: "si" | "no") => {
    if (respuesta === "si") {
      setStep("formularioContactos");
    } else {
      setStep("cuenta");
    }
  };

  const router = useRouter();


  return (
    <main className="flex h-screen flex-col lg:flex-row">
      {/* Imagen del logo */}
      <div className="flex items-center justify-center w-full flex-1 lg:h-auto lg:w-1/2 bg-gray-100 dark:bg-gray-800 p-8">
        <Link href="/" className="">
          <Image
            width={154}
            height={32}
            className=""
            src="./images/logo/logo.svg"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="flex items-start lg:items-center justify-center w-full flex-1 lg:h-auto lg:w-1/2 p-10">
  {step === "inicio" || step === "preguntas" ? (
    <Bienvenida
      appName={textos[step].appName}
      titulo={textos[step].titulo}
      description={textos[step].description}
      buttonText={textos[step].buttonText}
      onStart={handleStartClick}
    />
  ) : step === "formularioNombre" ? (
    <FormularioNombre onSubmit={handleNombreSubmit} />
  ) : step === "formularioEdad" ? (
    <FormularioEdad nombre={nombre} onSeleccionEdad={handleSeleccionEdad} />
  ) : step === "formularioElegirPlan" ? (
    <FormularioElegirPlan onSeleccionPlan={handleSeleccionPlan} />
  ) : step === "formularioContactos" ? (
     <FormularioContactos onGuardar={() => setStep("contactosGuardados")} />
  ) : step === "contactosGuardados" ? (  
    <ContactosGuardadosExito />
  ) : step === "cuenta" ? (
    <Bienvenida
      titulo={textos[step].titulo}
      appName={textos.cuenta.appName}
      description={textos.cuenta.description}
      buttonText={textos.cuenta.buttonText}
      onStart={() => router.push("/")}
    />
  ) : null}
</div>
    </main>
  );
}
