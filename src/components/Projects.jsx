import "./Projects.css";

import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { ScrollReveal } from "./ScrollReveal";

import { useState } from "react";
import { projectsData } from "../data/projectsData";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="work">

      {/* Section Header */}
      <ScrollReveal delay={0.1}>
        <div className="projects-header">
          <div>
            <span className="section-label">WORK</span>
            <h2 className="section-title">
              Featured projects.
            </h2>
          </div>

          <p className="section-subtitle">
            Real interfaces built with real code. Click any project
            for the full story.
          </p>
        </div>
      </ScrollReveal>

      {/* Projects */}
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <ScrollReveal
            key={project.id}
            delay={0.2 + index * 0.12}
          >
            <ProjectCard
              id={project.id}
              name={project.name}
              category={project.category}
              description={project.description}
              tech={project.tech}
              project={project}
              previewImg={project.previewImg}
              onProjectClick={setSelectedProject}
            />
          </ScrollReveal>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
};