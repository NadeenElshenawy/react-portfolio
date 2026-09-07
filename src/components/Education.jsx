import "./Education.css";
import { ScrollReveal } from "./ScrollReveal";
import { timelineData } from "../data/timeLineData";

export const Education = () => {
  
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <div className="education-header">
            <span className="section-label">
              EDUCATION & LEARNING
            </span>

            <h2 className="education-title">
              The path so far.
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline List */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {timelineData.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={0.2 + index * 0.15}
            >
              <div className="timeline-item">

                {/* Bullet Node */}
                <div
                  className={`timeline-dot ${
                    item.isCurrent ? "current" : ""
                  }`}
                ></div>

                {/* Content Box */}
                <div className="timeline-content">
                  <span className="timeline-period">
                    {item.period}
                  </span>

                  <h3 className="timeline-degree">
                    {item.degree}
                  </h3>

                  <p className="timeline-institution">
                    {item.institution}
                  </p>

                  <p className="timeline-description">
                    {item.description}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};