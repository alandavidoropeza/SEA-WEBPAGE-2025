import React, { useState } from "react";
import { Anchor, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ onInspectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about-us", label: "About us" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contactus", label: "Contact us" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center space-x-2">
            {/* <Anchor className="w-8 h-8 text-[var(--navy-blue)]" />
            <span className="text-xl font-bold text-[var(--navy-blue)]">
              Sea Engineering
            </span> */}
            <svg xmlns="http://www.w3.org/2000/svg" className= " fill-slate-600" width="120" height="60" viewBox="0.869 3 96.83 24.86">
              <path className="stroke-slate-600" strokeWidth ="2" d="M 0.855 12.603 C 14.357 9.58 69.418 1.288 97.7 19.274 L 74.626 32.901 C 73.893 33.205 73.618 32.738 74.044 32.134 L 89.114 20.057 C 89.657 19.559 89.386 19.22 88.798 18.926 C 68.457 6.266 30.228 7.81 0.871 12.67 Z"  />
              <text x="23" y="16.5" className= " fill-slate-600"  fontSize="25" fontFamily="castellar">SEA</text>
              <text x="8" y="25"    className= " fill-slate-600"  fontSize="6" >ENGINEERING SYSTEMS</text>
            </svg>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[var(--marine-turquoise)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={onInspectionClick}
              className="btn-primary text-white px-6 py-2 rounded-full"
            >
              Free Inspection
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-[var(--marine-turquoise)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                onInspectionClick();
                setIsMenuOpen(false);
              }}
              className="btn-primary text-white w-full"
            >
              Free Inspection
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
