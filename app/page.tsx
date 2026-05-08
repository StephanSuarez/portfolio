"use client";

import {
  Bot,
  BriefcaseBusiness,
  CloudCog,
  CreditCard,
  Linkedin,
  Mail,
  Network,
  Phone,
  Send
} from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const languageStorageKey = "portfolio-language";

type Language = "en" | "es";

const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const technologyRows = [
  [
    { name: "Kotlin", icon: `${iconBase}/kotlin/kotlin-original.svg` },
    { name: "Next.js", icon: `${iconBase}/nextjs/nextjs-original.svg` },
    { name: "React", icon: `${iconBase}/react/react-original.svg` },
    { name: "TypeScript", icon: `${iconBase}/typescript/typescript-original.svg` },
    { name: "Node.js", icon: `${iconBase}/nodejs/nodejs-original.svg` }
  ],
  [
    { name: "AWS", icon: `${iconBase}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Docker", icon: `${iconBase}/docker/docker-original.svg` },
    { name: "Kubernetes", icon: `${iconBase}/kubernetes/kubernetes-plain.svg` },
    { name: "GitHub", icon: `${iconBase}/github/github-original.svg` },
    { name: "Git", icon: `${iconBase}/git/git-original.svg` }
  ],
  [
    { name: "PostgreSQL", icon: `${iconBase}/postgresql/postgresql-original.svg` },
    { name: "MariaDB", icon: `${iconBase}/mariadb/mariadb-original.svg` },
    { name: "Redis", icon: `${iconBase}/redis/redis-original.svg` },
    { name: "Kafka", icon: `${iconBase}/apachekafka/apachekafka-original.svg` },
    { name: "RabbitMQ", icon: `${iconBase}/rabbitmq/rabbitmq-original.svg` }
  ]
];

const copy = {
  en: {
    heroEyebrow: "Bogota, Colombia · Open to tech roles",
    heroRole: "Backend & full-stack developer",
    heroCopy:
      "I build complete applications: backend, frontend, integrations, deployment, and operations. I connect product, infrastructure, and code to take real ideas to production.",
    primaryAction: "View projects",
    secondaryAction: "Let's talk",
    proofLabel: "Professional summary",
    proof: [
      ["2+ years", "professional experience"],
      ["Production", "deployments, support, and real incidents"],
      ["AWS", "EKS, ECR, RDS, S3, SQS, IAM"],
      ["End-to-end", "idea, architecture, code, deployment, and operations"]
    ],
    profileEyebrow: "Profile",
    profileTitle: "Systems engineer who turns requirements into working products.",
    profileBody: [
      "I have worked on backend services, asynchronous flows, REST APIs, third-party integrations, AI agents, and full-stack features. I like joining teams that value clean architecture, technical judgment, and steady delivery.",
      "My experience combines Kotlin, Next.js, relational and NoSQL databases, messaging, observability, and AWS deployments. I have also worked on production support, incident diagnosis, and maintainability improvements."
    ],
    experienceEyebrow: "Experience",
    experienceTitle: "Real work with live systems.",
    projectsEyebrow: "Projects and domains",
    projectsTitle: "Cases that show technical judgment.",
    stackEyebrow: "Stack",
    stackTitle: "Stack for building complete applications.",
    stackIntro:
      "A practical toolset across product, backend, frontend, cloud infrastructure, data, messaging, and production observability.",
    stackSliderLabel: "Technology logo slider",
    stackPanels: [
      {
        title: "Product engineering",
        body:
          "Frontend and backend working together: interfaces, APIs, integrations, business rules, and production-ready delivery."
      },
      {
        title: "Cloud & infrastructure",
        body:
          "Containers, AWS services, queues, storage, databases, permissions, deployment flows, and operational diagnosis."
      },
      {
        title: "Data & async systems",
        body:
          "Relational and NoSQL data, event-driven communication, publisher/subscriber flows, and background processes."
      }
    ],
    contactEyebrow: "Contact",
    contactTitle: "Looking for my next challenge in technology.",
    contactBody:
      "I am open to backend, full-stack, frontend, or cloud-adjacent roles where I can keep growing and contribute to product.",
    writeMe: "Email me",
    experience: [
      {
        time: "Oct 2024 - Present",
        title: "Fluxi · Software Developer",
        body:
          "Backend and full-stack development for AI agents, payment gateways, and ecommerce integrations with Dropi, Mercado Pago, Stripe, and Shopify.",
        bullets: [
          "Kotlin, Next.js, relational/NoSQL databases, and event-driven flows.",
          "AWS operations with containers, EKS, ECR, RDS, S3, SQS, IAM, and load balancers.",
          "Error and incident tracking with CloudWatch and Sentry."
        ]
      },
      {
        time: "Jun 2023 - Jun 2024",
        title: "Scientia Labs SAS · Junior Developer",
        body:
          "Backend API development for microservices, applying SOLID, clean architecture, layered separation, and interfaces to decouple components.",
        bullets: [
          "Services focused on business rules and maintainability.",
          "Event-driven architecture with publisher/subscriber patterns.",
          "Collaboration on technical decisions to improve scalability and consistency."
        ]
      },
      {
        time: "Jun 2022 - Jun 2023",
        title: "Universidad de Cundinamarca · Teaching Assistant",
        body:
          "Organization, cleaning, and analysis of academic information with Oracle, MariaDB, Excel, and Power BI.",
        bullets: []
      }
    ],
    projects: [
      {
        icon: Bot,
        title: "AI agents in product",
        body:
          "Integration of AI agents into real business flows, connecting backend, internal services, and user experience.",
        tags: ["Applied AI", "Backend", "Next.js"]
      },
      {
        icon: CreditCard,
        title: "Payments and ecommerce integrations",
        body:
          "Implementation of Mercado Pago, Stripe, Shopify, and Dropi integrations with attention to consistency, errors, callbacks, and traceability.",
        tags: ["Stripe", "Shopify", "APIs"]
      },
      {
        icon: Network,
        title: "Event-driven architecture",
        body:
          "Work on messaging services and publisher/subscriber patterns for real-time interactions and decoupled processes.",
        tags: ["Kafka", "RabbitMQ", "EDA"]
      },
      {
        icon: CloudCog,
        title: "Cloud operations on AWS",
        body:
          "Support for deployments, containers, diagnostics, and service operation on AWS, focused on availability and maintenance.",
        tags: ["EKS", "RDS", "SQS"]
      }
    ]
  },
  es: {
    heroEyebrow: "Bogotá, Colombia · Disponible para roles tech",
    heroRole: "Desarrollador backend / full-stack",
    heroCopy:
      "Levanto aplicaciones completas: backend, frontend, integraciones, despliegue y operación. Conecto producto, infraestructura y código para llevar ideas reales a producción.",
    primaryAction: "Ver proyectos",
    secondaryAction: "Hablemos",
    proofLabel: "Resumen profesional",
    proof: [
      ["2+ años", "experiencia profesional"],
      ["Producción", "despliegues, soporte e incidentes reales"],
      ["AWS", "EKS, ECR, RDS, S3, SQS, IAM"],
      ["End-to-end", "idea, arquitectura, código, despliegue y operación"]
    ],
    profileEyebrow: "Perfil",
    profileTitle: "Ingeniero de sistemas que convierte requerimientos en producto funcionando.",
    profileBody: [
      "He trabajado en servicios backend, flujos asincrónicos, APIs REST, integraciones de terceros, agentes de IA y funcionalidades full-stack. Me interesa aportar en equipos que valoren arquitectura limpia, criterio técnico y entrega constante.",
      "Mi experiencia combina Kotlin, Next.js, bases de datos relacionales y NoSQL, mensajería, observabilidad y despliegues sobre AWS. También he participado en soporte de producción, diagnóstico de incidentes y mejoras de mantenibilidad."
    ],
    experienceEyebrow: "Experiencia",
    experienceTitle: "Trabajo real con sistemas vivos.",
    projectsEyebrow: "Proyectos y dominios",
    projectsTitle: "Casos que muestran criterio técnico.",
    stackEyebrow: "Stack",
    stackTitle: "Stack para levantar aplicaciones completas.",
    stackIntro:
      "Un conjunto práctico para producto, backend, frontend, infraestructura cloud, datos, mensajería y observabilidad en producción.",
    stackSliderLabel: "Slider de logos de tecnologías",
    stackPanels: [
      {
        title: "Ingeniería de producto",
        body:
          "Frontend y backend trabajando juntos: interfaces, APIs, integraciones, reglas de negocio y entregas listas para producción."
      },
      {
        title: "Cloud e infraestructura",
        body:
          "Contenedores, servicios AWS, colas, almacenamiento, bases de datos, permisos, despliegues y diagnóstico operativo."
      },
      {
        title: "Datos y sistemas asíncronos",
        body:
          "Datos relacionales y NoSQL, comunicación orientada a eventos, flujos publicador/suscriptor y procesos en segundo plano."
      }
    ],
    contactEyebrow: "Contacto",
    contactTitle: "Busco mi siguiente reto en tecnología.",
    contactBody:
      "Estoy abierto a roles como desarrollador backend, full-stack, frontend o posiciones cercanas a infraestructura/cloud donde pueda seguir creciendo y aportar en producto.",
    writeMe: "Escribirme",
    experience: [
      {
        time: "Oct 2024 - Actualidad",
        title: "Fluxi · Desarrollador de Software",
        body:
          "Desarrollo backend y full-stack para agentes de IA, pasarelas de pago e integraciones de comercio electrónico con Dropi, Mercado Pago, Stripe y Shopify.",
        bullets: [
          "Kotlin, Next.js, bases relacionales/NoSQL y flujos orientados a eventos.",
          "Operación en AWS con contenedores, EKS, ECR, RDS, S3, SQS, IAM y balanceadores.",
          "Seguimiento de errores e incidentes con CloudWatch y Sentry."
        ]
      },
      {
        time: "Jun 2023 - Jun 2024",
        title: "Scientia Labs SAS · Desarrollador Junior",
        body:
          "Construcción de APIs backend para microservicios, aplicando SOLID, arquitectura limpia, separación por capas e interfaces para desacoplar componentes.",
        bullets: [
          "Servicios orientados a reglas de negocio y mantenibilidad.",
          "Arquitectura orientada a eventos con patrón publicador/suscriptor.",
          "Colaboración en decisiones técnicas para mejorar escalabilidad y consistencia."
        ]
      },
      {
        time: "Jun 2022 - Jun 2023",
        title: "Universidad de Cundinamarca · Monitor Universitario",
        body:
          "Organización, limpieza y análisis de información académica con Oracle, MariaDB, Excel y Power BI.",
        bullets: []
      }
    ],
    projects: [
      {
        icon: Bot,
        title: "Agentes de IA en producto",
        body:
          "Integración de agentes de IA dentro de flujos reales de negocio, conectando backend, servicios internos y experiencia de usuario.",
        tags: ["IA aplicada", "Backend", "Next.js"]
      },
      {
        icon: CreditCard,
        title: "Pagos e integraciones ecommerce",
        body:
          "Implementación de integraciones con Mercado Pago, Stripe, Shopify y Dropi, cuidando consistencia, errores, callbacks y trazabilidad.",
        tags: ["Stripe", "Shopify", "APIs"]
      },
      {
        icon: Network,
        title: "Arquitectura orientada a eventos",
        body:
          "Participación en servicios con mensajería y patrón publicador/suscriptor para interacciones en tiempo real y procesos desacoplados.",
        tags: ["Kafka", "RabbitMQ", "EDA"]
      },
      {
        icon: CloudCog,
        title: "Operación cloud en AWS",
        body:
          "Apoyo en despliegues, contenedores, diagnóstico y operación de servicios sobre AWS, con foco en disponibilidad y mantenimiento.",
        tags: ["EKS", "RDS", "SQS"]
      }
    ]
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

  const toggleLanguage = () => {
    setLanguage((current) => {
      const nextLanguage = current === "en" ? "es" : "en";
      window.localStorage.setItem(languageStorageKey, nextLanguage);
      return nextLanguage;
    });
  };

  return (
    <>
      <Header basePath={basePath} language={language} onToggleLanguage={toggleLanguage} />

      <main>
        <section id="inicio" className="hero">
          <img className="hero-image" src={`${basePath}/assets/hero-ops.png`} alt="" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>Stephan Suárez</h1>
            <p className="hero-role">{t.heroRole}</p>
            <p className="hero-copy">{t.heroCopy}</p>
            <div className="hero-actions">
              <a className="button primary" href="#proyectos">
                <BriefcaseBusiness aria-hidden="true" />
                {t.primaryAction}
              </a>
              <a className="button secondary" href="mailto:stph4211@gmail.com">
                <Mail aria-hidden="true" />
                {t.secondaryAction}
              </a>
            </div>
          </div>
        </section>

        <section className="proof-band" aria-label={t.proofLabel}>
          {t.proof.map(([title, body]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{body}</span>
            </div>
          ))}
        </section>

        <section className="section intro-section">
          <div className="section-heading">
            <p className="eyebrow">{t.profileEyebrow}</p>
            <h2>{t.profileTitle}</h2>
          </div>
          <div className="intro-copy">
            {t.profileBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section timeline-section">
          <div className="section-heading">
            <p className="eyebrow">{t.experienceEyebrow}</p>
            <h2>{t.experienceTitle}</h2>
          </div>
          <div className="timeline">
            {t.experience.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="time">{item.time}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  {item.bullets.length > 0 ? (
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="proyectos" className="section projects-section">
          <div className="section-heading">
            <p className="eyebrow">{t.projectsEyebrow}</p>
            <h2>{t.projectsTitle}</h2>
          </div>
          <div className="project-grid">
            {t.projects.map((project) => {
              const Icon = project.icon;

              return (
                <article className="project-card" key={project.title}>
                  <span className="project-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-heading stack-heading">
            <div>
              <p className="eyebrow">{t.stackEyebrow}</p>
              <h2>{t.stackTitle}</h2>
            </div>
            <p>{t.stackIntro}</p>
          </div>

          <div className="tech-showcase" aria-label={t.stackSliderLabel}>
            {technologyRows.map((row, rowIndex) => (
              <div className="tech-marquee" key={row.map((tech) => tech.name).join("-")}>
                <div className={`tech-track ${rowIndex % 2 === 1 ? "reverse" : ""}`}>
                  {[...row, ...row].map((tech, techIndex) => (
                    <span className="tech-pill" key={`${tech.name}-${techIndex}`}>
                      <span className="tech-logo">
                        <img src={tech.icon} alt="" loading="lazy" />
                      </span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="stack-panels">
            {t.stackPanels.map((panel) => (
              <article className="stack-panel" key={panel.title}>
                <h3>{panel.title}</h3>
                <p>{panel.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div>
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactBody}</p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:stph4211@gmail.com">
              <Send aria-hidden="true" />
              {t.writeMe}
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/stephan-suarez-38586b266"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a className="button ghost" href="tel:+573222249396">
              <Phone aria-hidden="true" />
              +57 322 224 9396
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Stephan Suárez Pérez</span>
        <span>Backend · Full-stack · Cloud</span>
      </footer>
    </>
  );
}
