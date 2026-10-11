import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

function ProjectCard({project}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsFlipped(current => !current);
    }
  }

  return (
    <div
      className={`project-card${isFlipped ? " project-card-flipped" : ""}`}
      role="button"
      tabIndex={0}
      aria-label={`${project.projectName}: flip to view project details`}
      aria-pressed={isFlipped}
      onClick={() => setIsFlipped(current => !current)}
      onKeyDown={handleKeyDown}
    >
      <div className="project-card-inner">
        <div className="project-card-face project-card-front" aria-hidden={isFlipped}>
          <div className="project-image">
            <img
              src={project.image}
              alt={`${project.projectName} logo`}
              className="project-logo"
            />
          </div>
          <div className="project-front-detail">
            <h2 className="project-card-title">{project.projectName}</h2>
            <p className="project-value">{project.projectValue}</p>
            <span className="project-flip-hint">View details <span aria-hidden="true">↗</span></span>
          </div>
        </div>

        <div className="project-card-face project-card-back" aria-hidden={!isFlipped}>
          <h2 className="project-card-title">{project.projectName}</h2>
          <p className="project-description">{project.projectDesc}</p>
          <div className="project-tech-list" aria-label={`${project.projectName} technologies`}>
            {project.technologies.slice(0, 4).map((technology, index) => (
              <span className="project-tech" key={index}>{technology}</span>
            ))}
          </div>
          <span className="project-flip-hint">Back to project <span aria-hidden="true">↻</span></span>
        </div>
      </div>
    </div>
  );
}

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);

  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => (
              <ProjectCard project={project} key={i} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
