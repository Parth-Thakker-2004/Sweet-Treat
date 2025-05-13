import { motion } from 'framer-motion';

const AboutPage = () => {
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
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
            >
              About Sweet Creations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl"
            >
              The story behind the cakes you love
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Baker Story */}
      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-2"
            >
              <h2 className="font-serif text-3xl font-bold text-mocha mb-4">
                Meet Sarah, The Baker
              </h2>
              <div className="w-20 h-1 bg-coffee mb-8"></div>
              <p className="text-coffee mb-6 leading-relaxed">
                My journey into the world of cake artistry began in my grandmother's kitchen. 
                As a child, I would stand on a stool beside her, eagerly watching as she transformed 
                simple ingredients into magical creations.
              </p>
              <p className="text-coffee mb-6 leading-relaxed">
                After studying culinary arts with a specialization in pastry, I worked in several 
                high-end bakeries before deciding to pursue my dream of creating custom cakes for 
                special occasions.
              </p>
              <p className="text-coffee leading-relaxed">
                Sweet Creations was born from my passion for both baking and art. I believe that 
                a cake should not only taste delicious but also tell a story and create a memorable 
                experience for every celebration.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/3992776/pexels-photo-3992776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Baker Sarah" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-mocha mb-4">
              Our Cake Creation Process
            </h2>
            <div className="w-16 h-1 bg-coffee mx-auto mb-6"></div>
            <p className="text-coffee">
              From concept to celebration, we ensure every step results in the perfect cake for your special occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Consultation",
                description: "We start with understanding your vision, occasion, and preferences to create the perfect cake concept.",
                icon: "https://images.pexels.com/photos/6010353/pexels-photo-6010353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Design & Preparation",
                description: "We sketch designs, source the finest ingredients, and prepare everything needed for your cake.",
                icon: "https://images.pexels.com/photos/6062024/pexels-photo-6062024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Baking & Decoration",
                description: "Your cake is baked fresh and decorated with meticulous attention to every delicious detail.",
                icon: "https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream/20 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="rounded-full overflow-hidden w-28 h-28 mx-auto mb-6 shadow-sm border-2 border-coffee/20">
                  <img 
                    src={step.icon} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-mocha mb-4">
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
      
      {/* Values */}
      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-mocha mb-4">
              Our Values
            </h2>
            <div className="w-16 h-1 bg-coffee mx-auto mb-6"></div>
            <p className="text-coffee">
              The principles that guide everything we create at Sweet Creations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Quality Ingredients",
                description: "We use only the finest, freshest ingredients in all our creations, from organic eggs to premium chocolate."
              },
              {
                title: "Handcrafted with Love",
                description: "Every cake is made by hand with attention to detail and care, never mass-produced."
              },
              {
                title: "Personalized Experience",
                description: "We believe each celebration is unique, so every cake is customized to reflect your personality and occasion."
              },
              {
                title: "Sustainable Practices",
                description: "We're committed to eco-friendly packaging and responsibly sourced ingredients whenever possible."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream shadow-md rounded-lg p-8 border-l-4 border-coffee"
              >
                <h3 className="font-serif text-xl font-semibold text-mocha mb-3">
                  {value.title}
                </h3>
                <p className="text-coffee leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-mocha text-cream">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Ready to Create Sweet Memories?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-10">
            Let's work together to design the perfect cake for your next special occasion.
          </p>
          <a 
            href="/contact" 
            className="bg-cream text-mocha hover:bg-coffee hover:text-cream transition-colors duration-300 px-8 py-4 rounded-full font-medium inline-block shadow-md"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;