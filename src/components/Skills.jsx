import "./Skills.css";

export const Skills = () => {
  const tools = [
    {
      name: "JavaScript",
      category: "CORE LANGUAGE",
      level: "Proficient",
      dots: 4, // Out of 5
      docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      iconBg: "#f7df1e",
      iconColor: "#000000",
      iconText: "JS",
    },
    {
      name: "React",
      category: "FRONTEND FRAMEWORK",
      level: "Proficient",
      dots: 4,
      docUrl: "https://react.dev/",
      iconBg: "#23272f",
      iconColor: "#149eca",
      iconText: "⚛",
    },
    {
      name: "Tailwind CSS",
      category: "FRONTEND UI",
      level: "Advanced",
      dots: 5,
      docUrl: "https://tailwindcss.com/docs",
      iconBg: "#0b1120",
      iconColor: "#38bdf8",
      iconText: "≈",
    },
    {
      name: "HTML5 & CSS3",
      category: "CORE WEB",
      level: "Advanced",
      dots: 5,
      docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      iconBg: "#e34f26",
      iconColor: "#ffffff",
      iconText: "</>",
    },
    {
      name: "Firebase",
      category: "CORE BACKEND",
      level: "Proficient",
      dots: 4,
      docUrl: "https://firebase.google.com/docs",
      iconBg: "#1a73e8",
      iconColor: "#ffca28",
      iconText: "🔥",
    },
    {
      name: "Git & GitHub",
      category: "VERSION CONTROL",
      level: "Proficient",
      dots: 4,
      docUrl: "https://git-scm.com/doc",
      iconBg: "#f05032",
      iconColor: "#ffffff",
      iconText: "⎇",
    },
    
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <div>
          <span className="section-label">SKILLS</span>
          <h2 className="section-title">Tools of the craft.</h2>
        </div>
        <p className="skills-subtitle">
          The technologies I use day-to-day to build responsive, production-ready interfaces.
        </p>
      </div>

      {/* Main Dark Dashboard Box */}
      <div className="skills-dashboard">
        <div className="dashboard-meta">
          <span className="dot-purple"></span>
          <span>TECH STACK</span>
          <span className="separator">•</span>
          <span>{tools.length} TECHNOLOGIES</span>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card"
            >
              <div className="tool-left">
                <div
                  className="tool-icon"
                  style={{ backgroundColor: tool.iconBg, color: tool.iconColor }}
                >
                  {tool.iconText}
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">{tool.name}</h3>
                  <span className="tool-category">{tool.category}</span>
                </div>
              </div>

              <div className="tool-right">
                <span className={`badge ${tool.level.toLowerCase()}`}>
                  {tool.level}
                </span>
                <div className="dots-row">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`rating-dot ${i < tool.dots ? "filled" : ""}`}
                    ></span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};