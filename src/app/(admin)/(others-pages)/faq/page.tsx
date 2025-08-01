import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";


export default function FAQ() {
  return (
    <div>
        <div>
      <PageBreadcrumb pageTitle="Preguntas frecuentes" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            FQA
          </h3>
          <ul className="space-y-6 text-gray-800 text-left">
          <li>
            <strong>¿Esta app reemplaza la atención psicológica profesional?</strong><br />
            No. Nuestra app es un complemento de apoyo emocional y bienestar. No reemplaza el diagnóstico ni el tratamiento realizado por un profesional de la salud mental.
          </li>
          <li>
            <strong>¿Qué tipo de contenido ofrece la app?</strong><br />
            Ejercicios de respiración, diarios de emociones, seguimiento del ánimo, recursos educativos sobre ansiedad y rutinas para mejorar el bienestar emocional.
          </li>
          <li>
            <strong>¿Debo registrarme para usar la app?</strong><br />
            Puedes usar algunas funciones sin registrarte, pero para guardar tu progreso o acceder a contenido personalizado, es necesario crear una cuenta.
          </li>
          <li>
            <strong>¿Qué pasa con mis datos personales?</strong><br />
            Tus datos están protegidos. Solo se utilizan para ofrecerte una mejor experiencia dentro de la app y nunca se comparten con terceros sin tu consentimiento. Consulta nuestra <a href="/politica-de-privacidad" className="underline text-blue-600">Política de Privacidad</a> para más detalles.
          </li>
          <li>
            <strong>¿Necesito estar conectado a internet para usar la app?</strong><br />
            Algunas funciones básicas pueden estar disponibles sin conexión, pero para acceder a todas las herramientas y actualizaciones, es recomendable tener conexión a internet.
          </li>
          <li>
            <strong>¿La app tiene algún costo?</strong><br />
            Actualmente, la app es gratuita como parte de un proyecto social. En el futuro, podrían incluirse funciones premium opcionales, pero siempre se informará con claridad.
          </li>
        </ul>

        </div>
      </div>
    </div>
    </div>
  )
}
