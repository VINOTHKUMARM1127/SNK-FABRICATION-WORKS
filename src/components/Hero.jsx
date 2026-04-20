import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image for LCP Performance */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1920"
          alt=""
          fetchpriority="high"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-right transition-transform duration-[20s] ease-linear hover:scale-110"
        />
      </div>

      {/* Dark Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-brand-dark/90 backdrop-blur-[4px] z-10" />

      {/* Centered Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 w-full h-full text-center flex flex-col items-center justify-center pt-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center w-full animate-float"
        >
          <div className="inline-flex items-center space-x-3 mb-6 sm:mb-8 glass bg-white/10 rounded-full px-5 py-2 border border-white/20">
            <div className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
            <span className="text-white font-extrabold uppercase tracking-[0.2em] text-[10px]">Exceptional Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-sm mb-4 sm:mb-6 max-w-4xl mx-auto break-words">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500 drop-shadow-[0_4px_24px_rgba(230,81,0,0.4)]">Fabrication Works</span><br className="hidden md:block" /> in Bangalore
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-300 mt-2 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium tracking-wide">
            Gates, Grills, Railings & Custom Metal Designs tailored to perfection.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center px-4 sm:px-0">
            <button
              onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-center border border-white/30 glass bg-white/10 text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-extrabold text-xs md:text-sm uppercase tracking-widest hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl w-full sm:w-auto"
            >
              View Portfolio
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-center bg-brand-primary text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-extrabold text-xs md:text-sm uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(230,81,0,0.35)] shadow-xl w-full sm:w-auto"
            >
              Get Estimate
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
