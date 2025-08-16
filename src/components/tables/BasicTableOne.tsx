"use client";
import React,{useEffect} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctores } from "@/redux/slices/DoctoresSlices";
import { RootState, AppDispatch } from "@/redux/store";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  projectName: string;
  team: {
    images: string[];
  };
  status: string;
  budget: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Dra. Camila Ortiz",
      role: "Psicóloga",
    },
    projectName: "25 de Agosto de 2025",
    team: {
      images: [
        "/images/user/user-22.jpg",
        "/images/user/user-23.jpg",
        "/images/user/user-24.jpg",
      ],
    },
    budget: "3.9K",
    status: "Confirmada",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Dra. Isabel Herrera",
      role: "Psiquiatra",
    },
    projectName: "25 de Agosto 2025",
    team: {
      images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
    },
    budget: "24.9K",
    status: "Pendiente",
  },
];

export default function BasicTableOne() {
  const dispatch = useDispatch<AppDispatch>();
    const { lista, loading, error } = useSelector((state: RootState) => state.doctores);
    const doctoresFiltrados = lista.filter(doc => doc.id === 3 || doc.id === 6);
  
    useEffect(() => {
      dispatch(fetchDoctores());
    }, [dispatch]);
  
    if (loading) return <p className="p-4 text-gray-500">Cargando doctores...</p>;
    if (error) return <p className="p-4 text-red-500">Error: {error}</p>;
  return (
    <div className="mb-4overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="xl:min-w-[180px] md:min-w-[120px] sm:min-w-[120px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Doctor
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Fecha
                </TableCell>
                
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Estado
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05] ">
              {doctoresFiltrados.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full hidden sm:block">
                        {doc.imagen_url ? (
                                                <Image
                                                  width={40}
                                                  height={40}
                                                  src={doc.imagen_url}
                                                  alt={doc.nombre}
                                                  className="object-cover"
                                                />
                                              ) : (
                                                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                                              )}
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {doc.nombre}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {doc.profesion}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    28/07/2025
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color="warning"
                    >
                     Pendiente
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
