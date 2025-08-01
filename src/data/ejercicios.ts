
export interface Ejercicio {
  id: number;
  titulo: string;
  descripcion:string;
  imagen: string;
  contenido: string;
  duracion: string; 
  rating: number;
}

export const ejercicios: Ejercicio[] = [
  {
    id: 1,
    titulo: "Respiración Diafragmática",
    imagen: "/images/cards/diafragma.png",
    descripcion:"Este ejercicio ayuda a calmar el sistema nervioso y estabilizar el ritmo cardíaco.",
    contenido: `Siéntate en un lugar cómodo o acuéstate boca arriba. 
    Coloca una mano sobre tu pecho y otra sobre tu abdomen.
    Inhala lentamente por la nariz contando hasta 4, permitiendo que el aire infle tu abdomen (no el pecho). 
    Mantén la respiración por 2 segundos y luego exhala lentamente por la boca contando hasta 6. 
    Repite este ciclo por 5 minutos, concentrándote en cómo se eleva y baja tu abdomen.
    Esta técnica reduce la hiperventilación común durante la ansiedad.`,
     duracion: "5 minutos",
     rating: 4.5,
  },
  {
    id: 2,
    titulo: "Tensión y Relajación Muscular",
    imagen: "/images/cards/tension.png",
    descripcion:"Este método permite liberar la tensión física acumulada.",
    contenido: `Encuentra un lugar tranquilo donde puedas sentarte o acostarte sin distracciones. 
    Comienza tensando los músculos de tus pies durante 5 segundos (sin causar dolor), y luego relájalos completamente. 
    Sube por el cuerpo: piernas, abdomen, manos, brazos, hombros y cara.
    Siente la diferencia entre tensión y relajación. 
    Este contraste ayuda a tomar conciencia del cuerpo y relaja profundamente. 
    Úsalo especialmente cuando sientas tu cuerpo rígido por estrés.`,
    duracion: "10 minutos",
    rating: 4.8,
  },
  {
    id: 3,
    titulo: "Visualización Guiada",
    imagen: "/images/cards/visualizacion.png",
    descripcion:"Esta técnica ayuda a desconectarse de pensamientos ansiosos y recuperar una sensación de calma.",
    contenido: `Imagina un lugar tranquilo donde te sientas seguro/a, como una playa, un bosque o una habitación acogedora. 
    Cierra los ojos, respira lentamente y comienza a visualizar ese lugar con todos tus sentidos: 
    ¿Qué ves? ¿Qué oyes? ¿Qué aromas hay en el aire?
    Permanece allí mentalmente por unos minutos, explorando lentamente el entorno. 
    Puedes imaginar que estás acostado/a en ese lugar mientras una suave brisa te envuelve.`,
    duracion: "7 a 10 minutos",
    rating: 4.5,
  },
  {
    id: 4,
    titulo: "Cuenta Regresiva 5-4-3-2-1",
    imagen: "/images/cards/cuenta.png",
    descripcion:"Este ejercicio utiliza los sentidos para anclarte al presente y reducir el impacto de los pensamientos ansiosos.",
    contenido: `Mira a tu alrededor e identifica:
    5 cosas que puedas ver,
    4 cosas que puedas tocar,
    3 sonidos que puedas oír,
    2 cosas que puedas oler,
    1 cosa que puedas saborear.
    Hazlo lentamente, tomándote el tiempo para observar con detalle. 
    Este ejercicio es ideal para ataques de ansiedad o momentos de pánico, ya que te obliga a salir del pensamiento rumiativo.`,
    duracion: "3 a 5 minutos",
    rating: 4.8,
  }
];
