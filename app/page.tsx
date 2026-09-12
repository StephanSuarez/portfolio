"use client";

import { useEffect, useState } from "react";
import { Header } from "./components/Header";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const languageStorageKey = "portfolio-language";

type Language = "en" | "es";

const links = {
  email: "mailto:stph4211@gmail.com",
  linkedin: "https://www.linkedin.com/in/stephan-suarez-38586b266",
  github: "https://github.com/StephanSuarez",
  phone: "tel:+573222249396"
};

const cvFile: Record<Language, string> = {
  en: `${basePath}/assets/CV_Stephan_Suarez_EN.pdf`,
  es: `${basePath}/assets/CV_Stephan_Suarez.pdf`
};

const stack = [
  { group: "Backend", items: ["Kotlin", "Micronaut", "Python", "FastAPI", "REST", "SQS", "Flyway", "Hibernate"] },
  { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Vite"] },
  { group: "AI", items: ["RAG", "LangChain", "n8n", "Gemini", "OpenAI", "LLM-as-judge", "Claude Code", "Codex"] },
  { group: "Cloud & data", items: ["AWS", "EKS", "RDS", "S3", "Lambda", "Docker", "GitHub Actions", "PostgreSQL", "Redis", "Firebase", "Kafka"] },
  { group: "Integrations", items: ["Stripe", "Mercado Pago", "Confío", "Shopify", "Dropi", "Mastershop", "WhatsApp Cloud API"] }
];

const copy = {
  en: {
    nav: { work: "Work", experience: "Experience", stack: "Stack", contact: "Contact", cv: "CV" },
    heroEyebrow: "Bogotá, Colombia",
    heroTitle: "Software engineer for production systems and applied AI.",
    heroCopy:
      "Three years building and operating e-commerce software: order and logistics automation, payment providers, multi-country operations and WhatsApp chatbots with AI.",
    primaryAction: "See the work",
    secondaryAction: "Download CV",
    highlights: [
      { value: "25,000+", label: "orders per month flowing through the platform" },
      { value: "7", label: "Latin American countries in operation" },
      { value: "6", label: "payment and logistics providers integrated" },
      { value: "400–700", label: "daily messages handled by AI chatbots" }
    ],
    workEyebrow: "Work",
    workTitle: "What I build.",
    workIntro: "Since 2024 at Fluxi, a platform that creates AI-generated sales funnels for e-commerce in Latin America.",
    work: [
      {
        title: "AI funnel generation",
        body: "A pipeline that turns a product into a complete sales page: copy, images, sections and checkout, generated asynchronously over queues, with new versions per sales angle and AI-assisted editing in the builder.",
        tags: ["Kotlin", "SQS", "Next.js", "Gemini"]
      },
      {
        title: "Order and logistics automation",
        body: "Every order dispatches itself to Dropi, Mastershop or Shopify: persistent retries, variant mapping and per-country catalogs.",
        tags: ["Dropi", "Mastershop", "Shopify"]
      },
      {
        title: "Payment providers",
        body: "Checkout, payment-confirmation webhooks and subscriptions with account upgrade, downgrade and billing across Stripe, Confío and Mercado Pago.",
        tags: ["Stripe", "Confío", "Mercado Pago"]
      },
      {
        title: "Multi-country operations",
        body: "Per-country catalogs, per-funnel currency, gateway and provider availability by country and region normalization for Shopify, across Colombia, Mexico, Chile, Peru, Ecuador, Paraguay and Guatemala.",
        tags: ["Catalogs", "Currency", "Regions"]
      },
      {
        title: "AI WhatsApp chatbots",
        body: "A support assistant with a knowledge base (RAG) and automated LLM-as-judge evaluation of every conversation, plus a multi-tenant service for merchants with templates, per-reply billing and human-help alerts.",
        tags: ["Python", "FastAPI", "RAG", "WhatsApp"]
      },
      {
        title: "Account, billing and notifications",
        body: "Credit history, store-creation billing and a realtime notification center, with Kotlin on the backend and React and Next.js on the front.",
        tags: ["Kotlin", "Firebase", "React"]
      }
    ],
    experienceEyebrow: "Experience",
    experienceTitle: "Where I have worked.",
    experience: [
      {
        time: "Oct 2024 – Present",
        title: "Fluxi",
        role: "Software Developer",
        bullets: [
          "Owner of features end to end, from analysis and design to production: Kotlin backend, React and Next.js frontends, Python AI services.",
          "Production operations on AWS: EKS, RDS, S3, SQS, Lambda and load balancers; incident diagnosis with CloudWatch, Sentry and database queries.",
          "Agent-driven development end to end: analysis, implementation, automated PR review, browser end-to-end testing and deployment."
        ]
      },
      {
        time: "Jun 2023 – Jun 2024",
        title: "Scientia Labs SAS",
        role: "Junior Developer",
        bullets: [
          "Backend APIs per microservice applying SOLID, clean architecture and layered separation.",
          "Event-driven architecture with publish/subscribe for real-time interaction between users.",
          "Agile teamwork and collaborative development with Git: feature branches, pull requests and code review."
        ]
      },
      {
        time: "Jun 2022 – Jun 2023",
        title: "Universidad de Cundinamarca",
        role: "Student Assistant",
        bullets: ["Database cleansing and analysis (Oracle, MariaDB) and Power BI dashboards for academic decisions."]
      }
    ],
    educationTitle: "B.Sc. Systems and Computer Engineering",
    educationBody: "Universidad de Cundinamarca · 2019 – 2024",
    stackEyebrow: "Stack",
    stackTitle: "Tools I work with.",
    contactEyebrow: "Contact",
    contactTitle: "Let's talk.",
    contactBody: "Open to Software Engineer and AI Engineer roles, remote or in Bogotá.",
    writeMe: "Email me",
    footer: "Bogotá, Colombia"
  },
  es: {
    nav: { work: "Trabajo", experience: "Experiencia", stack: "Stack", contact: "Contacto", cv: "CV" },
    heroEyebrow: "Bogotá, Colombia",
    heroTitle: "Ingeniero de software para sistemas en producción e IA aplicada.",
    heroCopy:
      "Tres años construyendo y operando software para ecommerce: automatización de órdenes y logística, pasarelas de pago, operación multipaís y chatbots de WhatsApp con IA.",
    primaryAction: "Ver el trabajo",
    secondaryAction: "Descargar CV",
    highlights: [
      { value: "25.000+", label: "órdenes al mes pasando por la plataforma" },
      { value: "7", label: "países de Latinoamérica en operación" },
      { value: "6", label: "proveedores de pago y logística integrados" },
      { value: "400–700", label: "mensajes diarios atendidos por chatbots con IA" }
    ],
    workEyebrow: "Trabajo",
    workTitle: "Lo que construyo.",
    workIntro: "Desde 2024 en Fluxi, una plataforma que crea embudos de venta con inteligencia artificial para ecommerce en Latinoamérica.",
    work: [
      {
        title: "Creación de embudos con IA",
        body: "Un pipeline que convierte un producto en una página de venta completa: copy, imágenes, secciones y checkout, generados de forma asíncrona por colas, con nuevas versiones por ángulo de venta y edición asistida por IA en el builder.",
        tags: ["Kotlin", "SQS", "Next.js", "Gemini"]
      },
      {
        title: "Automatización de órdenes y logística",
        body: "Cada orden se despacha sola a Dropi, Mastershop o Shopify: reintentos persistentes, mapeo de variantes y catálogo por país.",
        tags: ["Dropi", "Mastershop", "Shopify"]
      },
      {
        title: "Pasarelas de pago",
        body: "Checkout, webhooks de confirmación de pago y suscripciones con upgrade, downgrade y facturación de la cuenta sobre Stripe, Confío y Mercado Pago.",
        tags: ["Stripe", "Confío", "Mercado Pago"]
      },
      {
        title: "Operación multipaís",
        body: "Catálogo por país, moneda por embudo, disponibilidad de pasarelas y proveedores por país y normalización de regiones para Shopify, en Colombia, México, Chile, Perú, Ecuador, Paraguay y Guatemala.",
        tags: ["Catálogos", "Moneda", "Regiones"]
      },
      {
        title: "Chatbots de WhatsApp con IA",
        body: "Un asistente de soporte con base de conocimiento (RAG) y evaluación automática de cada conversación con LLM como juez, más un servicio multi-cuenta para comercios con plantillas, cobro por respuesta y alertas de ayuda humana.",
        tags: ["Python", "FastAPI", "RAG", "WhatsApp"]
      },
      {
        title: "Cuenta, facturación y notificaciones",
        body: "Historial de créditos, cobro por creación de tienda y centro de notificaciones en tiempo real, con Kotlin en el backend y React y Next.js en el front.",
        tags: ["Kotlin", "Firebase", "React"]
      }
    ],
    experienceEyebrow: "Experiencia",
    experienceTitle: "Dónde he trabajado.",
    experience: [
      {
        time: "Oct 2024 – Actualidad",
        title: "Fluxi",
        role: "Desarrollador de Software",
        bullets: [
          "Responsable de funcionalidades de punta a punta, del análisis y diseño a producción: backend en Kotlin, frontends en React y Next.js, servicios de IA en Python.",
          "Operación en producción sobre AWS: EKS, RDS, S3, SQS, Lambda y balanceadores; diagnóstico de incidentes con CloudWatch, Sentry y consultas a la base de datos.",
          "Desarrollo con agentes de código de punta a punta: análisis, implementación, revisión automatizada del PR, pruebas end-to-end en navegador y despliegue."
        ]
      },
      {
        time: "Jun 2023 – Jun 2024",
        title: "Scientia Labs SAS",
        role: "Desarrollador Junior",
        bullets: [
          "APIs backend por microservicio aplicando SOLID, arquitectura limpia y separación por capas.",
          "Arquitectura orientada a eventos con publicador/suscriptor para interacción en tiempo real entre usuarios.",
          "Trabajo en equipos ágiles y desarrollo colaborativo con Git: ramas por funcionalidad, pull requests y revisión de código."
        ]
      },
      {
        time: "Jun 2022 – Jun 2023",
        title: "Universidad de Cundinamarca",
        role: "Monitor Universitario",
        bullets: ["Limpieza y análisis de bases de datos (Oracle, MariaDB) y tableros en Power BI para decisiones académicas."]
      }
    ],
    educationTitle: "Ingeniería en Sistemas y Computación",
    educationBody: "Universidad de Cundinamarca · 2019 – 2024",
    stackEyebrow: "Stack",
    stackTitle: "Herramientas con las que trabajo.",
    contactEyebrow: "Contacto",
    contactTitle: "Hablemos.",
    contactBody: "Abierto a roles de Software Engineer y AI Engineer, remotos o en Bogotá.",
    writeMe: "Escribirme",
    footer: "Bogotá, Colombia"
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    if (storedLanguage === "en" || storedLanguage === "es") {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => {
      const nextLanguage = current === "en" ? "es" : "en";
      window.localStorage.setItem(languageStorageKey, nextLanguage);
      return nextLanguage;
    });
  };

  return (
    <>
      <Header nav={t.nav} cvHref={cvFile[language]} language={language} onToggleLanguage={toggleLanguage} />

      <main>
        <section id="inicio" className="hero">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-copy">{t.heroCopy}</p>
          <div className="actions">
            <a className="button primary" href="#trabajo">
              {t.primaryAction}
            </a>
            <a className="button secondary" href={cvFile[language]} target="_blank" rel="noreferrer">
              {t.secondaryAction}
            </a>
          </div>
        </section>

        <section className="highlights" aria-label="Highlights">
          {t.highlights.map((item) => (
            <div className="highlight" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="trabajo" className="section">
          <p className="eyebrow">{t.workEyebrow}</p>
          <h2>{t.workTitle}</h2>
          <p className="section-intro">{t.workIntro}</p>
          <div className="work-grid">
            {t.work.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section">
          <p className="eyebrow">{t.experienceEyebrow}</p>
          <h2>{t.experienceTitle}</h2>
          <div className="timeline">
            {t.experience.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="time">{item.time}</div>
                <div>
                  <h3>
                    {item.title} <span className="role">· {item.role}</span>
                  </h3>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
            <article className="timeline-item">
              <div className="time">2019 – 2024</div>
              <div>
                <h3>{t.educationTitle}</h3>
                <p className="muted">{t.educationBody}</p>
              </div>
            </article>
          </div>
        </section>

        <section id="stack" className="section">
          <p className="eyebrow">{t.stackEyebrow}</p>
          <h2>{t.stackTitle}</h2>
          <div className="stack">
            {stack.map((group) => (
              <div className="stack-row" key={group.group}>
                <span className="stack-group">{group.group}</span>
                <div className="tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="section contact">
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
          <p className="section-intro">{t.contactBody}</p>
          <div className="actions">
            <a className="button primary" href={links.email}>
              {t.writeMe}
            </a>
            <a className="button secondary" href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button secondary" href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button secondary" href={links.phone}>
              +57 322 224 9396
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Stephan Suárez Pérez</span>
        <span>{t.footer}</span>
      </footer>
    </>
  );
}
