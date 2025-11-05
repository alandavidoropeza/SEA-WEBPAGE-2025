import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const About = () => {
    const { toast } = useToast();

    const handleUnsupportedFeature = () => {
      toast({
        title: "🚧 Working on it!",
        description: "¡Contact us by Whatsapp! ",
        className: "bg-white"
      });
    };

    return (
        <section id="about-us" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="section-reveal">
                <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                  About us
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                We are a dedicated group of maritime professionals specializing in preventive and corrective maintenance for a wide range of auxiliary equipment on yachts and large vessels. 
                </p>
                <p className="text-lg text-gray-600 mb-8">
                Each member of our team holds certifications under the STCW agreement, backed by extensive training and years of hands-on experience in the field. Our commitment to excellence ensures that every project is handled with the highest standards of expertise and care.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--navy-blue)] mb-2">15+</div>
                    <p className="text-sm text-gray-600">Experience Years</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--navy-blue)] mb-2">200+</div>
                    <p className="text-sm text-gray-600">Completed Projects</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--navy-blue)] mb-2">24/7</div>
                    <p className="text-sm text-gray-600">Technical support</p>
                  </div>
                </div>

                <Button onClick={handleUnsupportedFeature} className="btn-primary text-white px-8 py-3 rounded-full">
                  More
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="section-reveal">
                <div className="relative">
                  <img 
                    alt="Equipo de ingenieros especializados trabajando en sistemas de megayate"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl" src="/foraboutus.jpg" />
                  <div className="absolute -bottom-6 -right-6 bg-[var(--gold-accent)] p-6 rounded-2xl floating-animation">
                    <Star className="w-8 h-8 text-[var(--navy-blue)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default About;