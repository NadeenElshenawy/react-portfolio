import './About.css';
import { ScrollReveal } from './ScrollReveal';

export const About = () => {
  const highlights = [
    { label: "FOCUS", value: "Front-End Development" },
    { label: "FRAMEWORK", value: "React" },
    { label: "STRENGTH", value: "Responsive Design" },
    { label: "PROCESS", value: "UI Implementation" },
  ];

  const stats = [
    { number: "2024", label: "STARTED CODING" },
    { number: "3+", label: "PROJECTS BUILT" },
    { number: "100%", label: "RESPONSIVE-FIRST" },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT COLUMN: Title & 2x2 Feature Cards */}
        <div className="about-left">
          <span className="section-label">ABOUT</span>

          <ScrollReveal delay={0.1}>
            <h2 className="about-heading">
              Designing with{" "}
              <span className="serif-italic-purple">purpose.</span>
              <br />
              Building with{" "}
              <span className="serif-italic-gray">code.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="highlight-grid">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card">
                  <span className="card-label">{item.label}</span>
                  <p className="card-value">{item.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* RIGHT COLUMN: Bio Paragraphs & Stats */}
        <div className="about-right">

          <ScrollReveal delay={0.15}>
            <div className="bio-text">
              <p>
                I'm Nadeen, a junior front-end developer currently studying
                Information Technology at Borg El-Arab Technological University.
                I believe building a website shouldn't be complicated for the
                person who needs one. Many business owners and non-technical
                clients know they need an online presence, but aren't sure what
                kind of website they need, what features would actually benefit
                them, or where to start.

                That's where I come in. I help clients turn their ideas and goals
                into a website that fits their needs — from deciding what pages
                and features are useful to creating a responsive, easy-to-use
                interface that works across different screen sizes.

                I specialize in React and Tailwind CSS, but my role goes beyond
                writing code. I focus on understanding the person and the purpose
                behind the website, communicating clearly throughout the process,
                and adapting to feedback and changing needs.

                My goal isn't just to build a website. It's to make the process
                easier for people who don't speak “web development” and give them
                a website that genuinely works for them and their goals.
              </p>
            </div>
          </ScrollReveal>

          <div className="stats-divider"></div>

          <ScrollReveal delay={0.25}>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};