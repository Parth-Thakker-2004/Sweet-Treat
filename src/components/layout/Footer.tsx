import { Mail, Phone, Instagram, Facebook, MapPin, Heart, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Subscription logic would go here
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };
  
  return (
    <footer className="bg-mocha relative overflow-hidden">
      {/* Subtle pattern overlay for visual interest */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(230,213,172,0.2)_0%,transparent_20%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(230,213,172,0.2)_0%,transparent_20%)]"></div>
      </div>
      
      <div className="container mx-auto py-16 px-6 md:px-8 relative z-10 text-cream">
        {/* Newsletter Section */}
        <div className="mb-16 bg-mocha-10 rounded-lg p-8 shadow-lg backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl font-bold mb-2">Stay Connected</h3>
              <p className="text-cream opacity-90">
                Subscribe to our newsletter for seasonal specials, cake inspiration, and events.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-full text-mocha w-full focus:outline-none focus:ring-2 focus:ring-vanilla"
                  required
                />
                <button 
                  type="submit"
                  className="bg-coffee hover:bg-cream hover:text-mocha text-cream px-6 py-3 rounded-full font-medium transition-colors shadow-md whitespace-nowrap flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl font-bold mb-4">Sweet Creations</h3>
            <p className="mb-6 text-cream opacity-90 leading-relaxed">
              Handcrafted cakes made with love for all your special occasions. Serving Los Angeles and surrounding areas since 2018.
            </p>
            <div className="flex gap-5">
              <a 
                href="https://instagram.com" 
                className="bg-mocha-10 hover:bg-coffee hover:text-cream p-3 rounded-full transition-colors text-cream" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                className="bg-mocha-10 hover:bg-coffee hover:text-cream p-3 rounded-full transition-colors text-cream" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6 border-b border-cream opacity-20 pb-3">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="hover:text-coffee transition-colors flex items-center gap-2 text-cream opacity-90 hover:translate-x-1 duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-coffee opacity-70"></span>
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6 border-b border-cream opacity-20 pb-3">Contact Us</h4>
            <div className="flex flex-col gap-5">
              <a 
                href="mailto:hello@sweetcreations.com" 
                className="flex items-center gap-3 hover:text-coffee transition-colors group"
              >
                <div className="bg-mocha-10 p-3 rounded-full text-vanilla group-hover:bg-coffee opacity-20">
                  <Mail size={18} />
                </div>
                <span>hello@sweetcreations.com</span>
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-3 hover:text-coffee transition-colors group"
              >
                <div className="bg-mocha-10 p-3 rounded-full text-vanilla group-hover:bg-coffee opacity-20">
                  <Phone size={18} />
                </div>
                <span>(123) 456-7890</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="bg-mocha-10 p-3 rounded-full text-vanilla">
                  <MapPin size={18} />
                </div>
                <div>
                  <p>123 Baker Street</p>
                  <p>Los Angeles, CA 90001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream opacity-20 mt-12 pt-8 text-center text-cream opacity-80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="flex items-center gap-1">
            &copy; {currentYear} Sweet Creations. Made with <Heart size={16} className="fill-coffee text-coffee" /> in Los Angeles
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm hover:text-coffee transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-sm hover:text-coffee transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;