import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Settings, Zap, Shield, Wrench, TrendingUp } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const handleUnsupportedFeature = () => {
    toast({
      title: "🚧 Working on it!",
      description: "¡Contact us by Whatsapp! ",
        className: "bg-white"
    });
  };

  const services = [
    {
      icon: <Anchor className="w-8 h-8" />,
      title: "Marine Hydraulics",
      description: "Specialized hydraulic systems for luxury vessels and megayachts."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Marine Mechanical Engineering",
      description: "Advanced mechanical solutions and maintenance of propulsion systems."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Marine Electrical and Electronics",
      description: "State-of-the-art Marine facilities and automation."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Preventive Maintenance",
      description: "Maintenance plans that ensure optimal performance of your vessel."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "Tailored engineering for unique projects and specific requirements."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Project Management",
      description: "Complete upgrades and comprehensive management of modernization projects."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Specialized Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive naval engineering solutions with the highest standards of quality and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover cursor-pointer"
              onClick={handleUnsupportedFeature}
            >
              <div className="text-[var(--marine-turquoise)] mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--navy-blue)]">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;