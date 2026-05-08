"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

type HeaderProps = {
  basePath: string;
};

export function Header({ basePath }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio" onClick={closeMenu}>
        <span>SS</span>
      </a>
      <nav className={`nav ${isOpen ? "open" : ""}`} aria-label="Navegación principal">
        <a href="#experiencia" onClick={closeMenu}>
          Experiencia
        </a>
        <a href="#proyectos" onClick={closeMenu}>
          Proyectos
        </a>
        <a href="#stack" onClick={closeMenu}>
          Stack
        </a>
        <a href="#contacto" onClick={closeMenu}>
          Contacto
        </a>
      </nav>
      <a
        className="header-action"
        href={`${basePath}/assets/CV_Stephan_Suarez.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        CV
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <Menu aria-hidden="true" />
      </button>
    </header>
  );
}
