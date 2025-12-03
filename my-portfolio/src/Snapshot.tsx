import type { SnapshotType } from './types';

// startDate: string;
//   endDate: string;
//   learning: string;
//   projects: string[];
//   books: Book[];
//   questions: string[];
//   point: { x: number; y: number };

function Snapshot({ snapshot }: { snapshot: SnapshotType }) {
  return (
    <div className="snapshot-card">
      <span>{snapshot.timeframe}</span>
      <h2>Learning Focus</h2>
      <p className="snapshot-learning">{snapshot.learning}</p>
      <h2>Projects</h2>
      <div className="snapshot-projects">
        {snapshot.projects.map(project => (
          <a>{project}</a>
        ))}
      </div>
      <h2>Reading</h2>
      <div className="snapshot-books">
        {snapshot.books.map(book => (
          <a>
            {book.title} by {book.author}
          </a>
        ))}
      </div>
      <h2>Wonderings</h2>
      <ul>
        {snapshot.questions.map(question => (
          <li>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default Snapshot;
