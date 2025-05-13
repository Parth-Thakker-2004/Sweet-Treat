import { motion } from 'framer-motion';
import { cakeData } from '../../data/cakeData';

interface CakeGalleryProps {
  limit?: number;
}

const CakeGallery = ({ limit }: CakeGalleryProps) => {
  const displayedCakes = limit ? cakeData.slice(0, limit) : cakeData;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedCakes.map((cake, index) => (
        <motion.div
          key={cake.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="group"
        >
          <div className="overflow-hidden rounded-lg shadow-md bg-cream">
            <div className="h-64 overflow-hidden">
              <img 
                src={cake.imageUrl} 
                alt={cake.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold mb-2 text-mocha">{cake.name}</h3>
              <p className="text-coffee text-sm mb-3">{cake.description}</p>
              <div className="flex flex-wrap gap-2">
                {cake.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-sand/30 text-coffee rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CakeGallery;