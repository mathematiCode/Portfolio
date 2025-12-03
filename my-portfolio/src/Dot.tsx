import * as Popover from '@radix-ui/react-popover';
import Project from './Project';
import projects from '../projects.json';

interface Book {
  title: string;
  author: string;
}

interface Snapshot {
  startDate: string;
  endDate: string;
  learning: string;
  projects: string[];
  books: Book[];
  questions: string[];
  point: { x: number; y: number };
}

function Dot({ snapshot }: { x: number; y: number; snapshot: Snapshot }) {
  const { x, y } = snapshot.point;
  const project = projects[0];

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <g>
          <circle cx={x} cy={y} r="0.3" className="dot" />
        </g>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="top" sideOffset={5}>
          <Project
            key={project.id}
            title={project.name}
            stack={project.stack}
            image={project.image}
            deployed={project.link}
            github={project.link}
          ></Project>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default Dot;
