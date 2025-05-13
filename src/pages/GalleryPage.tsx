import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cakeData, Cake } from '../data/cakeData';

const GalleryPage = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8; // Changed from 12 to 8 for better grid layout

  // Extract all unique tags
  const allTags = Array.from(new Set(cakeData.flatMap(cake => cake.tags)));
  
  // Filter cakes based on selected tag
  const filteredCakes = filter === 'all' 
    ? cakeData 
    : cakeData.filter(cake => cake.tags.includes(filter));

  // Slice filtered cakes for pagination
  const displayedCakes = filteredCakes.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  
  return (
    <div className="pt-28 pb-24">
      {/* Hero Section */}
      <section className="bg-dark-teal text-sky py-20 shadow-md">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Our Cake Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg"
          >
            Browse through our collection of handcrafted cakes for every occasion.
            Each creation is unique and made with attention to detail and love.
          </motion.p>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-sky/20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl font-bold text-dark-teal mb-4">
              Filter By Category
            </h2>
            <div className="w-16 h-1 bg-rust mx-auto mb-6"></div>
          </div>
          
          {/* Filter buttons */}
          <div className="mb-16 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                setFilter('all');
                setPage(1);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow ${
                filter === 'all' 
                  ? 'bg-dark-teal text-sky' 
                  : 'bg-sky text-teal hover:bg-sky/70 border border-teal/20'
              }`}
            >
              All Cakes
            </button>
            
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => {
                  setFilter(tag);
                  setPage(1);
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow ${
                  filter === tag 
                    ? 'bg-dark-teal text-sky' 
                    : 'bg-sky text-teal hover:bg-sky/70 border border-teal/20'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedCakes.map((cake, index) => (
                <motion.div
                  key={cake.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-sky rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative overflow-hidden h-64 cursor-pointer" onClick={() => setSelectedCake(cake)}>
                    <img
                      src={cake.imageUrl}
                      alt={cake.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-sky">
                        <h3 className="font-serif text-lg font-semibold">{cake.name}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-dark-teal mb-2">{cake.name}</h3>
                    <p className="text-teal text-sm mb-4">{cake.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cake.tags.map(tag => (
                        <span 
                          key={`${cake.id}-${tag}`}
                          className="px-3 py-1 bg-dark-teal/5 text-dark-teal text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {filteredCakes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-teal">No cakes found in this category.</p>
              <button
                onClick={() => {
                  setFilter('all');
                  setPage(1);
                }}
                className="mt-4 px-6 py-3 bg-rust text-sky rounded-full hover:bg-dark-teal transition-colors shadow-sm"
              >
                View All Cakes
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {filteredCakes.length > itemsPerPage && (
            <div className="flex justify-center mt-8 gap-2">
              <button
                onClick={() => setPage(page => Math.max(page - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-sky text-dark-teal rounded-full hover:bg-dark-teal/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm font-medium border border-dark-teal/20"
              >
                Previous
              </button>
              
              {Array.from({ length: Math.min(3, Math.ceil(filteredCakes.length / itemsPerPage)) }, (_, i) => {
                // Create a limited page selector with current page in the middle
                let pageNum;
                const totalPages = Math.ceil(filteredCakes.length / itemsPerPage);
                
                if (totalPages <= 3) {
                  pageNum = i + 1;
                } else if (page === 1) {
                  pageNum = i + 1;
                } else if (page === totalPages) {
                  pageNum = totalPages - 2 + i;
                } else {
                  pageNum = page - 1 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      pageNum === page
                        ? 'bg-dark-teal text-sky shadow-sm'
                        : 'bg-sky text-dark-teal hover:bg-dark-teal/10 border border-dark-teal/20'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              <button
                onClick={() => setPage(page => Math.min(page + 1, Math.ceil(filteredCakes.length / itemsPerPage)))}
                disabled={page === Math.ceil(filteredCakes.length / itemsPerPage)}
                className="px-4 py-2 bg-sky text-dark-teal rounded-full hover:bg-dark-teal/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm font-medium border border-dark-teal/20"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Custom Cake CTA */}
      <section className="py-20 bg-sky">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-dark-teal mb-4">
              Don't See What You're Looking For?
            </h2>
            <div className="w-16 h-1 bg-rust mx-auto mb-8"></div>
            <p className="text-teal mb-10 leading-relaxed">
              Our skilled bakers can create a custom cake for any occasion. Tell us about your vision, 
              and we'll bring it to life with the perfect blend of flavors and design.
            </p>
            <a 
              href="/contact" 
              className="bg-rust hover:bg-dark-teal transition-colors duration-300 text-sky px-8 py-4 rounded-full font-medium inline-block shadow-md hover:shadow-lg"
            >
              Request a Custom Cake
            </a>
          </div>
        </div>
      </section>
      
      {/* Cake Detail Modal */}
      <AnimatePresence>
        {selectedCake && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCake(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-sky rounded-lg max-w-4xl w-full mx-auto overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-80 md:h-auto">
                  <img 
                    src={selectedCake.imageUrl} 
                    alt={selectedCake.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-2xl font-bold text-dark-teal mb-3">{selectedCake.name}</h3>
                    <button 
                      onClick={() => setSelectedCake(null)}
                      className="text-teal hover:text-dark-teal"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                  <div className="w-16 h-1 bg-rust mb-5"></div>
                  <p className="text-teal mb-6 leading-relaxed">{selectedCake.description}</p>
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-teal/70 mb-2">Categories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCake.tags.map(tag => (
                        <span 
                          key={`modal-${selectedCake.id}-${tag}`}
                          className="px-3 py-1 bg-dark-teal/10 text-dark-teal text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href="/contact" 
                      className="bg-dark-teal text-sky px-6 py-2 rounded-full hover:bg-rust transition-colors shadow-sm flex-1 text-center"
                    >
                      Request This Cake
                    </a>
                    <button
                      onClick={() => setSelectedCake(null)} 
                      className="border border-teal/30 px-6 py-2 rounded-full hover:bg-sky/70 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;