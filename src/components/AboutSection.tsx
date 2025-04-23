
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
            At just 15 years old, I'm a Class 10 student from Kerala, fueled by innovation. My tech journey began early, mastering code, UI/UX, and full-stack development to solve real-world challenges.
          </p>
          
          <p className="text-lg text-white/80">
            I love building seamless web/app experiences, exploring AI, and designing intuitive interfaces. As a full-stack developer and cybersecurity enthusiast, I'm constantly learning and experimenting with new technologies.
          </p>
          
          <p className="text-lg text-white/80">
            Kerala's jungles inspire my designs, blending nature's elegant patterns with technological precision. This unique perspective helps me create solutions that are both functional and aesthetically pleasing.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card 
            className="flex items-start gap-4"
            glowColor="cyan"
            pulseGlow={true}
          >
            <UserCircle className="h-8 w-8 text-jungle-cyan shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Developer</h3>
              <p className="text-white/70">Creating seamless experiences from front-end to back-end, with a focus on responsive design and user experience.</p>
            </div>
          </Card>
          
          <Card 
            className="flex items-start gap-4"
            glowColor="violet"
            pulseGlow={true}
          >
            <Code className="h-8 w-8 text-jungle-violet shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-white/70">Approaching challenges with creative solutions, whether it's optimizing code efficiency or finding innovative features.</p>
            </div>
          </Card>
          
          <Card 
            className="flex items-start gap-4"
            glowColor="teal"
            pulseGlow={true}
          >
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
