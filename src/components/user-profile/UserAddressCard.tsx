"use client";
import React, { useEffect, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchUser } from "@/redux/slices/userSlice";

export default function UserAddressCard() {
  const { isOpen, openModal, closeModal } = useModal();

  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    } else {
      setPais(user.pais ?? "");
      setCiudad(user.ciudad ?? "");
      setCodigoPostal(user.codigo_postal ?? "");
    }
  }, [dispatch, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pais, ciudad, codigo_postal: codigoPostal }),
      });

      if (!res.ok) throw new Error("Error al actualizar usuario: " + res.status);

      const data = await res.json();
      console.log("Usuario actualizado:", data);
      closeModal();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
              Dirección
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">País</p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">{user?.pais ?? ""}</p>
              </div>
              <div>
                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">Ciudad</p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">{user?.ciudad ?? ""}</p>
              </div>
              <div>
                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">Código postal</p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">{user?.codigo_postal ?? ""}</p>
              </div>
            </div>
          </div>

          <button
            onClick={openModal}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
          >
            Editar
          </button>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">Editar dirección</h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">Actualiza tus datos para mantener tu perfil actualizado.</p>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div>
                <Label>País</Label>
                <Input type="text" value={pais} onChange={(e) => setPais(e.target.value)} />
              </div>
              <div>
                <Label>Ciudad</Label>
                <Input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
              </div>
              <div>
                <Label>Código postal</Label>
                <Input type="text" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>Cerrar</Button>
              <Button type="submit" size="sm" disabled={loading}>
                {loading ? "Guardando..." : "Guardar cambios"}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
