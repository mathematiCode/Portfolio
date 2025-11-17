import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import type { CloudinaryImage } from '@cloudinary/url-gen';
import type { ComponentType } from 'react';

// Type assertion to work around React 19 compatibility issue
const CloudinaryImg = AdvancedImage as unknown as ComponentType<{
  cldImg: CloudinaryImage;
}>;

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
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvxciuy3e',
    },
  });
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
