import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this demo, we'll just simulate a successful submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          eventType: '',
          guestCount: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };
  
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-mocha text-cream py-20 shadow-md">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl"
            >
              Let's create something sweet together
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-8 bg-cream rounded-lg shadow-md"
              >
                <h2 className="font-serif text-3xl font-bold text-mocha mb-6">
                  Get in Touch
                </h2>
                <div className="w-20 h-1 bg-coffee mb-8"></div>
                <p className="text-mocha mb-8 leading-relaxed">
                  Have a question or ready to order a cake? Contact us using the information below 
                  or fill out the form to start creating your custom cake.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-mocha/10 p-3 rounded-full mr-4 shadow-sm">
                      <Mail className="text-mocha" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-mocha mb-1">Email Us</h3>
                      <a href="mailto:hello@sweetcreations.com" className="text-coffee hover:text-mocha transition-colors">
                        hello@sweetcreations.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-mocha/10 p-3 rounded-full mr-4 shadow-sm">
                      <Phone className="text-mocha" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-mocha mb-1">Call Us</h3>
                      <a href="tel:+1234567890" className="text-coffee hover:text-mocha transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-mocha/10 p-3 rounded-full mr-4 shadow-sm">
                      <MapPin className="text-mocha" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-mocha mb-1">Location</h3>
                      <p className="text-coffee">
                        123 Baker Street<br />
                        Los Angeles, CA 90001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-mocha/10 p-3 rounded-full mr-4 shadow-sm">
                      <Clock className="text-mocha" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-mocha mb-1">Hours</h3>
                      <p className="text-coffee">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday: 10am - 4pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-cream rounded-lg shadow-md p-8 border border-cream/30">
                  <h2 className="font-serif text-2xl font-bold text-mocha mb-6">
                    Cake Inquiry Form
                  </h2>
                  
                  {formStatus === 'success' && (
                    <div className="bg-vanilla/20 text-mocha p-4 rounded-lg mb-6 border border-vanilla/30">
                      Thank you for your inquiry! We'll get back to you soon.
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="bg-coffee/10 text-coffee p-4 rounded-lg mb-6 border border-coffee/30">
                      There was an error submitting your form. Please try again.
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-mocha mb-2">
                          Your Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-cream/60 rounded-lg focus:ring-2 focus:ring-mocha focus:border-mocha transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-mocha mb-2">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-cream/60 rounded-lg focus:ring-2 focus:ring-mocha focus:border-mocha transition-all duration-200"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-mocha mb-2">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-cream/60 rounded-lg focus:ring-2 focus:ring-mocha focus:border-mocha transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="eventDate" className="block text-sm font-medium text-mocha mb-2">
                          Event Date
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-cream/60 rounded-lg focus:ring-2 focus:ring-mocha focus:border-mocha transition-all duration-200"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="eventType" className="block text-sm font-medium text-mocha mb-2">
                          Event Type
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-cream/60 rounded-lg focus:ring-2 focus:ring-mocha focus:border-mocha transition-all duration-200 bg-white"
                        >
                          <option value="">Select Event Type</option>
                          <option value="Birthday">Birthday</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Anniversary">Anniversary</option>
                          <option value="Baby Shower">Baby Shower</option>
                          <option value="Corporate">Corporate</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="guestCount" className="block text-sm font-medium text-mocha mb-2">
                          Number of Guests
                        </label>
                        <input
                          type="number"
                          id="guestCount"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-cream/60 rounded-lg focus:ring-2 focus:ring-mocha focus:border-mocha transition-all duration-200"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-medium text-mocha mb-2">
                        Your Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-cream/60 rounded-lg focus:ring-2 focus:ring-mocha focus:border-mocha transition-all duration-200"
                        placeholder="Tell us about your cake idea, flavor preferences, design inspiration, etc."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-mocha text-cream px-8 py-3 rounded-full font-medium hover:bg-coffee transition-colors duration-300 inline-flex items-center gap-2 shadow-sm hover:shadow"
                    >
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-mocha mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-coffee mx-auto mb-6"></div>
              <p className="text-coffee">
                Answers to common questions about our services.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How far in advance should I order my cake?",
                  answer: "We recommend ordering at least 2-3 weeks in advance for standard cakes, and 1-2 months for wedding cakes or complex designs. For peak seasons (summer weddings, holidays), earlier booking is advised."
                },
                {
                  question: "Do you deliver cakes?",
                  answer: "Yes, we offer delivery services within a 30-mile radius of our location for an additional fee based on distance. Specialty cakes and multi-tier designs include setup at your venue."
                },
                {
                  question: "Can I taste the cake before ordering?",
                  answer: "Absolutely! We offer cake tasting sessions by appointment. The tasting fee is $30, which is applied to your order if you place an order over $250."
                },
                {
                  question: "Do you accommodate dietary restrictions?",
                  answer: "Yes, we offer gluten-free, dairy-free, nut-free, and vegan options. Please let us know about any allergies or dietary restrictions when placing your order."
                },
                {
                  question: "How do I make a payment?",
                  answer: "We require a 50% deposit to secure your order, with the balance due one week before delivery or pickup. We accept credit cards, cash, and electronic transfers."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-cream/60 rounded-lg p-8 shadow-sm border-l-4 border-coffee"
                >
                  <h3 className="font-serif text-xl font-semibold text-mocha mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-coffee leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;