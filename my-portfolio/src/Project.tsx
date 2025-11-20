interface ProjectProps {
  title: string;
  stack: string[];
  image?: string;
  deployed: string;
  github: string;
}

export default function Project({
  title,
  stack,
  image,
  deployed,
  github,
}: ProjectProps) {
  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <div className="stack-tags">
        {stack.map((item: string) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
      {/* {image && (
        <CloudinaryImg className="project-image" cldImg={cld.image(image)} />
      )} */}
      <img className="project-image" src={image} />
      <div className="links">
        <a href={deployed}>See in Action</a>
        <a href={github}>See on Github</a>
      </div>
    </div>
  );
}
