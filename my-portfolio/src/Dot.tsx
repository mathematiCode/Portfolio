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
  return <circle cx={x} cy={y} r="0.3" className="dot" />;
}

export default Dot;
