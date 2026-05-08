import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephan Suárez | Backend & Full-Stack Developer",
  description:
    "Portfolio of Stephan Suárez, a backend/full-stack developer experienced with Kotlin, Next.js, AWS, integrations, and production systems."
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
