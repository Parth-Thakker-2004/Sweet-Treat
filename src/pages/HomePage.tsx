import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import CakeGallery from '../components/cake/CakeGallery';
import TestimonialSlider from '../components/testimonials/TestimonialSlider';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-teal/90 to-dark-teal/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        ></div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-20 text-sky">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Handcrafted Cakes for Special Moments
            </h1>
            <p className="text-lg md:text-xl mb-8 text-sky/90 leading-relaxed">
              Delicious, beautiful, and made with love. Every cake tells a story.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/gallery" 
                className="bg-sky text-dark-teal px-8 py-4 rounded-full font-medium hover:bg-rust hover:text-sky transition-colors shadow-md hover:shadow-lg"
              >
                View Gallery
              </Link>
              <Link 
                to="/contact" 
                className="bg-rust text-sky px-8 py-4 rounded-full font-medium hover:bg-sky hover:text-dark-teal transition-colors shadow-md hover:shadow-lg"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="py-24 bg-sky/20">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-teal mb-4">
              Our Signature Creations
            </h2>
            <div className="w-16 h-1 bg-rust mx-auto mb-6"></div>
            <p className="text-teal max-w-2xl mx-auto leading-relaxed">
              Each cake is a unique masterpiece, crafted with premium ingredients and attention to every delicious detail.
            </p>
          </motion.div>
          
          <CakeGallery limit={6} />
          
          <div className="text-center mt-16">
            <Link 
              to="/gallery" 
              className="bg-dark-teal text-sky px-8 py-4 rounded-full font-medium hover:bg-rust transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              View All Creations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="py-24 bg-sky">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Baker making cake" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-2"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-teal mb-4">
                Meet the Baker
              </h2>
              <div className="w-20 h-1 bg-rust mb-8"></div>
              <p className="text-teal mb-6 leading-relaxed">
                Hi, I'm Sarah! I've been baking since I was a child, learning first from my grandmother. 
                What started as a passion project has blossomed into Sweet Creations, where I craft 
                custom cakes for life's special moments.
              </p>
              <p className="text-teal mb-8 leading-relaxed">
                Each cake I create is made with premium ingredients, meticulous attention to detail, 
                and most importantly, lots of love.
              </p>
              <Link 
                to="/about" 
                className="bg-dark-teal text-sky px-8 py-4 rounded-full font-medium hover:bg-rust transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-sky/20">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-teal mb-4">
              Our Process
            </h2>
            <div className="w-16 h-1 bg-rust mx-auto mb-6"></div>
            <p className="text-teal max-w-2xl mx-auto leading-relaxed">
              From consultation to celebration, we ensure every step creates the perfect cake for your special occasion.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Consultation",
                description: "We start by understanding your vision, preferences, and requirements for your perfect cake.",
                icon: "https://images.pexels.com/photos/6010353/pexels-photo-6010353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Design & Creation",
                description: "Our expert bakers craft your cake using premium ingredients and meticulous attention to detail.",
                icon: "https://images.pexels.com/photos/6062024/pexels-photo-6062024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Celebration",
                description: "Enjoy a stunning, delicious cake that becomes the centerpiece of your special occasion.",
                icon: "https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-sky rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={step.icon} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold text-dark-teal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-teal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-sky">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-teal mb-4">
              Happy Customers
            </h2>
            <div className="w-16 h-1 bg-rust mx-auto mb-6"></div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-rust text-rust" />
              ))}
            </div>
            <p className="text-teal max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our customers have to say about their Sweet Creations experience.
            </p>
          </motion.div>
          
          <TestimonialSlider />
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-dark-teal text-sky relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/6210764/pexels-photo-6210764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        ></div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                Ready to Order Your Dream Cake?
              </h2>
              <p className="text-lg md:text-xl mb-10 text-sky/90 leading-relaxed">
                Whether it's a birthday, wedding, or special celebration, we're here to create something unforgettable.
              </p>
              <Link 
                to="/contact" 
                className="bg-rust text-sky px-10 py-5 rounded-full font-medium text-lg hover:bg-sky hover:text-dark-teal transition-colors inline-block shadow-md hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;