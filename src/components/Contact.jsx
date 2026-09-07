import "./Contact.css";
import { ScrollReveal } from "./ScrollReveal";

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        {/* Decorative subtle purple background glow */}
        <div className="contact-glow" aria-hidden="true"></div>

        <ScrollReveal delay={0.1}>
          <div className="contact-content">
            <span className="contact-label">LET'S WORK TOGETHER</span>

            <h2 className="contact-heading">
              Have an idea?
              <br />
              <span className="serif-italic-purple">Let's build it.</span>
            </h2>

            <p className="contact-description">
              I'm available for freelance projects and collaborations. Whether
              you have a detailed Figma file or just an early-stage idea —
              let's talk about what you want to build.
            </p>

            <a
              href="https://www.linkedin.com/in/nadeensamy/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Let's Work Together <span className="arrow">→</span>
            </a>

            <div className="contact-links-grid">
              <div className="link-group">
                <span className="link-title">EMAIL</span>
                <a
                  href="mailto:nadienelshenawy@gmail.com"
                  className="contact-link"
                >
                  nadienelshenawy@gmail.com
                </a>
              </div>

              <div className="link-group">
                <span className="link-title">LINKEDIN</span>
                <a
                  href="https://www.linkedin.com/in/nadeensamy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  linkedin.com/in/nadeensamy
                </a>
              </div>

              <div className="link-group">
                <span className="link-title">GITHUB</span>
                <a
                  href="https://github.com/NadeenElshenawy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  github.com/NadeenElshenawy
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};