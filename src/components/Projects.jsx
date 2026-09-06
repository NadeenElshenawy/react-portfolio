
import './Projects.css'
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { useState } from 'react';
import { projectsData } from "../data/projectsData";
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section className="projects-section" id="work">
      <div className="projects-header">
        <div>
          <span className="section-label">WORK</span>
          <h2 className="section-title">Featured projects.</h2>
        </div>
        <p className="section-subtitle">
          Real interfaces built with real code. Click any project for the full story.
        </p>
      </div>

      <div className="projects-list">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            category={project.category}
            description={project.description}
            tech={project.tech}
            project={project}
            previewImg={project.previewImg}
            onProjectClick={setSelectedProject}
          />
        ))}
       
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};