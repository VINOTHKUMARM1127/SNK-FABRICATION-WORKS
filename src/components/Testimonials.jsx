import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, scaleIn, viewportOnce } from '../lib/animations';

const testimonials = [
  {
    text: "SNK Fabrication replaced our villa gates and balcony railings. The finish is extremely premium, and the structural strength is exactly what we wanted. Delivered 2 days before the deadline.",
    author: "Ramesh Kumar",
    location: "Kothanur, Bangalore"
  },
  {
    text: "The precision on the CNC laser cutting for our duplex's front facade was incredible. It has completely transformed the look of our home. Highly professional team and clean welding work.",
    author: "Arjun Sharma",
    location: "Yelahanka, Bangalore"
  },
  {
    text: "Installed industrial grade MS trusses for our godown. They managed the entire heavy lifting and installation within a week. Reliability is their greatest asset.",
    author: "Geetha V.",
    location: "Peenya Industrial Area"
  },
  {
    text: "Best price for SS 304 railings with toughened glass. I surveyed 4 other fabricators but SNK's attention to detail and finishing was superior. Five stars for the execution.",
    author: "Suresh Gowda",
    location: "HSR Layout, Bangalore"
  }
];

const slideVariants = {
  enter: { opacity: 0, scale: 0.95, y: 20 },
  center: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -20 },
};

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <motion.section
      className="py-24 relative overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFEDD5] via-[#F8FAFC] to-[#E0F2FE] animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888031520-5cd5e523315a?auto=format&fit=crop&q=40&w=1200&fm=webp')] opacity-[0.03] bg-cover mix-blend-multiply" role="presentation"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          className="inline-flex items-center space-x-2 glass bg-white/70 border border-white rounded-full px-5 py-2 mb-8 shadow-sm"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping"></span>
          <span className="text-brand-primary text-[10px] uppercase tracking-[0.2em] font-black">Client Stories</span>
        </motion.div>

        <div className="glass bg-white/70 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white shadow-xl hover:shadow-2xl transition-shadow duration-700">
          <div className="mb-6 flex justify-center space-x-2">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-6 h-6 fill-[#D4AF37] animate-float drop-shadow-sm" style={{ animationDelay: `${i * 100}ms` }} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
          </div>

          <div className="h-[280px] md:h-[220px] lg:h-[200px] flex items-center justify-center overflow-hidden mb-4 relative">
            <AnimatePresence mode="wait">
              <motion.h3
                key={active}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-xl md:text-2xl lg:text-3xl italic text-gray-900 font-bold leading-[1.4] tracking-tight absolute inset-0 flex items-center justify-center px-2"
              >
                "{testimonials[active].text}"
              </motion.h3>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="inline-block glass bg-white/90 px-6 py-2 rounded-full border border-gray-100 shadow-sm mt-4"
            >
              <p className="font-extrabold text-brand-primary uppercase tracking-widest text-[10px] sm:text-xs">— {testimonials[active].author}, {testimonials[active].location}</p>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center flex-wrap -space-x-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="group relative flex items-center justify-center min-w-[48px] min-h-[48px]"
              >
                <motion.span
                  className="h-1.5 rounded-full"
                  animate={{
                    width: active === i ? 32 : 8,
                    backgroundColor: active === i ? 'var(--color-brand-primary)' : '#d1d5db',
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
