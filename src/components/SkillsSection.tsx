
import React, { useState } from 'react';
import Section from './Section';
import Card from './Card';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  Code, 
  LayoutGrid, 
  Wrench, 
  PenTool
} from 'lucide-react';

interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'concept';
  level: number;
  color: string;
}

const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'language', level: 5, color: 'jungle-cyan' },
  { name: 'JavaScript', category: 'language', level: 5, color: 'jungle-violet' },
  { name: 'TypeScript', category: 'language', level: 4, color: 'jungle-cyan' },
  { name: 'HTML/CSS', category: 'language', level: 5, color: 'jungle-emerald' },
  { name: 'Java', category: 'language', level: 4, color: 'jungle-violet' },
  { name: 'C/C++', category: 'language', level: 3, color: 'jungle-cyan' },
  
  // Frameworks
  { name: 'React', category: 'framework', level: 5, color: 'jungle-cyan' },
  { name: 'Node.js', category: 'framework', level: 4, color: 'jungle-emerald' },
  { name: 'Express', category: 'framework', level: 4, color: 'jungle-violet' },
  { name: 'Django', category: 'framework', level: 3, color: 'jungle-emerald' },
  { name: 'Angular', category: 'framework', level: 3, color: 'jungle-cyan' },
  { name: 'Flask', category: 'framework', level: 3, color: 'jungle-violet' },
  
  // Tools
  { name: 'Git', category: 'tool', level: 4, color: 'jungle-violet' },
  { name: 'Docker', category: 'tool', level: 3, color: 'jungle-cyan' },
  { name: 'Firebase', category: 'tool', level: 4, color: 'jungle-emerald' },
  { name: 'MongoDB', category: 'tool', level: 4, color: 'jungle-emerald' },
  { name: 'Figma', category: 'tool', level: 4, color: 'jungle-cyan' },
  { name: 'VS Code', category: 'tool', level: 5, color: 'jungle-violet' },
  
  // Concepts
  { name: 'Cyber Security', category: 'concept', level: 4, color: 'jungle-emerald' },
  { name: 'Networking', category: 'concept', level: 3, color: 'jungle-violet' },
  { name: 'API Design', category: 'concept', level: 4, color: 'jungle-cyan' },
  { name: 'UI/UX', category: 'concept', level: 5, color: 'jungle-emerald' },
  { name: 'Agile', category: 'concept', level: 3, color: 'jungle-violet' },
  { name: 'JWT', category: 'concept', level: 4, color: 'jungle-cyan' }
];

const getCategoryIcon = (category: string) => {
  switch(category) {
    case 'language':
      return <Code className="h-6 w-6 text-jungle-cyan" />;
    case 'framework':
      return <LayoutGrid className="h-6 w-6 text-jungle-violet" />;
    case 'tool':
      return <Wrench className="h-6 w-6 text-jungle-emerald" />;
    case 'concept':
      return <PenTool className="h-6 w-6 text-jungle-cyan" />;
    default:
      return null;
  }
};

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const categories = ['language', 'framework', 'tool', 'concept'] as const;

  return (
    <Section
      id="skills"
      title="Technical Arsenal"
      subtitle="Technologies and concepts I've mastered"
      className="bg-gradient-radial from-[#0D1B3E]/30 to-black"
    >
      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            <div className="flex items-center space-x-3">
              {getCategoryIcon(category)}
              <h3 className="text-2xl font-bold capitalize bg-gradient-to-r from-[#00C4E6] via-[#8B00FF] to-[#00B7A8] bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                {category}s
              </h3>
            </div>
            
            <Card 
              glowColor={category === 'language' || category === 'concept' ? 'cyan' : category === 'framework' ? 'violet' : 'teal'}
              className="p-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div 
                      key={index}
                      className="relative transform transition-all duration-500 backdrop-blur-xl bg-black/40 border border-white/5 hover:border-white/20 p-4 rounded-lg hover:shadow-lg"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className={`text-lg font-semibold text-${skill.color}`}>
                          {skill.name}
                        </h4>
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "bg-black/60 backdrop-blur-sm",
                            skill.color === 'jungle-cyan' && "border-[#00C4E6]/30 text-[#00C4E6]",
                            skill.color === 'jungle-violet' && "border-[#8B00FF]/30 text-[#8B00FF]",
                            skill.color === 'jungle-emerald' && "border-[#00B7A8]/30 text-[#00B7A8]"
                          )}
                        >
                          Level {skill.level}
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level * 20} 
                        className={cn(
                          "h-2 rounded-full bg-white/5",
                          skill.color === 'jungle-cyan' && "[&>div]:bg-[#00C4E6]",
                          skill.color === 'jungle-violet' && "[&>div]:bg-[#8B00FF]",
                          skill.color === 'jungle-emerald' && "[&>div]:bg-[#00B7A8]"
                        )}
                      />
                      
                      {/* Particle Effect on Hover */}
                      {hoveredSkill === skill.name && (
                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                          {[...Array(15)].map((_, i) => (
                            <div 
                              key={i}
                              className="absolute w-1 h-1 rounded-full animate-particle"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                backgroundColor: skill.color === 'jungle-cyan' 
                                  ? '#00C4E6' 
                                  : skill.color === 'jungle-violet' 
                                    ? '#8B00FF' 
                                    : '#00B7A8',
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${1 + Math.random() * 2}s`,
                                opacity: 0.7
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
