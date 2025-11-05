import React from "react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Our Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We serve clients in South Florida and throughout the Caribbean. Find
            us in Fort Lauderdale.
          </p>
        </div>
        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.9015017075326!2d-80.1445083!3d26.102133799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d901bdb42f6bc1%3A0x77a6f0c6a466bedd!2sSea%20Engineering%20Systems%20LLC!5e0!3m2!1ses-419!2sus!4v1737089358599!5m2!1ses-419!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
