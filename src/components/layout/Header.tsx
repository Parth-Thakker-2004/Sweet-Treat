import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Cake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cream shadow-md py-3' 
          : 'bg-mocha py-5 shadow-md'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <span className={`p-2 rounded-full ${scrolled ? 'bg-mocha/10' : 'bg-cream/10'}`}>
            <Cake size={28} className={scrolled ? 'text-mocha' : 'text-cream'} />
          </span>
          <span className={`font-serif text-xl md:text-2xl font-medium ${
            scrolled ? 'text-mocha' : 'text-cream'
          }`}>
            Sweet Creations
          </span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => `
                px-3 py-2 text-sm uppercase tracking-wider font-medium transition-all relative
                ${isActive 
                  ? (scrolled ? 'text-coffee font-semibold' : 'text-vanilla font-semibold') 
                  : (scrolled ? 'text-mocha hover:text-coffee' : 'text-cream hover:text-vanilla')
                }
                ${isActive ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-coffee' : ''}
              `}
            >
              {item.name}
            </NavLink>
          ))}
          
          <NavLink 
            to="/contact" 
            className={`ml-2 px-5 py-2 rounded-full text-sm uppercase tracking-wider font-medium transition-all
              ${scrolled 
                ? 'bg-mocha text-cream hover:bg-coffee hover:text-cream shadow-sm' 
                : 'bg-cream text-mocha hover:bg-coffee hover:text-cream shadow-md'
              }`
            }
          >
            Order Now
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 p-2 rounded-full bg-vanilla/20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-cream" />
          ) : (
            <span className={scrolled ? 'text-mocha' : 'text-cream'}>
              <Menu size={24} />
            </span>
          )}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-mocha/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 20 }}
                className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-cream shadow-lg p-8 pt-24"
                onClick={(e) => e.stopPropagation()}
              >
                <nav className="flex flex-col items-start gap-6">
                  {navItems.map((item) => (
                    <NavLink 
                      key={item.path} 
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => `
                        text-lg tracking-wide font-medium transition-all px-2 py-1 border-l-4 pl-4 w-full
                        ${isActive 
                          ? 'text-cream border-coffee font-semibold bg-mocha/50 rounded-r-md' 
                          : 'text-mocha border-transparent hover:border-mocha hover:bg-mocha/30 rounded-r-md'
                        }
                      `}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  
                  <div className="w-full pt-6 mt-6 border-t border-mocha/20">
                    <NavLink 
                      to="/contact" 
                      onClick={() => setIsMenuOpen(false)}
                      className="bg-mocha text-cream hover:bg-coffee transition-colors px-6 py-3 rounded-full font-medium inline-block shadow-md w-full text-center mt-4"
                    >
                      Order Now
                    </NavLink>
                  </div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;