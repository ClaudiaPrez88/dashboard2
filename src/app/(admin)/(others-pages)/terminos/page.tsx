import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";


export default function Terminos() {
  return (
    <div>
        <div>
      <PageBreadcrumb pageTitle="Términos y condiciones" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
           Términos y Condiciones de Uso
          </h3>
          <p>Última actualización: [31 de julio de 2025]</p>
          <p className="text-sm text-left text-gray-500 dark:text-gray-400 sm:text-base py-2">
            Bienvenido/a a [Nombre de la App] (en adelante, “la App”), una aplicación diseñada para apoyar a personas que desean gestionar su ansiedad a través de herramientas digitales y contenidos psicoeducativos. Al acceder y utilizar esta App, aceptas los siguientes Términos y Condiciones. Te pedimos que los leas atentamente antes de utilizar nuestros servicios.
          </p>
          <ul className="list-disc pl-6 space-y-4 py-2 text-gray-800 text-left">
            <li>
                <strong>Aceptación de los Términos:</strong> El uso de esta App implica la aceptación plena y sin reservas de estos Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, por favor no utilices la App.
            </li>
            <li>
                <strong>Finalidad de la App:</strong> La App tiene fines informativos y de apoyo emocional. Proporciona ejercicios, contenido educativo y recursos de bienestar diseñados para acompañarte en la gestión de tu ansiedad. <em>No reemplaza ni pretende reemplazar atención psicológica o médica profesional.</em>
            </li>
            <li>
                <strong>Uso Responsable:</strong> El usuario se compromete a:
                <ul className="list-disc pl-6 mt-2">
                <li>Utilizar la App de forma ética, personal y no comercial.</li>
                <li>No utilizar la App para realizar actividades ilícitas.</li>
                <li>No alterar, modificar, ni intentar acceder a información restringida de la plataforma.</li>
                </ul>
            </li>
            <li>
                <strong>Privacidad y Datos Personales:</strong> Nos comprometemos a proteger tu información personal. Para más detalles, revisa nuestra <a href="/politica-de-privacidad" className="underline text-blue-600">Política de Privacidad</a>. Los datos que nos proporciones serán utilizados únicamente para mejorar tu experiencia dentro de la App y no serán compartidos con terceros sin tu consentimiento explícito.
            </li>
            <li>
                <strong>Limitación de Responsabilidad:</strong> La App no ofrece garantías de ningún tipo respecto a resultados en la gestión de la ansiedad. Su uso es voluntario y bajo responsabilidad del usuario. En ningún caso los desarrolladores serán responsables por daños directos o indirectos derivados del uso de esta App.
            </li>
            <li>
                <strong>Modificaciones:</strong> Nos reservamos el derecho de modificar en cualquier momento estos Términos y Condiciones. Las modificaciones serán publicadas en esta misma página, y el uso continuo de la App después de dichos cambios implicará la aceptación de los mismos.
            </li>
            <li>
                <strong>Propiedad Intelectual:</strong> Todos los contenidos, diseño, marcas, logotipos, textos, imágenes y códigos fuente son propiedad de [Nombre del equipo o empresa] o de sus respectivos autores, y están protegidos por derechos de autor.
            </li>
            <li>
                <strong>Contacto:</strong> Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos a través del correo <p className="underline text-blue-600">correo@email.com</p> o directamente desde la sección de contacto en la App.
            </li>
            </ul>

        </div>
      </div>
    </div>
    </div>
  )
}
