import Project from './Project.tsx';
import projects from '../projects.json' assert { type: 'json' };
import { Cloudinary } from '@cloudinary/url-gen';

function ProjectsPage({}) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo',
    },
  });
  return (
    <div className="projects">
      {projects.map(project => {
        return (
          <Project
            key={project.id}
            title={project.name}
            stack={project.stack}
            image={project.image}
            deployed={project.link}
            github={project.link}
          ></Project>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
