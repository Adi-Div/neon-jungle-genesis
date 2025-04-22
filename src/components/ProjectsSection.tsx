
import React from 'react';
import Section from './Section';
import Card from './Card';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    title: "Real-Time Chat App",
    description: "A modern chat application with instant messaging, user authentication, and channel management. Built with WebSockets for real-time communication.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "StudyMate",
    description: "A collaborative study platform for students to share notes, create study groups, and organize study sessions. Features include calendar integration and flash cards.",
    tech: ["React", "Express", "MongoDB", "Redux"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "AgentX",
    description: "A cybersecurity monitoring tool that detects unusual activities and potential threats in a network. Features real-time alerts and detailed logs.",
    tech: ["Python", "Django", "PostgreSQL", "TensorFlow"],
    links: {
      github: "#"
    }
  }
];

const ProjectsSection = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Featured work showcasing my skills and creativity"
      className="bg-gradient-to-b from-black/40 to-transparent"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index}
            neonBorder={true}
            className="h-full flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-3 neon-text">{project.title}</h3>
            
            <p className="text-white/70 mb-4 flex-grow">{project.description}</p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  className="text-white/70 hover:text-jungle-cyan transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              )}
              
              {project.links.demo && (
                <a 
                  href={project.links.demo} 
                  className="text-white/70 hover:text-jungle-violet transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
