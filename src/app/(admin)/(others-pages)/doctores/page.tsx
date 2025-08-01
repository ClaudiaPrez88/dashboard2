"use client";
import React, { useState } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ListaDoctores from "@/components/ui/doctores/ListaDoctores";
import DetalleDoctor from "@/components/ui/doctores/DetalleDoctor";
import { profesionales } from "@/data/profesionales";

interface Doctor {
  id: number;
  nombre: string;
  especialidad: string;
  imagen: string;
  descripcion: string;
}

export default function Doctores() {
  const [doctorSeleccionado, setDoctorSeleccionado] = useState<Doctor | null>(null);

  const handleSelectDoctor = (id: number) => {
    const doctor = profesionales.find((d) => d.id === id) || null;
    setDoctorSeleccionado(doctor);
  };

  const handleVolver = () => {
    setDoctorSeleccionado(null);
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Doctores" />
      {!doctorSeleccionado ? (
        <ListaDoctores onSelectDoctor={handleSelectDoctor} />
      ) : (
        <DetalleDoctor doctor={doctorSeleccionado} onVolver={handleVolver} />
      )}
    </div>
  );
}
