import './App.css';
import Navbar from './Navbar';
import Project from './Project';
import projects from '../projects.json';

function App() {
  return (
    <>
      <Navbar />
      <body>
        <div className="center">
          <div className="title">
            <h1>Julianna Messineo</h1>
            <span className="subtitle">Product Minded Developer</span>
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
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
