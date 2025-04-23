
import React from 'react';
import Section from './Section';
import Card from './Card';
import { Terminal, Code, BookOpen } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

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
      className="bg-gradient-to-b from-transparent to-black/40 relative min-h-screen"
    >
      {/* Animated nature background overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Misty jungle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-jungle-cyan/10 via-jungle-violet/5 to-jungle-emerald/10 opacity-30"></div>
        
        {/* Animated vines */}
        <div className="absolute h-full w-full">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-[3px] h-[30vh] bg-gradient-to-b from-jungle-emerald via-jungle-cyan to-transparent animate-grow-vine"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 70}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.3 + Math.random() * 0.3,
                transform: `rotate(${Math.random() * 60 - 30}deg)`
              }}
            />
          ))}
        </div>
        
        {/* Firefly particles */}
        {[...Array(100)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full animate-floating"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              backgroundColor: i % 3 === 0 
                ? '#00C4E6' // cyan
                : i % 3 === 1 
                  ? '#8B00FF' // violet
                  : '#00B7A8', // teal
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 7}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      <div className="space-y-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div className="transition-transform duration-300 hover:scale-[1.02] h-full">
                  <Card 
                    key={index} 
                    neonBorder={true}
                    glowColor={exp.color as 'cyan' | 'violet' | 'teal'}
                    pulseGlow={true}
                    particles={true}
                    tilt={true}
                    className="h-full flex flex-col justify-between p-8 md:p-8"
                  >
                    <div className="flex flex-col h-full relative overflow-hidden backdrop-blur-xl">
                      {/* Holographic overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-jungle-cyan/10 via-jungle-violet/10 to-jungle-emerald/10 opacity-30 holographic-overlay pointer-events-none"></div>
                      
                      {/* Experience content */}
                      <div className="flex items-start gap-3 mb-6">
                        <div className={`p-2 rounded-full bg-jungle-${exp.color}/10 backdrop-blur-lg border border-jungle-${exp.color}/30`}>
                          <exp.icon className={`h-6 w-6 text-jungle-${exp.color} shrink-0`} />
                        </div>
                        <h3 className={`text-xl font-semibold text-jungle-${exp.color}`}>{exp.title}</h3>
                      </div>
                      
                      <p className="text-white/80 mb-8 flex-grow">{exp.description}</p>
                      
                      <div className={`text-sm text-white/60 self-end px-3 py-1 rounded-full bg-jungle-${exp.color}/10 border border-jungle-${exp.color}/20`}>
                        {exp.period}
                      </div>
                      
                      {/* Animated vine border */}
                      <div className={`absolute left-0 top-0 w-[3px] h-0 bg-gradient-to-b from-jungle-${exp.color} to-transparent animate-grow-vine`}></div>
                      <div className={`absolute right-0 bottom-0 w-[3px] h-0 bg-gradient-to-t from-jungle-${exp.color} to-transparent animate-grow-vine`} style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </Card>
                </div>
              </HoverCardTrigger>
              <HoverCardContent 
                className="w-80 backdrop-blur-lg bg-black/70 border border-jungle-cyan/30 p-4 shadow-lg shadow-jungle-cyan/20"
                align="center"
              >
                <div className="flex flex-col gap-2">
                  <h4 className={`text-lg font-semibold text-jungle-${exp.color}`}>{exp.title}</h4>
                  <p className="text-white/70 text-sm">{exp.description}</p>
                  <div className="text-xs text-white/50 pt-2 border-t border-white/10">
                    Tip: Click to view more details
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-jungle-cyan via-jungle-violet to-jungle-emerald opacity-30"></div>
          <div className="text-center relative">
            <p className="text-white/70 italic max-w-2xl mx-auto bg-black/60 backdrop-blur-md px-8 py-4 rounded-lg border border-white/10 shadow-lg">
              "Every line of code I write is a step forward in my journey to becoming a master of the digital craft."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
