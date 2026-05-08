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
import { Header } from "./components/Header";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const experience = [
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
];

const projects = [
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
];

const stackGroups = [
  {
    title: "Backend",
    body: "Kotlin, APIs REST, microservicios, monolitos modulares, servicios distribuidos."
  },
  {
    title: "Frontend",
    body: "Next.js, funcionalidades end-to-end, integración con producto y servicios."
  },
  {
    title: "Cloud & DevOps",
    body: "AWS, EKS, EC2, RDS, S3, ECR, SQS, IAM, Docker, Git."
  },
  {
    title: "Datos & Mensajería",
    body: "Oracle, MariaDB, bases NoSQL, Kafka, RabbitMQ, patrón publicador/suscriptor."
  },
  {
    title: "Observabilidad",
    body: "CloudWatch, Sentry, diagnóstico de incidentes y seguimiento de errores."
  },
  {
    title: "Arquitectura",
    body: "SOLID, arquitectura limpia, separación por capas, interfaces y abstracciones."
  }
];

export default function Home() {
  return (
    <>
      <Header basePath={basePath} />

      <main>
        <section id="inicio" className="hero">
          <img className="hero-image" src={`${basePath}/assets/hero-ops.png`} alt="" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">Bogotá, Colombia · Disponible para roles tech</p>
            <h1>Stephan Suárez</h1>
            <p className="hero-role">Desarrollador backend / full-stack</p>
            <p className="hero-copy">
              Construyo servicios mantenibles, integraciones confiables y aplicaciones que llegan a
              producción. Me muevo entre backend, frontend e infraestructura cuando el producto lo
              necesita.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#proyectos">
                <BriefcaseBusiness aria-hidden="true" />
                Ver trabajo
              </a>
              <a className="button secondary" href="mailto:stph4211@gmail.com">
                <Mail aria-hidden="true" />
                Contactar
              </a>
            </div>
          </div>
        </section>

        <section className="proof-band" aria-label="Resumen profesional">
          <div>
            <strong>2+ años</strong>
            <span>experiencia profesional</span>
          </div>
          <div>
            <strong>Producción</strong>
            <span>despliegues, soporte e incidentes reales</span>
          </div>
          <div>
            <strong>AWS</strong>
            <span>EKS, ECR, RDS, S3, SQS, IAM</span>
          </div>
          <div>
            <strong>Full cycle</strong>
            <span>requerimientos, diseño, código y operación</span>
          </div>
        </section>

        <section className="section intro-section">
          <div className="section-heading">
            <p className="eyebrow">Perfil</p>
            <h2>Ingeniero de sistemas orientado a producto y backend sólido.</h2>
          </div>
          <div className="intro-copy">
            <p>
              He trabajado en servicios backend, flujos asincrónicos, APIs REST, integraciones de
              terceros, agentes de IA y funcionalidades full-stack. Me interesa aportar en equipos
              que valoren arquitectura limpia, criterio técnico y entrega constante.
            </p>
            <p>
              Mi experiencia combina Kotlin, Next.js, bases de datos relacionales y NoSQL,
              mensajería, observabilidad y despliegues sobre AWS. También he participado en soporte
              de producción, diagnóstico de incidentes y mejoras de mantenibilidad.
            </p>
          </div>
        </section>

        <section id="experiencia" className="section timeline-section">
          <div className="section-heading">
            <p className="eyebrow">Experiencia</p>
            <h2>Trabajo real con sistemas vivos.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
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
            <p className="eyebrow">Proyectos y dominios</p>
            <h2>Casos que muestran criterio técnico.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
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
          <div className="section-heading">
            <p className="eyebrow">Stack</p>
            <h2>Tecnologías con las que he construido y operado.</h2>
          </div>
          <div className="stack-groups">
            {stackGroups.map((group) => (
              <div className="stack-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Busco mi siguiente reto en tecnología.</h2>
            <p>
              Estoy abierto a roles como desarrollador backend, full-stack, frontend o posiciones
              cercanas a infraestructura/cloud donde pueda seguir creciendo y aportar en producto.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:stph4211@gmail.com">
              <Send aria-hidden="true" />
              Escribirme
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
