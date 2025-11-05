import React from "react";
import { Anchor } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsApp from "@mui/icons-material/WhatsApp";

const socialMediaData = [
  {
    id: 2,
    icon: (
      <FacebookOutlinedIcon className="hover:text-[#0B1D72] hover:-translate-y-1 transition-all" />
    ),
    link: "https://www.facebook.com/profile.php?id=61564490680693",
  },
  {
    id: 5,
    icon: (
      <InstagramIcon className="hover:text-[#0B1D72] hover:-translate-y-1 transition-all" />
    ),
    link: "https://www.instagram.com/seaengineeringsystems/",
  },
  {
    id: 6,
    icon: (
      <EmailIcon className="hover:text-[#0B1D72] hover:-translate-y-1 transition-all" />
    ),
    link: "mailto:operation@seaengineeringsystems.com",
  },
  {
    id: 7,
    icon: (
      <WhatsApp className="hover:text-[#0B1D72] hover:-translate-y-1 transition-all" />
    ),
    link: "https://wa.me/+19544979608?text=Hello, I'm interested in learning more about your engineering services.",
  },
];

const Footer = () => {
  const { toast } = useToast();

  const handleUnsupportedFeature = () => {
    toast({
      title: "🚧 Working on it!",
      description: "¡Contact us by Whatsapp! ",
    });
  };

  return (
    <footer className="bg-[var(--navy-blue)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              
            <svg xmlns="http://www.w3.org/2000/svg" className= " fill-white" width="120" height="60" viewBox="0.869 3 96.83 24.86">
              <path className="stroke-white" strokeWidth ="2" d="M 0.855 12.603 C 14.357 9.58 69.418 1.288 97.7 19.274 L 74.626 32.901 C 73.893 33.205 73.618 32.738 74.044 32.134 L 89.114 20.057 C 89.657 19.559 89.386 19.22 88.798 18.926 C 68.457 6.266 30.228 7.81 0.871 12.67 Z"  />
              <text x="23" y="16.5" className= " fill-white"  fontSize="25" fontFamily="castellar">SEA</text>
              <text x="8" y="25"    className= " fill-white"  fontSize="6" >ENGINEERING SYSTEMS</text>
            </svg>
              
            </div>
            <p className="text-gray-300 text-sm">
              Technical engineering solutions and general services for luxury
              yachts.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Services</span>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--gold-accent)] transition-colors"
                >
                  Hydraulics
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--gold-accent)] transition-colors"
                >
                  Mechanical
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--gold-accent)] transition-colors"
                >
                  Electrical
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--gold-accent)] transition-colors"
                >
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Contacto</span>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>+1 (954) 497-9608</li>
              <li>operation@seaengineeringsystems.com</li>
              <li>3200 S Andrews Ave Suite 121, Fort Lauderdale, FL 33316, United States.</li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Follow us</span>
            <div className="flex mt-0 space-x-6">
              {socialMediaData.map(({ id, icon, link }) => (
                <a key={id} href={link} target="_blank">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 Sea Engineering Systems. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
