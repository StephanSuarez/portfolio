import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephan Suárez | Backend & Full-Stack Developer",
  description:
    "Portafolio de Stephan Suárez, desarrollador backend/full-stack con experiencia en Kotlin, Next.js, AWS, integraciones y sistemas en producción."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
