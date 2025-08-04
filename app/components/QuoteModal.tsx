import { useState } from "react";
import { Calculator, Phone } from "lucide-react";

interface QuoteModalProps {
  children: React.ReactNode;
}

const QuoteModal = ({ children }: QuoteModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    floors: "",
    buildingType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `🏢 *New Quote Request - Skyrise Elevator Ltd*

👤 *Customer Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Company: ${formData.company || 'N/A'}

🛗 *Service Requirements:*
• Service Type: ${formData.serviceType}
• Number of Floors: ${formData.floors}
• Building Type: ${formData.buildingType}

📝 *Additional Message:*
${formData.message || 'No additional requirements'}

Please provide a detailed quotation. Thank you!`;

    const whatsappUrl = `https://wa.me/254723168833?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert("Quote request sent! We'll get back to you within 24 hours with a detailed quote.");
    
    setIsOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "",
      floors: "",
      buildingType: "",
      message: ""
    });
  };

  return (
    <>
      {/* Modal Trigger */}
      <button onClick={() => setIsOpen(true)}>
        {children}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="border-b border-border p-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Get Your Free Quote</h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                      className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+254 7XX XXX XXX"
                      className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium">
                      Company (Optional)
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="ABC Corporation"
                      className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="serviceType" className="block text-sm font-medium">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      required
                      className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select service</option>
                      <option value="new-installation">New Installation</option>
                      <option value="maintenance">Maintenance Contract</option>
                      <option value="modernization">Modernization</option>
                      <option value="repair">Repair Service</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="floors" className="block text-sm font-medium">
                      Number of Floors
                    </label>
                    <input
                      id="floors"
                      type="text"
                      value={formData.floors}
                      onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                      placeholder="e.g., 5 floors"
                      className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="buildingType" className="block text-sm font-medium">
                    Building Type
                  </label>
                  <select
                    id="buildingType"
                    value={formData.buildingType}
                    onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                    className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select building type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="hospital">Hospital/Medical</option>
                    <option value="hotel">Hotel</option>
                    <option value="office">Office Building</option>
                    <option value="shopping">Shopping Mall</option>
                    <option value="industrial">Industrial</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your specific requirements, timeline, or any special considerations..."
                    rows={4}
                    className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-primary to-primary-dark text-light px-4 py-3 rounded-md font-medium hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="border border-border px-4 py-3 rounded-md font-medium hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>📞 Call us directly: <span className="font-semibold">+254 723 168 833</span></p>
                  <p>✉️ Email: <span className="font-semibold">skyriseelevator20@gmail.com</span></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteModal;