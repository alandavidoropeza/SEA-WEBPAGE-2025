import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

const Hero = ({ onInspectionClick }) => {
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/+19544979608?text=Hello, I'm interested in learning more about your engineering services.",
      "_blank"
    );
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* <img
          alt="Megayate de lujo en marina exclusiva con equipo técnico trabajando"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1701608015198-74760bb9f4c5"
        /> */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/sesv3.mp4"
          autoPlay="autoplay"
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 hero-gradient opacity-50"></div>
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 text-center text-white mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
            Crafting {" "}
            <span className="text-yellow-400">
              <Typewriter
                words={["PRECISION", "RELIABILITY", "PERFORMANCE"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>{" "}
            for the Future
          </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          Specialized in mechanical and troubleshooting solutions across the entire maritime industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={onInspectionClick}
            className="bg-[var(--gold-accent)] text-[var(--navy-blue)] hover:bg-yellow-400 px-8 py-4 text-lg font-semibold rounded-full pulse-glow"
          >
            Claim your free inspection
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            onClick={handleWhatsApp}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[var(--navy-blue)] px-8 py-4 text-lg rounded-full"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            WhatsApp
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#services">
          <ChevronRight className="w-6 h-6 rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
