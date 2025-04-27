import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Partnering with Sebang has transformed our business. The product quality is exceptional, and the support we receive is unmatched. Our customers consistently praise the reliability of Sebang batteries.",
    name: "Michael Reynolds",
    company: "Reynolds Auto Parts, CA",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "The exclusive territory rights have been crucial for our growth. We've seen a 40% increase in our battery sales since becoming a Sebang dealer, and their marketing support has been invaluable.",
    name: "Sarah Johnson",
    company: "Johnson Industrial Supply, TX",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "The technical training Sebang provides keeps our team knowledgeable and confident. Their reliable supply chain ensures we always have products in stock, even during peak demand periods.",
    name: "David Martinez",
    company: "Power Solutions Inc., FL",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Dealers Say</h2>
          <p className="text-neutral-100 max-w-2xl mx-auto">Hear directly from our partners about their experience as Sebang authorized dealers.</p>
        </motion.div>
        
        <div className="testimonial-slider relative">
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white text-neutral-900 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-accent flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current h-4 w-4" />
                    ))}
                  </div>
                </div>
                <p className="italic text-neutral-700 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="mr-4 w-12 h-12 bg-neutral-200 rounded-full overflow-hidden">
                    <img src={testimonial.avatar} alt={`${testimonial.name} portrait`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile testimonial slider */}
          <div className="md:hidden">
            <motion.div
              key={activeIndex}
              className="bg-white text-neutral-900 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-accent flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current h-4 w-4" />
                  ))}
                </div>
              </div>
              <p className="italic text-neutral-700 mb-6">{testimonials[activeIndex].text}</p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 bg-neutral-200 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={`${testimonials[activeIndex].name} portrait`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="font-medium text-neutral-900">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-neutral-600">{testimonials[activeIndex].company}</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-8 text-center">
            <button 
              onClick={handlePrev}
              className="mx-2 bg-white text-primary h-10 w-10 rounded-full inline-flex items-center justify-center hover:bg-neutral-100 transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="mx-2 bg-white text-primary h-10 w-10 rounded-full inline-flex items-center justify-center hover:bg-neutral-100 transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
