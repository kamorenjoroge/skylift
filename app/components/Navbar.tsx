"use client";
import { useState, useEffect, useMemo } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import QuoteModal from "./QuoteModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = useMemo(() => [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About Us", id: "about" },
    { href: "#services", label: "Services", id: "services" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (sectionId: string): void => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
                <ArrowUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Skyrise</h1>
                <p className="text-xs text-secondary -mt-1 font-medium">Elevator Ltd</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-all duration-200 font-medium relative group ${
                    activeSection === item.id ? "text-primary" : "text-dark hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-200 ${
                      activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition"
              >
                Get Quote
              </button>
            </div>
            <button
              className="md:hidden p-2 text-dark hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border bg-background">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className={`transition-all duration-200 font-medium px-4 py-3 rounded-lg mx-2 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10"
                        : "text-dark hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-2 pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition w-full"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
