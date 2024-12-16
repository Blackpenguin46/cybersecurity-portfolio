type ProjectProps = {
    title: string;
    description: string;
    link: string;
  };
  
  const ProjectCard = ({ title, description, link }: ProjectProps) => {
    return (
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    );
  };
  
  export default ProjectCard;
  