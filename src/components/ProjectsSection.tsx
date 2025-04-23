
import React, { useState } from 'react';
import Section from './Section';
import Card from './Card';
import { Github, ExternalLink, Lock, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  tech: string[];
  role: string;
  challenge: string;
  links: {
    demo?: string;
    github?: string;
  };
  status: 'public' | 'coming-soon' | 'private';
  color: 'cyan' | 'violet' | 'teal';
}

const projects: Project[] = [
  {
    title: "SmartCart",
    description: "AI-powered shopping cart for fast billing, using computer vision to identify products and streamline checkout.",
    tech: ["Python", "Firebase", "HTML", "CSS", "JavaScript"],
    role: "Full-stack, AI integration",
    challenge: "Optimized OCR for real-time accuracy in various lighting conditions.",
    links: {
      demo: "#"
    },
    status: 'coming-soon',
    color: 'cyan'
  },
  {
    title: "StudyMate",
    description: "CBSE student portal with comprehensive notes, interactive quizzes, and specialized exam preparation tools.",
    tech: ["Next.js", "Node.js", "MongoDB", "Express"],
    role: "UI/UX, Backend Development",
    challenge: "Built intuitive UI with scalable backend to handle thousands of educational resources.",
    links: {
      demo: "#"
    },
    status: 'coming-soon',
    color: 'violet'
  },
  {
    title: "AgentX",
    description: "Security dashboard for comprehensive threat monitoring with advanced authentication mechanisms and real-time alerts.",
    tech: ["React.js", "Firebase", "Chart.js", "Tailwind CSS"],
    role: "Lead Designer, Developer",
    challenge: "Integrated OTP, Google, and biometric authentication for enterprise-grade security.",
    links: {
      github: "#"
    },
    status: 'private',
    color: 'teal'
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const getStatusBadge = (status: string, color: string) => {
    const bgColorMap = {
      cyan: "bg-[#00C4E6]/10 border-[#00C4E6]/30 text-[#00C4E6]",
      violet: "bg-[#8B00FF]/10 border-[#8B00FF]/30 text-[#8B00FF]",
      teal: "bg-[#00B7A8]/10 border-[#00B7A8]/30 text-[#00B7A8]"
    };
    
    const bgColor = bgColorMap[color as keyof typeof bgColorMap];
    
    return (
      <span className={`px-2 py-1 text-xs rounded-full border ${bgColor} flex items-center gap-1`}>
        {status === 'private' ? <Lock size={10} /> : status === 'coming-soon' ? <Eye size={10} /> : null}
        {status === 'private' ? 'Private' : status === 'coming-soon' ? 'Coming Soon' : 'Public'}
      </span>
    );
  };

  return (
    <Section
      id="projects"
      title="Digital Creations"
      subtitle="Featured projects showcasing my skills and innovation"
      className="bg-gradient-to-b from-black via-[#0D1B3E]/30 to-black"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div>
                <Card 
                  className="h-full flex flex-col cursor-pointer transform perspective-1000 transition-all duration-500"
                  glowColor={project.color}
                  tilt={true}
                  hoverEffect={true}
                  pulseGlow={true}
                  particles={true}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold font-orbitron tracking-wide bg-gradient-to-r from-[#00C4E6] via-[#8B00FF] to-[#00B7A8] bg-clip-text text-transparent">{project.title}</h3>
                      {getStatusBadge(project.status, project.color)}
                    </div>
                    
                    <p className="text-white/70 mb-4 flex-grow">{project.description.substring(0, 100)}...</p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-black/60 border border-white/10 text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-black/60 border border-white/10 text-white/80">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                      <span className="text-sm text-white/50">{project.role}</span>
                      <div className="flex gap-2">
                        {project.links.github && (
                          <button 
                            className="text-white/70 hover:text-[#00C4E6] transition-colors p-1"
                          >
                            <Github size={18} />
                          </button>
                        )}
                        
                        {project.links.demo && (
                          <button 
                            className="text-white/70 hover:text-[#8B00FF] transition-colors p-1"
                          >
                            <ExternalLink size={18} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-black/80 backdrop-blur-xl border border-white/10 text-white p-0 max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader className="p-6 border-b border-white/10 bg-gradient-to-r from-black to-[#0D1B3E]/50">
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-2xl font-orbitron tracking-wide bg-gradient-to-r from-[#00C4E6] via-[#8B00FF] to-[#00B7A8] bg-clip-text text-transparent">{project.title}</DialogTitle>
                  {getStatusBadge(project.status, project.color)}
                </div>
                <DialogDescription className="text-white/70 mt-2">
                  {project.description}
                </DialogDescription>
              </DialogHeader>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm uppercase text-white/50 mb-2">Role</h4>
                    <p className="text-white/90">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase text-white/50 mb-2">Challenge</h4>
                    <p className="text-white/90">{project.challenge}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm uppercase text-white/50 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-sm px-3 py-1 rounded-full bg-black/60 border border-white/10 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6 pt-6 border-t border-white/10">
                  {project.links.github && (
                    <a 
                      href={project.status === 'private' ? undefined : project.links.github}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md border-2 border-[#00C4E6] text-white transition-all duration-300 ${
                        project.status === 'private' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#00C4E6]/20 hover:shadow-[0_0_15px_rgba(0,196,230,0.5)]'
                      }`}
                      onClick={(e) => project.status === 'private' && e.preventDefault()}
                    >
                      <Github size={18} />
                      <span>{project.status === 'private' ? 'Private Repository' : 'View Code'}</span>
                    </a>
                  )}
                  
                  {project.links.demo && (
                    <a 
                      href={project.status === 'coming-soon' ? undefined : project.links.demo}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md border-2 border-[#8B00FF] text-white transition-all duration-300 ${
                        project.status === 'coming-soon' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#8B00FF]/20 hover:shadow-[0_0_15px_rgba(139,0,255,0.5)]'
                      }`}
                      onClick={(e) => project.status === 'coming-soon' && e.preventDefault()}
                    >
                      <ExternalLink size={18} />
                      <span>{project.status === 'coming-soon' ? 'Coming Soon' : 'Live Demo'}</span>
                    </a>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
