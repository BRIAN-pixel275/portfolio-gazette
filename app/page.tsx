import { site, lead, stories, profile, markets, experience, education, classifieds } from "@/lib/content";

export default function Page() {
  return (
    <main className="sheet">
      <header className="masthead">
        <div className="dateline">
          <span>{site.city}</span>
          <span>{site.motto}</span>
          <span>Portfolio · 2026</span>
        </div>
        <a className="nameplate" href="#home" aria-label={`${site.name} home`}>{site.paper}<span>.</span></a>
        <div className="identity">
          <p>{site.name} <span>({site.nickname})</span></p>
          <p className="status">{site.status}</p>
        </div>
        <nav className="sections" aria-label="Sections">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="lead" aria-labelledby="lead-h">
        <p className="kicker">{lead.kicker}</p>
        <h1 id="lead-h" className="mega">{lead.headline}</h1>
        <p className="deck">{lead.deck}</p>
        <div className="lead-actions">
          <a className="button" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="https://www.linkedin.com/in/brian-muchiru-b0b057356/" target="_blank" rel="noreferrer">Let’s connect <span aria-hidden="true">↗</span></a>
        </div>
        <div className="cols intro-copy">{lead.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <section id="work" className="stories" aria-labelledby="stories-h">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2 id="stories-h" className="section-h">Projects in progress and practice</h2></div>
          <p className="section-note">A selection of collaborative work, learning projects, and products I have contributed to.</p>
        </div>
        <div className="grid3">
          {stories.map((story, index) => (
            <article className="story-card" key={story.title}>
              <span className="story-number">0{index + 1}</span>
              <p className="kicker">{story.kicker}</p>
              <h3>
                {story.href
                  ? <a href={story.href} target="_blank" rel="noreferrer">{story.title}<span aria-hidden="true"> ↗</span></a>
                  : story.title}
              </h3>
              <p>{story.deck}</p>
              <p className="meta">{story.byline} · {story.stack}</p>
              {story.note && <p className="project-note">{story.note}</p>}
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="profile" aria-labelledby="profile-h">
        <p className="eyebrow">The person behind the projects</p>
        <h2 id="profile-h" className="section-h">{profile.title}</h2>
        <div className="cols">{profile.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <div className="split">
        <section id="skills" aria-labelledby="skills-h">
          <p className="eyebrow">What I use</p>
          <h2 id="skills-h" className="section-h">Skills & tools</h2>
          <p className="section-note">Technologies and tools I have used across projects and learning—not a claim of expert proficiency in every item.</p>
          <table>
            <thead><tr><th>Area</th><th>Tools & topics</th></tr></thead>
            <tbody>{markets.map((item) => <tr key={item.skill}><td>{item.skill}</td><td>{item.tools}</td></tr>)}</tbody>
          </table>
        </section>
        <section id="experience" aria-labelledby="experience-h">
          <p className="eyebrow">Where I contribute</p>
          <h2 id="experience-h" className="section-h">Experience & community</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.title}>
                <p className="timeline-type">{item.type}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="lower-grid">
        <section aria-labelledby="education-h">
          <p className="eyebrow">Learning & foundations</p>
          <h2 id="education-h" className="section-h">Education & certification</h2>
          <div className="education-list">
            {education.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>)}
          </div>
        </section>
        <section aria-labelledby="interests-h">
          <p className="eyebrow">Areas I care about</p>
          <h2 id="interests-h" className="section-h">What I’m drawn to</h2>
          <div className="ads">
            {classifieds.map((item) => <article key={item.title} className="ad"><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </section>
      </div>

      <footer id="contact" className="letters">
        <p className="eyebrow">Have a project or an idea?</p>
        <h2 className="mega small">Let’s make something useful.</h2>
        <p>Reach out or explore what I’m working on.</p>
        <p className="footer-links">{site.links.map((link, index) => (
          <span key={link.label}>{index > 0 && <span aria-hidden="true"> · </span>}
            <a href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
          </span>
        ))}</p>
        <p className="meta">© {new Date().getFullYear()} {site.name} · Made with curiosity in Kenya.</p>
      </footer>
    </main>
  );
}
