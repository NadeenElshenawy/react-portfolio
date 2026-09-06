import "./TechTicker.css";

export const TechTicker = () => {
  const skills = [
    "TAILWIND CSS",
    "FIREBASE",
    "GIT",
    "GITHUB",
    "FIGMA",
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
    "REACT",
  ];

return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {/* Render first group */}
        <div className="ticker-group">
          {skills.map((skill) => (
            <span key={`first-${skill}`} className="ticker-item">
              <span className="ticker-star">✦</span> {skill}
            </span>
          ))}
        </div>

        {/* Duplicate group to create infinite seamless loop */}
        <div className="ticker-group" aria-hidden="true">
          {skills.map((skill, index) => (
            <span key={`second-${index}`} className="ticker-item">
              <span className="ticker-star">✦</span> {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


