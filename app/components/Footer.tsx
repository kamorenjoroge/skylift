"use client";
import { ArrowUp, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const services = [
    "Elevator Installation",
    "Maintenance Services", 
    "Modernization",
    "Emergency Repairs",
    "Cargo Lifts",
    "Medical Elevators"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-light">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-light/10 rounded-lg flex items-center justify-center">
                <ArrowUp className="w-6 h-6 text-light" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Skyrise Elevator Ltd</h3>
                <p className="text-sm text-light/80">Elevating Your World</p>
              </div>
            </div>
            <p className="text-light/80 mb-6">
              Kenya&lsquo;s premier elevator solutions company, providing world-class vertical 
              transportation systems with unmatched reliability and service excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-light/10 rounded-lg flex items-center justify-center hover:bg-light/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-light" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-light/80 hover:text-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-light/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-light/80 mt-1" />
                <div>
                  <p className="text-light/80">+254 723 168 833</p>
                  <p className="text-light/80">+254 722 777181</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-light/80 mt-1" />
                <p className="text-light/80">skyriseelevator20@gmail.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-light/80 mt-1" />
                <div>
                  <p className="text-light/80">Eastern Bypass, Kamakis</p>
                  <p className="text-light/80">Capital One Plaza, 2nd Floor</p>
                  <p className="text-light/80">Office S3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-light/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-light/80 text-sm">
              © 2024 Skyrise Elevator Ltd. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-light/80 text-sm hover:text-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-light/80 text-sm hover:text-light transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="text-light/80 hover:text-light hover:bg-light/10 px-3 py-2 rounded-md text-sm flex items-center transition-colors"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;