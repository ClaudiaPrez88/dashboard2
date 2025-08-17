import { Outfit } from "next/font/google";
import "./globals.css";

import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext"; // 👈 importa el AuthProvider
import ReduxProvider from "@/redux/ReduxProvider";


const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ReduxProvider>
        <AuthProvider>
          {" "}
          {/* 👈 aquí envuelves todo */}
          <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ThemeProvider>
        </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
