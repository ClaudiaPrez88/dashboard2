import { NextResponse } from "next/server";
export async function GET() {
  try {
    // Llamamos a ORDS desde el server, así evitamos CORS
    const response = await fetch(
      "https://g0818aead2485ee-instanciaagosto.adb.us-phoenix-1.oraclecloudapps.com/ords/wks_agosto/ejercicios/ejercicios",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": "Basic TU_BASE64" // si ORDS requiere auth
        },
      }
    );

    if (!response.ok) throw new Error("Error al traer mensajes");

    const data = await response.json();
    return NextResponse.json(data); // esto se envía al frontend
  } catch (err: any) {
    console.error("Error al traer mensajes de ORDS:", err);
    return NextResponse.json({ error: "Error al traer mensajes" }, { status: 500 });
  }
}