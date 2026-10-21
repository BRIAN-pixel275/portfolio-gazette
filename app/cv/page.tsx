import type { Metadata } from "next";
import { education, experience, markets, site, stories } from "@/lib/content";
import CvPrintButton from "@/app/components/cv-print-button";
import ThemeToggle from "@/app/components/theme-toggle";

export const metadata: Metadata = {
  title: "CV",
  description: `Education, experience, skills, and selected projects for ${site.name}.`,
};

export default function CvPage() {
  const selectedProjects = stories.filter((story) => story.liveHref);

  return (
    <main className="cv-sheet">
      <a className="skip-link" href="#cv-content">Skip to CV</a>
      <header className="cv-heading">
        <div>
          <h1>{site.name}</h1>
          <p>{site.status} · {site.city}</p>
          <ul className="cv-link-list" aria-label="Contact and profile links">
            {site.links.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="cv-actions">
          <ThemeToggle />
          <CvPrintButton />
          <a className="cv-home-link" href="/">Portfolio</a>
        </div>
      </header>

      <div id="cv-content">
        <section className="cv-section" aria-labelledby="cv-profile">
          <h2 id="cv-profile">Profile</h2>
          <p>Economics and Finance student and software developer interested in practical digital products, fintech, and thoughtful design. Learning through collaborative web projects, Java applications, and student leadership.</p>
        </section>

        <section className="cv-section" aria-labelledby="cv-experience">
          <h2 id="cv-experience">Relevant experience</h2>
          {experience.map((item) => (
            <article className="cv-entry" key={item.title}>
              <div className="cv-topline"><h3>{item.title}</h3><span>{item.type}</span></div>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="cv-section" aria-labelledby="cv-education">
          <h2 id="cv-education">Education & certification</h2>
          {education.map((item) => (
            <article className="cv-entry" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="cv-section" aria-labelledby="cv-skills">
          <h2 id="cv-skills">Skills & tools</h2>
          {markets.map((item) => <p key={item.skill}><strong>{item.skill}:</strong> {item.tools}</p>)}
        </section>

        <section className="cv-section" aria-labelledby="cv-projects">
          <h2 id="cv-projects">Selected projects</h2>
          {selectedProjects.map((project) => (
            <article className="cv-entry" key={project.title}>
              <div className="cv-topline">
                <h3>{project.title}</h3>
                <span>{project.byline}</span>
              </div>
              <p>{project.deck} {project.stack}.</p>
              <ul className="cv-link-list">
                <li><a href={project.liveHref}>View live project</a></li>
                {project.codeHref && <li><a href={project.codeHref}>View source code</a></li>}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
