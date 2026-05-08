"use client";

import {
  Bot,
  BriefcaseBusiness,
  CloudCog,
  CreditCard,
  GitBranch,
  Linkedin,
  Mail,
  Network,
  Phone,
  Rocket,
  Send,
  Smartphone
} from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const languageStorageKey = "portfolio-language";

type Language = "en" | "es";

const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const simpleIconBase = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";

const technologyRows = [
  [
    { name: "Kotlin", icon: `${iconBase}/kotlin/kotlin-original.svg` },
    { name: "NestJS", icon: `${iconBase}/nestjs/nestjs-original.svg` },
    { name: "Next.js", icon: `${iconBase}/nextjs/nextjs-original.svg` },
    { name: "React", icon: `${iconBase}/react/react-original.svg` },
    { name: "Tailwind", icon: `${iconBase}/tailwindcss/tailwindcss-original.svg` },
    { name: "TypeScript", icon: `${iconBase}/typescript/typescript-original.svg` },
    { name: "Node.js", icon: `${iconBase}/nodejs/nodejs-original.svg` }
  ],
  [
    { name: "AWS", icon: `${iconBase}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Google Cloud", icon: `${iconBase}/googlecloud/googlecloud-original.svg` },
    { name: "Docker", icon: `${iconBase}/docker/docker-original.svg` },
    { name: "Kubernetes", icon: `${iconBase}/kubernetes/kubernetes-plain.svg` },
    { name: "GitHub", icon: `${iconBase}/github/github-original.svg` },
    { name: "Git", icon: `${iconBase}/git/git-original.svg` }
  ],
  [
    { name: "PostgreSQL", icon: `${iconBase}/postgresql/postgresql-original.svg` },
    { name: "MariaDB", icon: `${iconBase}/mariadb/mariadb-original.svg` },
    { name: "MongoDB", icon: `${iconBase}/mongodb/mongodb-original.svg` },
    { name: "Redis", icon: `${iconBase}/redis/redis-original.svg` },
    { name: "Kafka", icon: `${iconBase}/apachekafka/apachekafka-original.svg` },
    { name: "RabbitMQ", icon: `${iconBase}/rabbitmq/rabbitmq-original.svg` }
  ],
  [
    { name: "Codex", icon: `${simpleIconBase}/openai.svg` },
    { name: "Claude", icon: `${simpleIconBase}/claude.svg` },
    { name: "OpenAI", icon: `${simpleIconBase}/openai.svg` },
    { name: "Anthropic", icon: `${simpleIconBase}/anthropic.svg` },
    { name: "GitHub Copilot", icon: `${simpleIconBase}/githubcopilot.svg` }
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
      {
        eyebrow: "Experience",
        title: "2+ years",
        body: "Building, shipping, and supporting real product features.",
        icon: BriefcaseBusiness
      },
      {
        eyebrow: "Production",
        title: "Live systems",
        body: "Deployments, support, incidents, diagnostics, and fixes.",
        icon: Rocket
      },
      {
        eyebrow: "Cloud",
        title: "AWS stack",
        body: "EKS, ECR, RDS, S3, SQS, IAM, containers, and load balancers.",
        icon: CloudCog
      },
      {
        eyebrow: "Delivery",
        title: "End-to-end",
        body: "From idea and architecture to code, deployment, and operation.",
        icon: GitBranch
      }
    ],
    profileEyebrow: "Profile",
    profileTitle: "Systems engineer who turns requirements into working products.",
    profileBody: [
      "I have worked on backend services, asynchronous flows, REST APIs, third-party integrations, AI agents, and full-stack features. I like joining teams that value clean architecture, technical judgment, and steady delivery.",
      "My experience combines Kotlin, Next.js, relational and NoSQL databases, messaging, observability, and AWS deployments. I have also worked on production support, incident diagnosis, and maintainability improvements."
    ],
    experienceEyebrow: "Experience",
    experienceTitle: "Real work with live systems.",
    projectsEyebrow: "Representative work",
    projectsTitle: "Private products I have helped build and operate.",
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
        title: "Fluxi · AI and ecommerce platform",
        body:
          "Membership-gated web product with AI agents, ecommerce workflows, internal services, and product-facing interfaces. Private production work, available to discuss in detail during interviews.",
        tags: ["AI agents", "Ecommerce", "Private SaaS"]
      },
      {
        icon: CreditCard,
        title: "Fluxi · Payments and integrations",
        body:
          "Backend and full-stack work around Stripe, Mercado Pago, Shopify, Dropi, callbacks, payment states, operational errors, and traceability across real business flows.",
        tags: ["Stripe", "Mercado Pago", "Shopify"]
      },
      {
        icon: Smartphone,
        title: "Whatxi · Taxi service mobile app",
        body:
          "Mobile product for requesting taxi services, with backend flows for service requests, operational coordination, and user-facing app behavior. Not publicly linked because it is an app product.",
        tags: ["Mobile app", "Services", "Backend"]
      },
      {
        icon: Network,
        title: "Production systems and async flows",
        body:
          "Event-driven services, queues, containers, cloud infrastructure, logs, incident diagnosis, and production support across private systems.",
        tags: ["AWS", "Queues", "Observability"]
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
      {
        eyebrow: "Experiencia",
        title: "2+ años",
        body: "Construyendo, entregando y soportando funcionalidades reales de producto.",
        icon: BriefcaseBusiness
      },
      {
        eyebrow: "Producción",
        title: "Sistemas vivos",
        body: "Despliegues, soporte, incidentes, diagnóstico y correcciones.",
        icon: Rocket
      },
      {
        eyebrow: "Cloud",
        title: "Stack AWS",
        body: "EKS, ECR, RDS, S3, SQS, IAM, contenedores y balanceadores.",
        icon: CloudCog
      },
      {
        eyebrow: "Entrega",
        title: "End-to-end",
        body: "De idea y arquitectura a código, despliegue y operación.",
        icon: GitBranch
      }
    ],
    profileEyebrow: "Perfil",
    profileTitle: "Ingeniero de sistemas que convierte requerimientos en producto funcionando.",
    profileBody: [
      "He trabajado en servicios backend, flujos asincrónicos, APIs REST, integraciones de terceros, agentes de IA y funcionalidades full-stack. Me interesa aportar en equipos que valoren arquitectura limpia, criterio técnico y entrega constante.",
      "Mi experiencia combina Kotlin, Next.js, bases de datos relacionales y NoSQL, mensajería, observabilidad y despliegues sobre AWS. También he participado en soporte de producción, diagnóstico de incidentes y mejoras de mantenibilidad."
    ],
    experienceEyebrow: "Experiencia",
    experienceTitle: "Trabajo real con sistemas vivos.",
    projectsEyebrow: "Trabajo representativo",
    projectsTitle: "Productos privados que he ayudado a construir y operar.",
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
        title: "Fluxi · Plataforma de IA y ecommerce",
        body:
          "Producto web con membresía, agentes de IA, flujos de ecommerce, servicios internos e interfaces de producto. Trabajo privado en producción, explicable con detalle en entrevista.",
        tags: ["Agentes IA", "Ecommerce", "SaaS privado"]
      },
      {
        icon: CreditCard,
        title: "Fluxi · Pagos e integraciones",
        body:
          "Trabajo backend y full-stack alrededor de Stripe, Mercado Pago, Shopify, Dropi, callbacks, estados de pago, errores operativos y trazabilidad.",
        tags: ["Stripe", "Mercado Pago", "Shopify"]
      },
      {
        icon: Smartphone,
        title: "Whatxi · App móvil para servicios de taxi",
        body:
          "Producto móvil para solicitar servicios de taxi, con backend para solicitudes, coordinación operativa y comportamiento de la app. No tiene link público porque es una aplicación.",
        tags: ["App móvil", "Servicios", "Backend"]
      },
      {
        icon: Network,
        title: "Sistemas en producción y flujos asíncronos",
        body:
          "Servicios orientados a eventos, colas, contenedores, infraestructura cloud, logs, diagnóstico de incidentes y soporte de producción en sistemas privados.",
        tags: ["AWS", "Colas", "Observabilidad"]
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
          {t.proof.map((item) => {
            const Icon = item.icon;

            return (
              <article className="proof-card" key={item.title}>
                <div className="proof-card-top">
                  <span>{item.eyebrow}</span>
                  <Icon aria-hidden="true" />
                </div>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </article>
            );
          })}
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
