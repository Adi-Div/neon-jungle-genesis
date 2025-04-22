
import React from 'react';
import Section from './Section';
import { Card } from './ui/card';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
  { name: 'Git', category: 'tool', level: 4, color: 'jungle-violet' },
  { name: 'Docker', category: 'tool', level: 3, color: 'jungle-cyan' },
  { name: 'Cyber Security', category: 'concept', level: 4, color: 'jungle-emerald' },
  { name: 'Networking', category: 'concept', level: 3, color: 'jungle-violet' },
  { name: 'API Design', category: 'concept', level: 4, color: 'jungle-cyan' }
];

const SkillsSection = () => {
  const categories = ['language', 'framework', 'tool', 'concept'] as const;

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and concepts I've mastered"
    >
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-2xl font-bold capitalize neon-text">
              {category}s
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <Card 
                    key={index}
                    className={cn(
                      "relative overflow-hidden backdrop-blur-lg bg-black/40",
                      "transform transition-all duration-500",
                      "hover:shadow-[0_0_30px_var(--shadow-color)]",
                      "before:absolute before:inset-0",
                      "before:bg-gradient-to-br before:from-white/10 before:to-transparent",
                      "before:opacity-0 hover:before:opacity-100",
                      "before:transition-opacity before:duration-500"
                    )}
                    style={{ '--shadow-color': `var(--${skill.color})` } as React.CSSProperties}
                  >
                    <div className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className={`text-lg font-semibold text-${skill.color}`}>
                          {skill.name}
                        </h4>
                        <Badge 
                          variant="outline" 
                          className={`bg-${skill.color}/10 text-${skill.color} border-${skill.color}/30`}
                        >
                          Level {skill.level}
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level * 20} 
                        className={cn(
                          "h-2 rounded-full bg-white/5",
                          `[&>div]:bg-${skill.color}`
                        )}
                      />
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
