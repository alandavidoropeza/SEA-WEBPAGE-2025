
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Brands from '@/components/sections/Brands';
import Location from '@/components/sections/Location';
import Contact from '@/components/sections/Contact';
import FreeInspectionModal from '@/components/modals/FreeInspectionModal';


function App() {
  const [isInspectionModalOpen, setInspectionModalOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.section-reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      <Helmet>
        <title>Sea Engineering Systems - Soluciones Técnicas para Yates de Lujo</title>
        <meta name="description" content="Especialistas en ingeniería naval, hidráulica, electricidad marina y mantenimiento de megayates en el sur de Florida y Caribe. Soluciones técnicas de precisión." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Toaster />
        <Navbar onInspectionClick={() => setInspectionModalOpen(true)} />
        <main>
            <Hero onInspectionClick={() => setInspectionModalOpen(true)} />
            <Services />
            <About />
            <Portfolio />
            <Testimonials />
            <Brands />
            <Location />
            <Contact />
        </main>
        <Footer />
        <FreeInspectionModal isOpen={isInspectionModalOpen} onOpenChange={setInspectionModalOpen} />
      </div>
    </>
  );
}

export default App;
