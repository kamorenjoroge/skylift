import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const heroImage = "/hero-elevator.jpg"; // Path to your hero image

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
        width={1920}
        height={1080}
          src={heroImage}
          alt="Modern elevator installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-light text-dark rounded-full text-sm font-medium border border-primary/30 backdrop-blur-sm">
              Leading Elevator Solutions in Kenya
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Elevating
            <br />
            <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">
              Your World
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Premium elevator supply, installation, maintenance, and modernization services. 
            Trusted by leading businesses across Kenya for over a decade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="bg-background/10 border-2 border-border text-foreground hover:bg-background/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              Call Now: +254 723 168 833
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center md:text-left group">
              <div className="text-3xl font-bold mb-2 text-secondary group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-light">Projects Completed</div>
            </div>
            <div className="text-center md:text-left group">
              <div className="text-3xl font-bold mb-2 text-secondary group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-light">Support Available</div>
            </div>
            <div className="text-center md:text-left group">
              <div className="text-3xl font-bold mb-2 text-secondary group-hover:scale-110 transition-transform duration-300">EN81</div>
              <div className="text-light">Safety Standards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-border rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;