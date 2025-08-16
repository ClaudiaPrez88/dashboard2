import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    // ⚡ Envía body con los campos que quieras actualizar
    const response = await fetch(
      "https://g0818aead2485ee-instanciaagosto.adb.us-phoenix-1.oraclecloudapps.com/ords/wks_agosto/usuarios/usuarios",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error(`Error Oracle: ${response.status}`);
    }

    return NextResponse.json({ message: "Usuario actualizado correctamente" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
