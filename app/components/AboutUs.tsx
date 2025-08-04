import { Shield, Award, Users, Globe } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize safety in every project, adhering to international EN81 standards and regulations."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Delivering premium elevator solutions with certified partnerships including Delfar elevators."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified technicians and engineers bring decades of combined industry experience."
    },
    {
      icon: Globe,
      title: "Eco-Efficient",
      description: "Committed to environmentally sustainable and energy-efficient elevator solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Skyrise Elevator Ltd
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kenya&lsquo;s premier elevator solutions company, committed to vertical transportation excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
            width={1200}
            height={800}
              src="/team-installation.jpg"
              alt="Professional installation team"
              className="rounded-lg shadow-lg w-full object-cover h-full min-h-[400px]"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Mission & Vision
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Mission</h4>
                <p className="text-muted-foreground">
                  To provide world-class elevator and lift solutions that enhance accessibility, 
                  safety, and efficiency in buildings across Kenya and East Africa.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Vision</h4>
                <p className="text-muted-foreground">
                  To be the leading elevator solutions provider in East Africa, known for 
                  innovation, reliability, and exceptional customer service.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Company Background</h4>
                <p className="text-muted-foreground">
                  Established as a fully registered company in Kenya, we are certified partners 
                  with leading global elevator manufacturers including Delfar. Our headquarters 
                  are located in Capital One Plaza, Kamakis, serving clients nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-background border border-border rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;