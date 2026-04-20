import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative h-screen h-[100dvh] min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-label="Hero Section - S.N.K Fabrication Works"
    >
      {/* Optimized LCP Hero Image — WebP, 1200px, eager, high priority */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=60&w=1200&fm=webp"
          alt=""
          role="presentation"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          width="1200"
          height="800"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center' }}
        />
      </div>

      {/* Dark Overlay — no backdrop-blur to avoid paint delay */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(135deg, rgba(11,15,25,0.82) 0%, rgba(11,15,25,0.65) 60%, rgba(11,15,25,0.88) 100%)' }}
        aria-hidden="true"
      />

      {/* Content — CSS animation instead of framer-motion */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 w-full text-center flex flex-col items-center justify-center animate-fade-in-up">

        <div className="inline-flex items-center space-x-3 mb-6 sm:mb-8 bg-white/10 rounded-full px-5 py-2 border border-white/20">
          <div className="w-2 h-2 rounded-full bg-brand-primary animate-ping" aria-hidden="true" />
          <span className="text-white font-extrabold uppercase tracking-[0.2em] text-[10px]">Exceptional Engineering</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-4 sm:mb-6 max-w-4xl mx-auto">
          Premium{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500">
            Fabrication Works
          </span>
          <br className="hidden md:block" />
          {' '}in Bangalore
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-gray-300 mt-2 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium tracking-wide">
          Gates, Grills, Railings &amp; Custom Metal Designs tailored to perfection.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center px-4 sm:px-0">
          <button
            onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center justify-center border border-white/30 bg-white/10 text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-extrabold text-xs md:text-sm uppercase tracking-widest hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl w-full sm:w-auto"
            aria-label="View our project portfolio"
          >
            View Portfolio
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>

          <button
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center justify-center bg-brand-primary text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-extrabold text-xs md:text-sm uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(230,81,0,0.35)] shadow-xl w-full sm:w-auto"
            aria-label="Request a free fabrication estimate"
          >
            Get Estimate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
