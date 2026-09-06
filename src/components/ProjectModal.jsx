import { useEffect } from 'react';
import './ProjectModal.css';

export const ProjectModal = ({ project, onClose }) => {
  // Close modal when pressing the Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-number">{project.id}</span>
            <h3 className="modal-name">{project.name}</h3>
            <span className="modal-divider">—</span>
            <span className="modal-category">{project.category}</span>
          </div>

          <div className="modal-header-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-github-btn"
              >
                <span>GitHub</span> ↗
              </a>
            )}

            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              ✕
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="modal-body">
          {/* Mockup Preview Area */}
          <div className="modal-preview">
            {project.previewImg ? (
              <img src={project.previewImg} alt={project.name} className="modal-img" />
            ) : (
              <div className="modal-placeholder">
                <div className="placeholder-sidebar">
                  <span className="active-dot"></span>
                </div>
                <div className="placeholder-content">
                  <span className="placeholder-label">DASHBOARD</span>
                  <div className="placeholder-cards">
                    <div className="card-stat purple">12 <span>Active</span></div>
                    <div className="card-stat green">28 <span>Done</span></div>
                    <div className="card-stat yellow">5 <span>Today</span></div>
                  </div>
                  <div className="placeholder-rows">
                    <div className="row">Update hero section</div>
                    <div className="row">Review client feedback</div>
                    <div className="row">Fix mobile layout</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tech Badges */}
          <div className="modal-tech-list">
            {project.tech?.map((item, index) => (
              <span key={index} className="tech-badge">{item}</span>
            ))}
          </div>

          {/* Overview Section */}
          {project.overview && (
            <div className="modal-section">
              <span className="modal-label">OVERVIEW</span>
              <p>{project.overview}</p>
            </div>
          )}

          {/* Challenge Section */}
          {project.challenge && (
            <div className="modal-section">
              <span className="modal-label">CHALLENGE</span>
              <p>{project.challenge}</p>
            </div>
          )}

          {/* Approach Section */}
          {project.approach && (
            <div className="modal-section">
              <span className="modal-label">APPROACH</span>
              <p>{project.approach}</p>
            </div>
          )}

          {/* Outcome Section */}
          {project.outcome && (
            <div className="modal-section">
              <span className="modal-label">OUTCOME</span>
              <p>{project.outcome}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};