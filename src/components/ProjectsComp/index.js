import React from "react";
import projects  from "../../data/projects.js"

class ProjectsComponent extends React.Component {
    render() {
        return (
            <div>
                {projects.map((project) => {
                    return(
                    <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.deployedProject}>Deployed Project</a> ||
                        <a href={project.githubLink}> View Source Code</a>
                    </div>
                    )
                })}
            </div>
        )
    }
}
export default ProjectsComponent;