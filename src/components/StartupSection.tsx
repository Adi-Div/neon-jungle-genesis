
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
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-white/80">
            Red Viper is my vision for the future of cybersecurity. Inspired by nature's defensive mechanisms, I'm developing a suite of security solutions that adapt and evolve to protect digital ecosystems from emerging threats.
          </p>
          
          <div className="bg-jungle-emerald/10 border border-jungle-emerald/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-jungle-emerald">Our Mission</h3>
            <p className="text-white/80">
              "To create intelligent, adaptive cybersecurity solutions that learn and evolve like living organisms, providing robust protection against the ever-changing landscape of digital threats."
            </p>
          </div>
          
          <p className="text-white/70 italic">
            Currently in early development, Red Viper will combine machine learning with bio-inspired algorithms to create a new generation of security tools.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-jungle-cyan shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Adaptive Defense</h3>
              <p className="text-white/70">Security systems that learn from attacks and strengthen themselves, inspired by how immune systems evolve.</p>
            </div>
          </Card>
          
          <Card className="flex items-start gap-4">
            <Lock className="h-8 w-8 text-jungle-violet shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Encrypted Mesh</h3>
              <p className="text-white/70">Decentralized security architecture modeled after mycelium networks, creating resilient communication channels.</p>
            </div>
          </Card>
          
          <Card className="flex items-start gap-4">
            <Code className="h-8 w-8 text-jungle-emerald shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Bio-Digital Integration</h3>
              <p className="text-white/70">Algorithms inspired by natural selection to identify vulnerabilities and patch them before exploitation.</p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default StartupSection;
