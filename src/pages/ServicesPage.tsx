import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "Custom Celebration Cakes",
      description: "Unique cakes designed specifically for your special occasion",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      services: [
        "Birthday Cakes",
        "Anniversary Cakes",
        "Graduation Cakes",
        "Baby Shower Cakes",
        "Holiday Cakes"
      ]
    },
    {
      title: "Wedding Cakes",
      description: "Elegant and memorable cakes for your perfect day",
      image: "https://images.pexels.com/photos/3407283/pexels-photo-3407283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      services: [
        "Multi-tier Wedding Cakes",
        "Groom's Cakes",
        "Wedding Cupcake Towers",
        "Engagement Party Cakes",
        "Bridal Shower Cakes"
      ]
    },
    {
      title: "Specialty Items",
      description: "Beyond traditional cakes for unique occasions",
      image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      services: [
        "Cupcakes & Mini Cakes",
        "Cake Pops & Dessert Tables",
        "Themed Character Cakes",
        "Gluten-Free & Vegan Options",
        "Corporate Event Cakes"
      ]
    }
  ];
  
  const flavors = [
    {
      category: "Cake Flavors",
      options: ["Vanilla Bean", "Chocolate", "Red Velvet", "Lemon", "Marble", "Carrot", "Coconut", "Funfetti"]
    },
    {
      category: "Fillings",
      options: ["Vanilla Buttercream", "Chocolate Ganache", "Fruit Preserves", "Cream Cheese", "Lemon Curd", "Caramel", "Mousse", "Nutella"]
    },
    {
      category: "Frostings",
      options: ["American Buttercream", "Swiss Meringue Buttercream", "Cream Cheese Frosting", "Whipped Cream", "Fondant", "Ganache", "Caramel Drip"]
    }
  ];

  return (
    <div className="pt-28 pb-24">
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl"
            >
              Handcrafted cakes for every occasion and celebration
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Categories */}
      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-mocha mb-4">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-coffee mx-auto mb-6"></div>
            <p className="text-coffee leading-relaxed">
              From intimate celebrations to grand events, we create custom cakes for every occasion.
            </p>
          </div>
          
          <div className="space-y-20">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-cream p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-serif text-2xl font-bold text-mocha mb-3">
                      {category.title}
                    </h3>
                    <div className="w-16 h-1 bg-coffee mb-6"></div>
                    <p className="text-coffee mb-8 leading-relaxed">
                      {category.description}
                    </p>
                    <ul className="space-y-4">
                      {category.services.map(service => (
                        <li key={service} className="flex items-start">
                          <div className="bg-vanilla p-1 rounded-full mr-3 shadow-sm">
                            <Check className="text-mocha" size={18} />
                          </div>
                          <span className="text-coffee">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`overflow-hidden rounded-lg shadow-md ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Flavors and Options */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-mocha mb-4">
              Flavors & Options
            </h2>
            <div className="w-16 h-1 bg-coffee mx-auto mb-6"></div>
            <p className="text-coffee leading-relaxed">
              Choose from our selection of delicious flavors, fillings, and frostings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flavors.map((flavor, index) => (
              <motion.div
                key={flavor.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream/50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-xl font-semibold text-mocha mb-6 text-center">
                  {flavor.category}
                </h3>
                <ul className="space-y-3">
                  {flavor.options.map(option => (
                    <li key={option} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-coffee mr-3 shadow-sm"></div>
                      <span className="text-coffee">{option}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-16 bg-mocha/5 rounded-lg p-8 shadow-md border-l-4 border-coffee"
          >
            <h3 className="font-serif text-xl font-semibold text-mocha mb-4 text-center">
              Custom Options
            </h3>
            <p className="text-coffee text-center mb-4 leading-relaxed">
              Don't see what you're looking for? We're happy to work with you on custom flavors and dietary needs.
            </p>
            <p className="text-coffee text-center leading-relaxed">
              Available upon request: Vegan, Gluten-Free, Sugar-Free, Nut-Free, and other allergen-friendly options.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Order Process */}
      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-mocha mb-4">
              How To Order
            </h2>
            <div className="w-16 h-1 bg-coffee mx-auto mb-6"></div>
            <p className="text-coffee leading-relaxed">
              Simple steps to get your perfect cake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Contact Us",
                description: "Fill out our inquiry form with your event details and cake ideas."
              },
              {
                step: "2",
                title: "Consultation",
                description: "We'll discuss your vision, flavors, design, and provide a quote."
              },
              {
                step: "3",
                title: "Confirmation",
                description: "Place your order with a deposit to secure your date."
              },
              {
                step: "4",
                title: "Celebration",
                description: "Pick up your cake or have it delivered for your special day!"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="bg-vanilla/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-coffee shadow-sm">
                  <span className="font-serif text-2xl font-bold text-mocha">{step.step}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-mocha mb-3">
                  {step.title}
                </h3>
                <p className="text-coffee leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-mocha mb-4">
              Pricing Information
            </h2>
            <div className="w-16 h-1 bg-coffee mx-auto mb-6"></div>
            <p className="text-coffee leading-relaxed">
              Our cakes are custom-priced based on size, design complexity, and special requirements.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-cream/50 rounded-lg p-8 shadow-md"
            >
              <h3 className="font-serif text-xl font-semibold text-mocha mb-6 border-b border-coffee/30 pb-3">
                Starting Prices
              </h3>
              <ul className="space-y-4">
                {[
                  "6-inch Round Cake: From $65",
                  "8-inch Round Cake: From $85",
                  "10-inch Round Cake: From $120",
                  "Cupcakes: From $36/dozen",
                  "Wedding Cakes: From $350",
                  "Special Design Cakes: From $150"
                ].map(item => (
                  <li key={item} className="flex items-start">
                    <div className="bg-vanilla p-1 rounded-full mr-3 shadow-sm">
                      <Check className="text-mocha" size={18} />
                    </div>
                    <span className="text-coffee">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-cream/50 rounded-lg p-8 shadow-md"
            >
              <h3 className="font-serif text-xl font-semibold text-mocha mb-6 border-b border-coffee/30 pb-3">
                Additional Services
              </h3>
              <ul className="space-y-4">
                {[
                  "Cake Tastings: $30 (applied to order over $250)",
                  "Delivery: Starting at $25 (varies by location)",
                  "Setup for Multi-tier Cakes: $50",
                  "Custom Cake Toppers: From $25",
                  "Rush Orders (less than 7 days): 20% surcharge",
                  "Specialty Dietary Requirements: From $10"
                ].map(item => (
                  <li key={item} className="flex items-start">
                    <div className="bg-vanilla p-1 rounded-full mr-3 shadow-sm">
                      <Check className="text-mocha" size={18} />
                    </div>
                    <span className="text-coffee">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-coffee italic max-w-3xl mx-auto">
              * Prices may vary based on design complexity, special ingredients, and seasonal availability.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-mocha text-cream">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Order Your Dream Cake?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
            Contact us today to discuss your cake needs and schedule a consultation.
          </p>
          <a 
            href="/contact" 
            className="bg-cream text-mocha hover:bg-coffee hover:text-cream transition-colors px-8 py-4 rounded-full font-medium inline-block shadow-md hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;