import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const Portfolio = () => {
    const { toast } = useToast();

    const handleUnsupportedFeature = () => {
      toast({
        title: "🚧 Working on it!",
        description: "¡Contact us by Whatsapp! ",
        className: "bg-white"
      });
    };

    return (
        <section id="gallery" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 section-reveal">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Outstanding projects that demonstrate our experience and quality in naval engineering
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
                  onClick={handleUnsupportedFeature}
                >
                  <img  alt="Gangway" className="w-full h-auto object-cover" src="/gallery/gallery14.jpg" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--navy-blue)]">
                      Gangway
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Complete modernization of the hydraulic system and electrical wiring.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
                  onClick={handleUnsupportedFeature}
                >
                  <img  alt="Crane Services" className="w-full h-auto object-cover" src="/gallery/gallery15.jpg" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--navy-blue)]">
                      Crane Services
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Installation of new cable and loading test.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
                  onClick={handleUnsupportedFeature}
                >
                  <img  alt="Hydraulics Troubleshooting" className="w-full h-auto object-cover" src="/gallery/gallery12.jpg" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--navy-blue)]">
                      Hydraulics Troubleshooting
                    </h3>
                    <p className="text-gray-600 text-sm">
                    Complete troubleshooting and sensor calibration service.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
                  onClick={handleUnsupportedFeature}
                >
                  <img  alt="Hydraulic Unit" className="w-full h-auto object-cover" src="/gallery/gallery2.jpg" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--navy-blue)]">
                      Hydraulic Unit
                    </h3>
                    <p className="text-gray-600 text-sm">
                    Hydraulic valve block control system upgrade.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
                  onClick={handleUnsupportedFeature}
                >
                  <img  alt="Parts Extraction" className="w-full h-auto object-cover" src="/gallery/gallery13.jpg" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--navy-blue)]">
                      Parts Extraction
                    </h3>
                    <p className="text-gray-600 text-sm">
                    Removal of parts and disassembly of hydraulic devices for inspection.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
                  onClick={handleUnsupportedFeature}
                >
                  <img  alt="Parts Extraction" className="w-full h-auto object-cover" src="/gallery/gallery7.jpg" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--navy-blue)]">
                      Stern Hatches
                    </h3>
                    <p className="text-gray-600 text-sm">
                    Commissioning of stern hatches and verification of limit switches.
                    </p>
                  </div>
                </motion.div>
              
            </div>
          </div>
        </section>
    );
};

export default Portfolio;