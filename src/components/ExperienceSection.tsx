
import React from 'react';
import Section from './Section';
import Card from './Card';
import { Terminal, Code, BookOpen } from 'lucide-react';

const experiences = [
  {
    title: "Built real-time applications",
    period: "2022 - Present",
    description: "Developed multiple real-time web applications with React and Node.js, implementing WebSocket connections for instant data synchronization.",
    icon: Terminal,
    color: "cyan"
  },
  {
    title: "Strengthened API handling",
    period: "2021 - 2022",
    description: "Mastered RESTful API integration and authentication mechanisms, creating secure and efficient data pipelines for various applications.",
    icon: Code,
    color: "violet"
  },
  {
    title: "School-fueled journey",
    period: "2020 - 2021",
    description: "Started my coding journey by developing solutions for school projects, quickly advancing beyond the curriculum to explore professional web development.",
    icon: BookOpen,
    color: "teal"
  }
];

const ExperienceSection = () => {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My journey in technology and development"
      className="bg-gradient-to-b from-transparent to-black/40"
    >
      <div className="space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              neonBorder={true}
              glowColor={exp.color as 'cyan' | 'violet' | 'teal'}
              pulseGlow={true}
              particles={true}
              className="h-full flex flex-col justify-between"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-3 mb-4">
                  <exp.icon className={`h-6 w-6 text-jungle-${exp.color} shrink-0`} />
                  <h3 className={`text-xl font-semibold text-jungle-${exp.color}`}>{exp.title}</h3>
                </div>
                <p className="text-white/70 mb-6 flex-grow">{exp.description}</p>
                <div className="text-sm text-white/50 self-end">{exp.period}</div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-white/60 italic max-w-2xl mx-auto">
            "Every line of code I write is a step forward in my journey to becoming a master of the digital craft."
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
