import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialData } from '../../data/testimonialData';

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent(prev => (prev + 1) % testimonialData.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  const goToPrev = () => {
    setAutoplay(false);
    setCurrent(prev => (prev - 1 + testimonialData.length) % testimonialData.length);
  };
  
  const goToNext = () => {
    setAutoplay(false);
    setCurrent(prev => (prev + 1) % testimonialData.length);
  };
  
  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center relative"
        >
          <Quote className="text-accent/20 absolute top-6 left-6 w-16 h-16" />
          
          <div className="mb-6">
            <img 
              src={testimonialData[current].avatar} 
              alt={testimonialData[current].name}
              className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-accent/20"
            />
          </div>
          
          <p className="text-gray-600 italic mb-6 text-lg relative z-10">
            "{testimonialData[current].text}"
          </p>
          
          <h3 className="font-serif text-xl font-semibold text-primary">
            {testimonialData[current].name}
          </h3>
          <p className="text-sm text-gray-500">{testimonialData[current].occasion}</p>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center mt-8 gap-3">
        <button 
          onClick={goToPrev}
          className="bg-white text-primary hover:bg-primary hover:text-white transition-colors p-2 rounded-full shadow-md"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={goToNext}
          className="bg-white text-primary hover:bg-primary hover:text-white transition-colors p-2 rounded-full shadow-md"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;