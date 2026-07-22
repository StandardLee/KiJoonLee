import "./App.css";
import { useEffect } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiSupabase,
  SiVite,
  SiGit,
  SiHtml5,
  SiFirebase,
  SiDotnet
} from "react-icons/si";
import { 
  FaAws,
  FaJava
} from "react-icons/fa";

import { TbBrandCSharp } from "react-icons/tb";
import { 
  DiMsqlServer,
  DiCss3
 } from "react-icons/di";
 import { VscVscode } from "react-icons/vsc";

function App() {

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Home Cafe Order System",
      description:
        "A mobile-friendly ordering web app built with React, Vite, and Supabase. Customers can browse menu items, customize drinks, and place orders, while an admin interface manages pending orders and completion status.",
      tech: ["React", "Vite", "CSS", "Supabase"],
      link: "https://cafe.standardlee.info",
    },
    {
      title: "Retail SQL Portfolio",
      description:
        "SQL portfolio showcasing synthetic multi-store retail data, database schema design, and complex T-SQL queries for reporting.",
      tech: ["SQL", "Stored Procedures", "View Tables"],
      link: "https://github.com/StandardLee/Retail_SQL_Portfolio",
    }
   
  ];

  const skills = [
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Microsoft SQL Server", icon: DiMsqlServer },
      { name: "Python", icon: SiPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase },
      { name: "Git", icon: SiGit },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS3", icon: DiCss3 },
      { name: "Java", icon: FaJava },
      { name: "C#", icon: TbBrandCSharp },
      { name: ".NET", icon: SiDotnet },
      { name: "VS Code", icon: VscVscode },
      { name: "AWS", icon: FaAws },
      { name: "Firebase", icon: SiFirebase },
  ];

  return (
    <div className="portfolio">
      <div className="floating-links">
        <a href="#resume">Get resume</a>
        <a href="#projects">View Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <header className="hero">
        <div className="hero-content">
          <p className="intro">Hi, my name is</p>
          <h1>Ki Joon Lee.</h1>
          <h2>Developer with experience in web development, SQL, OOP, and business systems.</h2>
          <p className="hero-text">
            I build user-focused applications ranging from frontend interfaces to backend data workflows and automation.
          </p>
        </div>
      </header>

      <main>

        <section id="resume" className="section resume-section">
          <h2>Resume</h2>
          <p>You can view my resume below.</p>
          <div className="resume-links">
            <a href="http://resume.standardlee.info" target="_blank" rel="noreferrer" className="resume-button">Open Resume</a>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <a 
              key={project.title}
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="card project-card-link"
              >
                <h3>
                {project.title}
                </h3>
                <p>{project.description}</p>
                <ul className="tech-list">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-logo-list">
            {skills.map((skill) => {
              const Icon = skill.icon;
              
              return(
              <div className="skill-logo-item" key={skill.name}>
                <Icon className="skill-icon" aria-hidden="true" />
                <span>{skill.name}</span>
              </div>
              );
            })}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            I’m interested in opportunities involving web development, databases,
            automation, and business systems.
          </p>
          <div className="hero-links">
            <a href="https://github.com/StandardLee" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ki-joon-lee"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;