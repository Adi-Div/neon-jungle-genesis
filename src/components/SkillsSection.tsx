import React from 'react';
import Section from './Section';
import Card from './Card';
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'concept';
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Python', category: 'language', level: 5, color: 'jungle-cyan' },
  { name: 'JavaScript', category: 'language', level: 5, color: 'jungle-violet' },
  { name: 'TypeScript', category: 'language', level: 4, color: 'jungle-cyan' },
  { name: 'HTML/CSS', category: 'language', level: 5, color: 'jungle-emerald' },
  { name: 'React', category: 'framework', level: 5, color: 'jungle-cyan' },
  { name: 'Node.js', category: 'framework', level: 4, color: 'jungle-emerald' },
  { name: 'Express', category: 'framework', level: 4, color: 'jungle-violet' },
  { name: 'Django', category: 'framework', level: 3, color: 'jungle-emerald' },
  { name: 'MongoDB', category: 'tool', level: 4, color: 'jungle-emerald' },
  { name: 'SQL', category: 'language', level: 3, color: 'jungle-cyan' },
  { name: 'Git', category: 'tool', level: 4, color: 'jungle-violet' },
  { name: 'Docker', category: 'tool', level: 3, color: 'jungle-cyan' },
  { name: 'Cyber Security', category: 'concept', level: 4, color: 'jungle-emerald' },
  { name: 'Networking', category: 'concept', level: 3, color: 'jungle-violet' },
  { name: 'API Design', category: 'concept', level: 4, color: 'jungle-cyan' },
];

const SkillsSection = () => {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and concepts I've mastered"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <Card 
            key={index}
            className={`text-center transform transition-all duration-500 hover:shadow-[0_0_20px_var(--shadow-color)] backdrop-blur-lg bg-black/40`}
            style={{ '--shadow-color': `var(--${skill.color})` } as React.CSSProperties}
            neonBorder={false}
          >
            <h3 className={`text-lg font-semibold mb-4 text-${skill.color}`}>
              {skill.name}
            </h3>
            
            <Progress 
              value={skill.level * 20} 
              className="h-1.5 bg-white/10"
            />
            
            <div className="mt-3 text-xs text-white/50 uppercase">
              {skill.category}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
