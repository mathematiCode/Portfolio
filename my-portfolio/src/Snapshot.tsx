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
      <p className="snapshot-learning">{snapshot.learning}</p>
      <div className="snapshot-projects">
        {snapshot.projects.map(project => (
          <a>{project}</a>
        ))}
      </div>
      <div className="snapshot-books">
        {snapshot.books.map(book => (
          <a>{book.title}</a>
        ))}
      </div>
    </div>
  );
}

export default Snapshot;
