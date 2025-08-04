import { ExternalLink, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projectShowcase = "/project-showcase.jpg";

  const projects = [
    {
      title: "Two Rivers Mall",
      location: "Nairobi, Kenya",
      type: "Commercial",
      status: "Completed",
      description: "Installation of 6 high-speed passenger elevators and 2 service lifts",
      image: projectShowcase,
      year: "2023"
    },
    {
      title: "Kenyatta University Teaching Hospital",
      location: "Nairobi, Kenya", 
      type: "Healthcare",
      status: "Completed",
      description: "Medical-grade elevators with backup power systems and emergency protocols",
      image: "/project-showcase.jpg",
      year: "2023"
    },
    {
      title: "Westlands Corporate Center",
      location: "Nairobi, Kenya",
      type: "Office Complex",
      status: "Ongoing",
      description: "Modernization of existing elevator systems with smart controls",
       image: "/project-showcase.jpg",
      year: "2024"
    },
    {
      title: "Nyayo Stadium Renovation",
      location: "Nairobi, Kenya",
      type: "Sports Facility",
      status: "Completed",
      description: "Installation of panoramic elevators and accessibility lifts",
       image: "/project-showcase.jpg",
     year: "2022"
    },
    {
      title: "Garden City Mall",
      location: "Nairobi, Kenya",
      type: "Retail",
      status: "Completed",
      description: "Complete elevator system for multi-level shopping complex",
      image: "/project-showcase.jpg",
      year: "2023"
    },
    {
      title: "Mombasa Port Authority",
      location: "Mombasa, Kenya",
      type: "Industrial",
      status: "Upcoming",
      description: "Heavy-duty cargo elevators for port operations",
       image: "/project-showcase.jpg",
     year: "2024"
    }
  ];


type Status = "Completed" | "Ongoing" | "Upcoming" | string;

const getStatusColor = (status: Status): string => {
    switch (status) {
        case "Completed":
            return "bg-success text-light border border-success/20";
        case "Ongoing":
            return "bg-primary text-light border border-primary/20";
        case "Upcoming":
            return "bg-secondary text-light border border-secondary/20";
        default:
            return "bg-dark text-light border border-border";
    }
};


interface TypeColors {
    [key: string]: string;
}

const getTypeColor = (type: string): string => {
    const colors: TypeColors = {
        "Commercial": "bg-primary",
        "Healthcare": "bg-danger",
        "Office Complex": "bg-muted",
        "Sports Facility": "bg-success",
        "Retail": "bg-accent",
        "Industrial": "bg-secondary"
    };
    return colors[type] || "bg-muted";
};

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our completed, ongoing, and upcoming elevator installations across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background rounded-xl shadow-lg border border-border overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <Image
                  width={600}
                  height={400}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors duration-300"></div>
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-light ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-primary" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-secondary" />
                    {project.year}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-light py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group">
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-background rounded-2xl shadow-xl border border-border p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">25+</div>
              <div className="text-muted-foreground">Major Projects</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">8</div>
              <div className="text-muted-foreground">Counties Served</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">100%</div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">5+</div>
              <div className="text-muted-foreground">Industry Sectors</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-light shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients across Kenya. 
              Contact us today for a free consultation and project assessment.
            </p>
            <button className="bg-secondary hover:bg-secondary-dark text-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;