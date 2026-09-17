"use client";

import { useState } from "react";

type NavCopy = { work: string; projects: string; experience: string; stack: string; contact: string; cv: string };

type HeaderProps = {
  nav: NavCopy;
  cvHref: string;
  language: "en" | "es";
  onToggleLanguage: () => void;
};

export function Header({ nav, cvHref, language, onToggleLanguage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          Stephan Suárez
        </a>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <a href="#trabajo" onClick={closeMenu}>{nav.work}</a>
          <a href="#experiencia" onClick={closeMenu}>{nav.experience}</a>
          <a href="#proyectos" onClick={closeMenu}>{nav.projects}</a>
          <a href="#stack" onClick={closeMenu}>{nav.stack}</a>
          <a href="#contacto" onClick={closeMenu}>{nav.contact}</a>
        </nav>
        <div className="header-actions">
          <button className="language-toggle" type="button" onClick={onToggleLanguage} aria-label="Language">
            {language === "es" ? "EN" : "ES"}
          </button>
          <a className="header-cv" href={cvHref} target="_blank" rel="noreferrer">
            {nav.cv}
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
