import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto. ",
      className: "bg-white"
    });
    e.target.reset();
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/+19544979608?text=Hello, I'm interested in learning more about your engineering services.",
      "_blank"
    );
  };

  return (
    <section id="contactus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="section-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Contact us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to take your boat to the next level? Contact us for a free
              consultation.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--marine-turquoise)] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-[var(--navy-blue)]">
                    Telephone
                  </span>
                  <p className="text-gray-600">+1 (954) 497-9608</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[var(--marine-turquoise)] p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-[var(--navy-blue)]">
                    Email
                  </span>
                  <p className="text-gray-600">
                    operation@seaengineeringsystems.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[var(--marine-turquoise)] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-[var(--navy-blue)]">
                    Location
                  </span>
                  <p className="text-gray-600">South of Florida and the Caribbean</p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Contact by WhatsApp
            </Button>
          </div>

          <div className="section-reveal">
            <form
              onSubmit={handleContactSubmit}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--marine-turquoise)] focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--marine-turquoise)] focus:border-transparent transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="vesselType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Type of Boat
                </label>
                <select
                  id="vesselType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--marine-turquoise)] focus:border-transparent transition bg-white"
                >
                  <option>Select your boat</option>
                  <option>Megayacht (40m+)</option>
                  <option>Superyacht (24-40m)</option>
                  <option>Luxury yacht (15-24m)</option>
                  <option>Comercial boat</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="services"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Required Services
                </label>
                <textarea
                  id="services"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--marine-turquoise)] focus:border-transparent transition"
                  placeholder="Describe the services you need..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="btn-primary text-white w-full py-3 rounded-lg text-lg font-semibold"
              >
                Send Inquiry
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
