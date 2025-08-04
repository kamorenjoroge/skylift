"use client";
import { useState } from "react";
import { X, Phone, Mail, MapPin, Building, Users, Calendar } from "lucide-react";

const Q= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    buildingType: '',
    floors: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    // Reset form or show success message
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 w-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        Get Quote
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8 mx-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 sm:px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Request a Quote</h2>
                <p className="text-blue-100 text-xs sm:text-sm">Get a personalized quote for your elevator project</p>
              </div>
              <button
                onClick={closeModal}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-200 flex-shrink-0"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="max-h-[70vh] sm:max-h-[75vh] overflow-y-auto">
              <form onSubmit={handleSubmit} className="p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      Contact Information
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      Project Details
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      >
                        <option value="">Select project type</option>
                        <option value="new-installation">New Installation</option>
                        <option value="modernization">Modernization</option>
                        <option value="maintenance">Maintenance Contract</option>
                        <option value="repair">Repair Service</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Building Type
                      </label>
                      <select
                        name="buildingType"
                        value={formData.buildingType}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      >
                        <option value="">Select building type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="retail">Retail</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Floors
                      </label>
                      <input
                        type="number"
                        name="floors"
                        value={formData.floors}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        placeholder="e.g., 10"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (ASAP)</option>
                          <option value="1-3-months">1-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="6-12-months">6-12 months</option>
                          <option value="planning">Planning phase</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message Section */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Please provide any additional details about your project, specific requirements, or questions..."
                  />
                </div>

                {/* Form Actions */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-all duration-200 text-sm sm:text-base order-2 sm:order-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base order-1 sm:order-2"
                  >
                    Submit Quote Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Q;