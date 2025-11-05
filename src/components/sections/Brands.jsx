import React from 'react';
import { motion } from 'framer-motion';

const Brands = () => {
    const brands = [
        { name: 'Benetti', logo: '/benetti.png' },
        { name: 'Abyc', logo: '/abyc.png' },
        { name: 'Mia', logo: '/mia.png' },
    ];

    return (
        <section id="brands" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 section-reveal">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        We work with the best brands
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our experience spans the world's most prestigious shipyards.
                    </p>
                </div>
                <div className="flex items-center justify-around">
                    {brands.map(({logo, name}, index) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex justify-center"
                        >
                            <img  className="h-24 w-24 text-gray-400" alt={`${name} logo`} src={logo} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;