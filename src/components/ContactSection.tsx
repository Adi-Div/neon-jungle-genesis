
import React, { useState } from 'react';
import Section from './Section';
import Card from './Card';
import { useToast } from '@/hooks/use-toast';

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
      subtitle="Let's collaborate on something amazing"
    >
      <div className="max-w-2xl mx-auto">
        <Card neonBorder={true} className="backdrop-blur-2xl">
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
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-jungle-cyan/50"
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
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-jungle-cyan/50"
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
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-jungle-cyan/50 resize-none"
                placeholder="What would you like to discuss?"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-md bg-gradient-to-r from-jungle-cyan via-jungle-violet to-jungle-emerald text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default ContactSection;
