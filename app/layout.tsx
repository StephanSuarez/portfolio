import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephan Suárez | Software Engineer",
  description:
    "Software engineer in Bogotá: backend, full-stack and applied AI for e-commerce. Order and logistics automation, payment providers, multi-country operations and WhatsApp chatbots.",
  icons: {
    icon: "/computer-icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
