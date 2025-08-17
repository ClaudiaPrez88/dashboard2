import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { session_id, user_id, role, text, urgent, sentiment } = body;

    const response = await fetch(
      "https://g0818aead2485ee-instanciaagosto.adb.us-phoenix-1.oraclecloudapps.com/ords/wks_agosto/chat/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Si tu ORDS requiere auth, agrega:
          // "Authorization": "Basic TU_BASE64",
        },
        body: JSON.stringify({
          session_id,
          user_id,
          role,
          text,
          urgent,
          sentiment,
        }),
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Error al guardar mensaje en ORDS:", err);
    return NextResponse.json({ error: "Error al guardar mensaje" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Llamamos a ORDS desde el server, así evitamos CORS
    const response = await fetch(
      "https://g0818aead2485ee-instanciaagosto.adb.us-phoenix-1.oraclecloudapps.com/ords/wks_agosto/chat/messages",
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

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Falta id" }, { status: 400 });
    }

    const response = await fetch(
      "https://g0818aead2485ee-instanciaagosto.adb.us-phoenix-1.oraclecloudapps.com/ords/wks_agosto/chat/messages",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": "Basic TU_BASE64" // si ORDS requiere auth
        },
        body: JSON.stringify({ id }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json({ error: text || "Error al eliminar mensaje" }, { status: response.status });
    }

    return NextResponse.json({ ok: true, id });
  } catch (err: any) {
    console.error("Error al borrar mensaje en ORDS:", err);
    return NextResponse.json({ error: "Error al borrar mensaje" }, { status: 500 });
  }
}
