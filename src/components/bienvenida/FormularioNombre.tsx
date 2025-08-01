import React, { useState } from "react";

type Props = {
  onSubmit: (datos: { nombre: string }) => void; // solo nombre
};


const FormularioNombre: React.FC<Props> = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim()) {
      alert("Por favor ingresa tu nombre");
      return;
    }
    onSubmit({ nombre }); // solo envías nombre
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <label className="block">
        <span className="text-sm">¿Cuál es tu nombre o cómo te gustaría que te llamemos?</span>
        <input
          type="text"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          autoFocus
        />
      </label>

      <label className="block">
        <span className="text-sm">Email</span>
        <input
          type="email"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled // lo deshabilito por ahora
        />
      </label>

      <label className="block">
        <span className="text-sm">Contraseña</span>
        <input
          type="password"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled
        />
      </label>

      <label className="block">
        <span className="text-sm">Repite tu contraseña</span>
        <input
          type="password"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled
        />
      </label>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded font-semibold"
      >
        Continuar
      </button>
    </form>
  );
};

export default FormularioNombre;

