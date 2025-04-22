
import React from 'react';
import Section from './Section';
import Card from './Card';
import { UserCircle, Code, CircuitBoard } from 'lucide-react';

const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="I'm Adidev, a nature-driven coder from Kerala"
    >
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="text-lg text-white/80">
            At just 15 years old, I've already embarked on an exciting journey through the digital landscape. My passion lies at the intersection of technology and nature, where I find inspiration for creating innovative solutions to complex problems.
          </p>
          
          <p className="text-lg text-white/80">
            As a full-stack developer and cybersecurity enthusiast, I'm constantly learning and experimenting with new technologies. My goal is to build digital experiences that are not only functional but also secure and aesthetically pleasing.
          </p>
          
          <p className="text-lg text-white/80">
            When I'm not coding, you can find me exploring the lush landscapes of Kerala, drawing inspiration from nature's intricate patterns and systems that often find their way into my technical designs.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card className="flex items-start gap-4">
            <UserCircle className="h-8 w-8 text-jungle-cyan shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Developer</h3>
              <p className="text-white/70">Creating seamless experiences from front-end to back-end, with a focus on responsive design and user experience.</p>
            </div>
          </Card>
          
          <Card className="flex items-start gap-4">
            <Code className="h-8 w-8 text-jungle-violet shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-white/70">Approaching challenges with creative solutions, whether it's optimizing code efficiency or finding innovative features.</p>
            </div>
          </Card>
          
          <Card className="flex items-start gap-4">
            <CircuitBoard className="h-8 w-8 text-jungle-emerald shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Cyber-Security Specialist</h3>
              <p className="text-white/70">Protecting digital assets through advanced security measures and staying ahead of potential vulnerabilities.</p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
