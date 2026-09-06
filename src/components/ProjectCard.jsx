export const ProjectCard = ({ project, id, name, category, description, tech, previewImg, onProjectClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onProjectClick(project);
  };
  
  return (
    <div className="project-card" onClick={() => onProjectClick(project)}>
      {/* Image at the top */}
      <div className="project-preview">
        {previewImg && (
          <img src={previewImg} alt={`${name} preview`} className="preview-image" />
        )}
      </div>

      {/* Content below image */}
      <div className="project-content">
        <div className="project-header">
          <span className="project-number">{id}</span>
          <div className="tech-tags">
            {tech.map((item, index) => (
              <span key={index} className="tech-badge">{item}</span>
            ))}
          </div>
        </div>

        <h3 className="project-title">{name}</h3>
        <p className="project-category">{category}</p>
        <p className="project-description">{description}</p>

        <a href="#case-study" className="case-study-link" onClick={handleClick}>
          View case study <span className="arrow-circle">→</span>
        </a>
      </div>
    </div>
  );
};