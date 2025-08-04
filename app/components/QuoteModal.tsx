"use client";
import { useState, useEffect } from "react";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Building,
  Users,
  Calendar,
  FileText,
  DollarSign,
} from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    buildingType: "",
    floors: "",
    timeline: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.projectType)
      newErrors.projectType = "Please select a project type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        buildingType: "",
        floors: "",
        timeline: "",
        budget: "",
        message: "",
      });

      onClose();

      // Here you would show a success message or redirect
      alert(
        "Quote request submitted successfully! We'll contact you within 24 hours."
      );
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-5xl max-h-[95vh] flex flex-col">
        {/* Fixed Header */}
        <div className="flex-shrink-0 px-6 py-6 border-b border-border bg-gradient-to-r from-primary/10 to-primary/20 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2
                id="modal-title"
                className="text-3xl font-bold text-foreground mb-2"
              >
                Request Professional Quote
              </h2>
              
            </div>
            <button
              className="flex-shrink-0 p-2 rounded-full bg-background hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all duration-200 shadow-sm border border-border"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <div className="space-y-8">
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Contact Information Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b-2 border-primary/20">
                    <div className="p-3 rounded-xl bg-primary text-light shadow-md">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        Contact Information
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Your primary contact details
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border  ${
                          errors.name
                            ? "border-danger focus:ring-danger focus:border-danger"
                            : "border-border focus:ring-primary focus:border-primary"
                        } rounded-xl focus:ring-2 transition-all duration-200 text-sm font-medium bg-background focus:bg-background`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-danger">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 border ${
                            errors.email
                              ? "border-danger focus:ring-danger focus:border-danger"
                              : "border-border focus:ring-primary focus:border-primary"
                          } rounded-xl focus:ring-2 transition-all duration-200 text-sm font-medium bg-background focus:bg-background`}
                          placeholder="your.email@company.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-danger">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 border ${
                            errors.phone
                              ? "border-danger focus:ring-danger focus:border-danger"
                              : "border-border focus:ring-primary focus:border-primary"
                          } rounded-xl focus:ring-2 transition-all duration-200 text-sm font-medium bg-background focus:bg-background`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-danger">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Company/Organization
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Building className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm font-medium bg-background focus:bg-background"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b-2 border-secondary/20">
                    <div className="p-3 rounded-xl bg-secondary text-dark shadow-md">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        Project Details
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specifications and requirements
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Project Type <span className="text-danger">*</span>
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${
                          errors.projectType
                            ? "border-danger focus:ring-danger focus:border-danger"
                            : "border-border focus:ring-primary focus:border-primary"
                        } rounded-xl focus:ring-2 transition-all duration-200 text-sm font-medium bg-background focus:bg-background appearance-none cursor-pointer`}
                      >
                        <option value="">Select project type</option>
                        <option value="new-installation">
                          New Installation
                        </option>
                        <option value="modernization">
                          System Modernization
                        </option>
                        <option value="maintenance">
                          Maintenance Contract
                        </option>
                        <option value="repair">Emergency Repair</option>
                        <option value="consultation">
                          Technical Consultation
                        </option>
                      </select>
                      {errors.projectType && (
                        <p className="mt-1 text-sm text-danger">
                          {errors.projectType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Building Type
                      </label>
                      <select
                        name="buildingType"
                        value={formData.buildingType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm font-medium bg-background focus:bg-background appearance-none cursor-pointer"
                      >
                        <option value="">Select building type</option>
                        <option value="residential">Residential Complex</option>
                        <option value="commercial">Commercial Office</option>
                        <option value="industrial">Industrial Facility</option>
                        <option value="healthcare">Healthcare Facility</option>
                        <option value="hospitality">Hotel/Hospitality</option>
                        <option value="retail">Retail/Shopping Center</option>
                        <option value="educational">
                          Educational Institution
                        </option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Number of Floors
                        </label>
                        <input
                          type="number"
                          name="floors"
                          value={formData.floors}
                          onChange={handleInputChange}
                          min="1"
                          max="200"
                          className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm font-medium bg-background focus:bg-background"
                          placeholder="e.g., 12"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Timeline
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm font-medium bg-background focus:bg-background appearance-none cursor-pointer"
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
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Estimated Budget Range
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <DollarSign className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm font-medium bg-background focus:bg-background appearance-none cursor-pointer"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-50k">Under Ksh. 50,000</option>
                          <option value="50k-100k">
                            Ksh. 50,000 - Ksh. 100,000
                          </option>
                          <option value="100k-250k">
                            Ksh. 100,000 - Ksh. 250,000
                          </option>
                          <option value="250k-500k">
                            Ksh. 250,000 - Ksh. 500,000
                          </option>
                          <option value="500k-1m">
                            Ksh. 500,000 - Ksh. 1,000,000
                          </option>
                          <option value="over-1m">Over Ksh. 1,000,000</option>
                          <option value="discuss">Prefer to discuss</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b-2 border-accent/20">
                  <div className="p-3 rounded-xl bg-accent text-light shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Additional Information
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Any special requirements or details
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Project Description & Special Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm font-medium bg-background focus:bg-background resize-vertical"
                
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-border bg-background rounded-b-2xl">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col-reverse sm:flex-row gap-3 justify-between items-center">
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                By submitting this form, you agree to be contacted by our team
                regarding your project.
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="px-6 py-3 border-2 border-border text-foreground rounded-xl hover:bg-primary/10 hover:border-primary font-semibold transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-light rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl text-sm disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-light border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Quote Request"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;