import { useDispatch, useSelector } from "react-redux";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Github,
  Linkedin,
  Menu,
  X,
  Code2,
  Database,
  Cpu,
  ServerCog,
} from "lucide-react";
import { technologies, projects } from "./data/portfolio";
import { setActiveFilter } from "./features/projects/projectsSlice";
import { closeMobileMenu, toggleMobileMenu } from "./features/ui/uiSlice";

const filters = ["All", "AI", "Backend"];

function Navbar() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.ui.mobileMenuOpen);

  const nav = [
    ["About", "#about"],
    ["Stack", "#stack"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="nav-shell">
      <nav className="nav container">
        <a
          className="brand"
          href="#top"
          onClick={() => dispatch(closeMobileMenu())}
        >
          sk<span>.</span>
        </a>
        <div className="nav-links desktop-nav">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <button
          className="menu-button"
          aria-label="Toggle menu"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="mobile-nav container">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => dispatch(closeMobileMenu())}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="hero container">
      <div className="hero-copy">
        <p className="kicker">HELLO, I’M</p>
        <h1>
          Sameer
          <br />
          Kurkure<span>.</span>
        </h1>
        <p className="hero-tagline">
          Software engineer building scalable backend systems and AI-powered
          products.
        </p>
        <p className="hero-body">
          I enjoy taking difficult engineering problems, stripping away the
          noise, and turning them into products that are useful in the real
          world.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View my work <ArrowDown size={17} />
          </a>
          <a className="button ghost" href="#contact">
            Let’s connect
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="code-window">
          <div className="window-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <code>
            <span className="muted">// currently building</span>
            {"\n"}
            <span className="accent">product</span>.solve(realProblem);{"\n"}
            <span className="accent">system</span>.scale(cleanly);{"\n"}
            <span className="accent">ai</span>.augment(humans);
          </code>
        </div>
        <p className="scribble">
          backend first.
          <br />
          product minded.
          <br />
          AI builder.
        </p>
      </div>

      <div className="hero-foot">
        <span>Java · Spring Boot · React · AI Engineering</span>
        <a href="#stack">
          Scroll to explore <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="section stack-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="kicker">TECH STACK</p>
            <h2>Tools I build with.</h2>
          </div>

          <p>
            I like boring, proven backend technology — and modern AI where it
            actually adds value.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <article className="tech-card" key={tech.name}>
                <div className="tech-mark">
                  <Icon />
                </div>

                <div className="tech-info">
                  <strong>{tech.name}</strong>
                  <span>{tech.group}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="featured-card">
      <div className="featured-copy">
        <div className="project-icon">
          <Cpu size={22} />
        </div>
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-detail">{project.detail}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="featured-art" aria-hidden="true">
        <div className="flow-node node-a">
          <Database size={20} />
          <span>Knowledge</span>
        </div>
        <div className="flow-line line-a"></div>
        <div className="flow-node node-b">
          <Braces size={20} />
          <span>RAG</span>
        </div>
        <div className="flow-line line-b"></div>
        <div className="flow-node node-c">
          <ServerCog size={20} />
          <span>Guidance</span>
        </div>
        <div className="pulse-core">M</div>
      </div>
    </article>
  );
}

function Projects() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.projects.activeFilter);
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter(
    (project) =>
      !project.featured &&
      (activeFilter === "All" || project.category === activeFilter),
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading projects-heading">
          <div>
            <p className="kicker">SELECTED WORK</p>
            <h2>Things I’m building.</h2>
          </div>
          <div className="filters" aria-label="Project filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter active" : "filter"}
                onClick={() => dispatch(setActiveFilter(filter))}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {featured && <FeaturedProject project={featured} />}

        <div className="project-grid">
          {rest.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-top">
                <div className="project-icon">
                  {project.category === "AI" ? (
                    <Cpu size={20} />
                  ) : (
                    <Code2 size={20} />
                  )}
                </div>
                <ArrowUpRight size={20} />
              </div>
              <p className="project-eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-row compact">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <p className="kicker">CONTACT</p>
        <h2>Let’s build something useful.</h2>
        <p>
          Interested in backend systems, AI engineering, product ideas, or just
          a good technical conversation? I’m always happy to connect.
        </p>
        <div className="contact-actions">
          <a className="button primary" href="#top">
            Back to top <ArrowUpRight size={17} />
          </a>
          <div
            className="social-placeholder"
            aria-label="Social links placeholder"
          >
            <span>
              <Github size={18} /> GitHub
            </span>
            <span>
              <Linkedin size={18} /> LinkedIn
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© 2026 Sameer Kurkure</span>
        <span>Build · Learn · Improve · Repeat</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
