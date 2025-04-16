import React from 'react';

// Example Project Card Component (can be extracted later if needed)
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline font-medium"
      >
        View Project →
      </a>
    </div>
  );
};

const Projects: React.FC = () => {
  // Placeholder project data - replace with your actual projects
  const projectData = [
    {
      title: "Project Title 1",
      description: "Short description of the first cool thing you worked on.",
      link: "#",
    },
    {
      title: "Project Title 2",
      description: "Another highlight, maybe a link to a GitHub repo or live demo.",
      link: "#",
    },
    {
      title: "Project Title 3",
      description: "A third example showcasing a different skill or area of interest.",
      link: "#",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50"> {/* Light background to differentiate */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Projects & Highlights</h2>
        {/* Grid layout for project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 