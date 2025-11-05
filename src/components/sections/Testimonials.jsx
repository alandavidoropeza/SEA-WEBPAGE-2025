import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    /* {
      quote:
        "El equipo de Sea Engineering transformó nuestro sistema hidráulico. Su profesionalismo y atención al detalle son inigualables. ¡Altamente recomendados!",
      name: "Capitán de M/Y 'Serenity'",
      location: "Fort Lauderdale, FL",
      stars: 5,
    },
    {
      quote:
        "La gestión del upgrade de nuestra electrónica fue impecable. Cumplieron con los plazos y el resultado superó nuestras expectativas.",
      name: "Propietario de M/Y 'Odyssey'",
      location: "Nassau, Bahamas",
      stars: 5,
    },
    {
      quote:
        "El servicio de mantenimiento preventivo nos ha ahorrado tiempo y dinero. Su conocimiento técnico es impresionante. Confianza total en su equipo.",
      name: "Jefe de Máquinas de M/Y 'Stardust'",
      location: "Miami, FL",
      stars: 5,
    }, */
    {
      stars: 5,
      title: "Reliable Hydraulic Repair",
      imgSrc: "/testimonials/1.png",
      quote:
        "Trusting SES was one of the best technical decisions we made onboard. They resolved a critical hydraulic failure in record time, with a level of professionalism rarely seen in this sector.",
      name: "Carlos M. Valverde",
      rank: "Captain",
    },
    {
      stars: 5,
      title: "Discreet & Efficient Service ",
      imgSrc: "/testimonials/2.png",
      quote:
        "The team at SEA ENGINEERING SYSTEM doesn’t just understand marine mechanics—they understand what it means to work discreetly and efficiently on yachts. 100% recommended.",
      name: "Stephanie Arnaud",
      rank: "Owner",
    },
    {
      stars: 5,
      title: "Flawless Electrical Work",
      imgSrc: "/testimonials/3.png",
      quote:
        "The SES technicians have a meticulous approach. Their work on the electrical systems of our vessels was flawless. They meet deadlines, comply with standards, and deliver excellence.",
      name: "Eng. Roberto Iglesias ",
      rank: "Superintendent",
    },
    {
        stars: 5,
        title: "Exceptional Post-Service Support",
        imgSrc: "/testimonials/4.png",
        quote:
          "What I value most about SES is their post-service commitment. They don’t disappear after the job is done—they’re always available for questions or follow-ups. That kind of customer care makes a real difference.",
        name: "James Whitmore",
        rank: "Manager",
      },{
        stars: 5,
        title: "HVAC Services",
        imgSrc: "/testimonials/13.jpg",
        quote:
          "Our chilled water system now runs flawlessly and the cabins stay perfectly comfortable, even during the hottest days in the Caribbean. Highly recommended for any yacht owner seeking reliable climate control.",
        name: "Carl D. Thompson",
        rank: "Captain",
      },{
        stars: 5,
        title: "Steering Gear Repair",
        imgSrc: "/testimonials/29.jpg",
        quote:
          "Smooth and precise steering again thanks to their hydraulic maintenance service. Quick diagnosis, clean work, and real expertise in marine systems. Highly recommended!.",
        name: "Jose Valvuena",
        rank: "Chief Engineer",
      },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            What our customers say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The trust and satisfaction of our customers is our top priority.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col"
            >
              <Quote className="w-10 h-10 text-[var(--marine-turquoise)] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{testimonial.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between gap-4 mt-5">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.imgSrc}
                    className="w-16 h-16 rounded-full object-cover"
                    width={50}
                    height={50}
                    alt="testimonials"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="text-[#001f3f] font-[500]">
                      {testimonial.rank}
                    </div>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
