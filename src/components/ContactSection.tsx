
import React, { useState } from 'react';
import Section from './Section';
import Card from './Card';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let's build innovative projects together"
      className="bg-gradient-to-b from-black via-[#0D1B3E]/30 to-black"
    >
      <div className="max-w-2xl mx-auto">
        <Card 
          neonBorder={true} 
          glowColor="violet"
          pulseGlow={true}
          className="backdrop-blur-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white/80 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-jungle-cyan/30 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-jungle-cyan/50 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white/80 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-jungle-cyan/30 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-jungle-cyan/50 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-white/5 border border-jungle-cyan/30 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-jungle-cyan/50 transition-all duration-300 resize-none"
                placeholder="What would you like to discuss?"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-md bg-gradient-to-r from-jungle-cyan via-jungle-violet to-jungle-emerald text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] disabled:opacity-70 flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-jungle-violet via-jungle-emerald to-jungle-cyan"></span>
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-center gap-6">
            <a 
              href="mailto:adidevvsubin@gmail.com" 
              className="flex items-center gap-2 text-white/70 hover:text-jungle-cyan transition-colors duration-300"
              aria-label="Email me"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            
            <div className="flex items-center gap-2 text-white/50 cursor-not-allowed">
              <Github size={20} />
              <span>GitHub (Coming Soon)</span>
            </div>
            
            <div className="flex items-center gap-2 text-white/50 cursor-not-allowed">
              <Linkedin size={20} />
              <span>LinkedIn (Coming Soon)</span>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default ContactSection;
