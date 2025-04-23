
import React from 'react';
import Section from './Section';
import Card from './Card';
import { Shield, Lock, Code } from 'lucide-react';

const StartupSection = () => {
  return (
    <Section
      id="startup"
      title="Red Viper"
      subtitle="Building cyber-defense solutions with nature-inspired security"
      className="bg-gradient-to-b from-transparent to-[#0D1B3E]/40"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-white/80">
            Red Viper is my vision for the future of cybersecurity. Inspired by nature's defensive mechanisms, I'm developing a suite of security solutions that adapt and evolve to protect digital ecosystems from emerging threats.
          </p>
          
          <Card 
            className="bg-jungle-emerald/10 border border-jungle-emerald/30"
            glowColor="teal"
            neonBorder={false}
          >
            <h3 className="text-xl font-semibold mb-4 text-jungle-emerald">Our Mission</h3>
            <p className="text-white/80">
              "To create intelligent, adaptive cybersecurity solutions that learn and evolve like living organisms, providing robust protection against the ever-changing landscape of digital threats."
            </p>
          </Card>
          
          <p className="text-white/70 italic">
            Currently in early development, Red Viper will combine machine learning with bio-inspired algorithms to create a new generation of security tools, targeting the expanding cybersecurity needs in Kerala and beyond.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card 
            className="flex items-start gap-4"
            glowColor="cyan"
            pulseGlow={true}
          >
            <Shield className="h-8 w-8 text-jungle-cyan shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Adaptive Defense</h3>
              <p className="text-white/70">Security systems that learn from attacks and strengthen themselves, inspired by how immune systems evolve and adapt to new threats.</p>
            </div>
          </Card>
          
          <Card 
            className="flex items-start gap-4"
            glowColor="violet"
            pulseGlow={true}
          >
            <Lock className="h-8 w-8 text-jungle-violet shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Encrypted Mesh</h3>
              <p className="text-white/70">Decentralized security architecture modeled after mycelium networks found in Kerala's jungles, creating resilient communication channels.</p>
            </div>
          </Card>
          
          <Card 
            className="flex items-start gap-4"
            glowColor="teal"
            pulseGlow={true}
          >
            <Code className="h-8 w-8 text-jungle-emerald shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Bio-Digital Integration</h3>
              <p className="text-white/70">Algorithms inspired by natural selection to identify vulnerabilities and patch them before exploitation, mirroring the adaptability of Kerala's ecosystems.</p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default StartupSection;
