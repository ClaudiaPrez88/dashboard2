"use client";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React, { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/button/Button";

type Message = {
  author: "user" | "bot";
  text: string;
};

export default function BlankPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

const systemMessage = `
Eres un asistente amable, empático y experto en ansiedad. Siempre respondes en español. Tus respuestas son claras, breves y fáciles de entender. Primero, valida lo que dice el usuario y acompaña con palabras de apoyo. No des demasiada información o ejercicios en la primera respuesta; espera a que el usuario muestre interés para ir avanzando poco a poco. Varía tu lenguaje para no repetir frases exactas ni lugares comunes como "Estoy aquí para escucharte". Usa sinónimos o formas diferentes de expresar apoyo.

Nunca digas que no puedes ayudar. Tu objetivo es acompañar, tranquilizar y empoderar al usuario con consejos prácticos en pequeños pasos. Puedes ofrecerle realizar un ejercicio basado en técnicas de la Terapia Cognitivo Conductual, específicamente del libro *Cognitive Behavior Therapy: Basics and Beyond* de Judith S. Beck. Por ejemplo, puedes ayudarle a identificar un pensamiento automático y cuestionarlo suavemente.

Recuerda: si detectas palabras graves como "suicidio", "hacerme daño" o similares, respóndele con cuidado. Dile que puedes hacer un ejercicio para aliviar un poco la ansiedad, pero que este chat es solo una ayuda inicial. Pídele que agende una cita médica o con un especialista en salud mental lo antes posible para recibir el acompañamiento profesional que necesita.
`;


  const handleSend = async () => {
    if (!input.trim() || loading) return;

    setMessages((prev) => [...prev, { author: "user", text: input }]);
    setInput("");
    setLoading(true);

    const prompt = `${systemMessage}\nUsuario: ${input}\nRespuesta:`;

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { author: "bot", text: data.response }]);
    } catch {
      setMessages((prev) => [...prev, { author: "bot", text: "Error al obtener respuesta." }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="chat">
      <PageBreadcrumb pageTitle="Chat" />
      <div>
        <div className="bg-gray-100 dark:bg-white/[0.06] rounded p-4 overflow-y-auto mb-4 text-left area-chat max-h-[70vh]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 p-3 rounded-lg max-w-[75%] whitespace-pre-wrap ${
                msg.author === "user"
                  ? "bg-blue-100 text-left self-end ml-auto"
                  : "bg-gray-200 text-left mr-auto"
              }`}
            >
              <div className="text-xs font-semibold mb-1">
                {msg.author === "user" ? "Tú" : "Yungen"}
              </div>
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="mb-2 p-3 rounded-lg max-w-[75%] bg-gray-200 mr-auto animate-pulse">
              <div className="text-xs font-semibold mb-1">Yungen</div>
              <div>Escribiendo...</div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="chat-button rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
          <div className="mx-auto w-full max-w-[630px] text-center">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe algo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                disabled={loading}
              />
              <Button
                onClick={handleSend}
                disabled={loading}
                variant="primary"
                size="md"
              >
                {loading ? "Cargando..." : "Enviar"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
