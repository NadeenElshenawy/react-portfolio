import './Education.css';


export const Education = () => {
  const timelineData = [
    {
      id: 1,
      period: "2024 – 2028",
      degree: "B.Sc. Information Technology",
      institution: "Borg El-Arab Technological University",
      description: "Currently enrolled in the Software Department, studying software development, web technologies, databases, and computer science fundamentals.",
      isCurrent: true,
    },
    {
      id: 2,
      period: "2026 — Present",
      degree: "DEPI React Web Development Track",
      institution: "Digital Egypt Pioneers Initiative (DEPI)",
      description: "Currently enrolled in a structured React Web Development track, building my understanding of React, component-based development, and modern front-end development through hands-on learning.",
      isCurrent: true,
    },
    {
      id: 3,
      period: "2024 — Present",
      degree: "Front-End Development",
      institution: "Self-directed learning + hands-on projects",
      description: "Developing my front-end skills through practical projects using HTML, CSS, JavaScript, React, and Tailwind CSS. I focus on turning ideas and designs into responsive, user-friendly interfaces while continuously improving through each project.",
      isCurrent: false,
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        
        {/* Section Header */}
        <div className="education-header">
          <span className="section-label">EDUCATION & LEARNING</span>
          <h2 className="education-title">The path so far.</h2>
        </div>

        {/* Timeline List */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {timelineData.map((item) => (
            <div key={item.id} className="timeline-item">
              {/* Bullet Node */}
              <div className={`timeline-dot ${item.isCurrent ? "current" : ""}`}></div>

              {/* Content Box */}
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};