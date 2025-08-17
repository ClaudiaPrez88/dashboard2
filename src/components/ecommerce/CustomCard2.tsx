"use client";
import Image from "next/image";
import React, { ReactNode } from 'react';
import Link from "next/link";


interface CardProps {
  backgroundImage?: string;
  color: string;
  text:string;
  icon?: ReactNode;
  url:string;
}



const CustomCard2: React.FC<CardProps> = ({ backgroundImage,color,text,icon, url }) => {
  return (
  <>
  <Link href={url}>
   <div
      className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 xl:min-h-[180px] md:min-h-[120px] sm:min-h-[120px]"
      style={{
        background: `#${color}`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 custom-card2">
        <div className="flex flex-col justify-between">
          {/* Ícono arriba */}
          {icon &&  <span className="text-4xl text-gray-700">{icon}</span>}

          {/* Texto abajo */}
          <h3 className="font-medium text-gray-800 text-theme-sm dark:text-gray/800">
            {text}
          </h3>
        </div>
         {backgroundImage && (
          <div className="flex justify-end items-center">
            <Image
              className="w-full h-auto max-h-[140px] object-contain"
              src={backgroundImage}
              alt="Imagen"
              width={500}
              height={300}
            />
          </div>
        )}
      </div>
    </div>
  </Link>
  </> 
  );
};

export default CustomCard2;