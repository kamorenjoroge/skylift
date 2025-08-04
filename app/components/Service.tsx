import { 
  Settings, 
  RefreshCw, 
  Truck,
  Building,
  Heart,
  Package,
  Eye,
  Phone
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Truck,
      title: "Supply & Installation",
      description: "Complete elevator supply and professional installation services with certified technicians and quality assurance.",
      features: ["New installations", "Site assessment", "Project management", "Quality certification"]
    },
    {
      icon: Settings,
      title: "Maintenance & Servicing",
      description: "Comprehensive maintenance programs to ensure optimal performance and extend equipment lifespan.",
      features: ["Preventive maintenance", "Emergency repairs", "Performance optimization", "Safety inspections"]
    },
    {
      icon: RefreshCw,
      title: "Modernization & Repairs",
      description: "Upgrade existing elevators with modern technology and components for improved efficiency and safety.",
      features: ["Control system upgrades", "Safety feature updates", "Energy efficiency improvements", "Aesthetic modernization"]
    }
  ];

  const specializedLifts = [
    {
      icon: Heart,
      title: "Hospital Lifts",
      description: "Medical-grade elevators designed for healthcare facilities"
    },
    {
      icon: Package,
      title: "Cargo Lifts",
      description: "Heavy-duty freight elevators for industrial applications"
    },
    {
      icon: Eye,
      title: "Panoramic Lifts",
      description: "Glass elevators offering scenic views and architectural appeal"
    },
    {
      icon: Building,
      title: "Passenger Lifts",
      description: "Standard and luxury passenger elevators for all building types"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive elevator solutions from supply to maintenance, tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl shadow-lg border border-border p-6 h-full group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="w-8 h-8 text-light" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-light py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Specialized Lift Solutions
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom elevator solutions designed for specific industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedLifts.map((lift, index) => (
              <div 
                key={index} 
                className="bg-background rounded-lg shadow-md p-6 text-center group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <lift.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="text-lg font-bold text-foreground mb-3">{lift.title}</h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">{lift.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-light">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Our experts are ready to design the perfect elevator solution for your specific requirements and budget.
            </p>
            <button className="bg-secondary hover:bg-secondary-dark text-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Request Custom Quote
            </button>
          </div>
        </div>

        {/* Emergency Services Banner */}
        <div className="mt-12 bg-danger/10 border-l-4 border-danger p-6 rounded-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h4 className="text-lg font-bold text-danger mb-2">24/7 Emergency Service</h4>
              <p className="text-danger/90">Elevator breakdown? Our emergency response team is available round the clock.</p>
            </div>
            <button className="bg-danger hover:bg-danger-dark text-light px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Emergency: +254 723 168 833
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;