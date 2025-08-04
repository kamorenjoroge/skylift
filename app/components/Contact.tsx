import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+254 723 168 833", "+254 722 777181"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["skyriseelevator20@gmail.com"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Eastern Bypass, Kamakis", "Capital One Plaza, 2nd Floor", "Office S3"],
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "24/7 Emergency Support"],
      action: "Emergency Line"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team for consultations, quotes, or emergency support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-background rounded-lg border border-border p-6 group hover:shadow-lg transition-all">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-light" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{info.title}</h3>
                </div>
                
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
                
                <button className="border border-primary text-primary hover:bg-primary hover:text-light px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                  {info.action}
                </button>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-lg border border-border p-6 h-fit">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 mr-3 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full p-3 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full p-3 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full p-3 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+254 700 000 000" 
                  className="w-full p-3 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Service Type
                </label>
                <select className="w-full p-3 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Select a service</option>
                  <option value="installation">New Installation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="modernization">Modernization</option>
                  <option value="repair">Emergency Repair</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <textarea 
                  placeholder="Tell us about your project requirements..."
                  className="w-full p-3 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent min-h-[100px]"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-light px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-background/50 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            Find Our Office
          </h3>
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interactive map will be embedded here
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Eastern Bypass, Kamakis, Capital One Plaza, 2nd Floor, Office S3
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;