import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";


export default function Politicas() {
  return (
    <div>
        <div>
      <PageBreadcrumb pageTitle="Nuestras políticas" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Politicas
          </h3>
          <ul className="space-y-6 text-gray-800 text-left">
            <li>
              <strong>1. Recopilación de datos:</strong><br />
              Recopilamos solo los datos necesarios para el funcionamiento de la app, como tu nombre, correo electrónico y respuestas dentro de ejercicios o formularios emocionales. No almacenamos información sensible sin tu consentimiento explícito.
            </li>
            <li>
              <strong>2. Uso de la información:</strong><br />
              Utilizamos tu información para personalizar tu experiencia en la app, hacer seguimiento de tu progreso y enviarte recomendaciones basadas en tus necesidades emocionales.
            </li>
            <li>
              <strong>3. Almacenamiento seguro:</strong><br />
              Tus datos están protegidos mediante medidas de seguridad técnicas y administrativas. Usamos servicios confiables para el almacenamiento y no compartimos tus datos con terceros sin tu autorización.
            </li>
            <li>
              <strong>4. Acceso y eliminación:</strong><br />
              Puedes acceder, modificar o eliminar tus datos personales en cualquier momento desde tu perfil o escribiéndonos a nuestro correo de soporte.
            </li>
            <li>
              <strong>5. Cookies y tecnologías similares:</strong><br />
              Podemos usar cookies para mejorar tu experiencia de navegación dentro de la app. Estas cookies no recopilan información personal identificable sin tu consentimiento.
            </li>
            <li>
              <strong>6. Cambios en esta política:</strong><br />
              Nos reservamos el derecho de actualizar esta política. Notificaremos cualquier cambio importante a través de la app o por correo electrónico.
            </li>
            <li>
              <strong>7. Contacto:</strong><br />
              Si tienes preguntas sobre esta política o deseas ejercer tus derechos de privacidad, contáctanos a: <a href="mailto:soporte@tuapp.com" className="underline text-blue-600">soporte@tuapp.com</a>.
            </li>
          </ul>

        </div>
      </div>
    </div>
    </div>
  )
}
