import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "../assets/bg.jpg";
import { heroZoom, heroContent, heroChild, heroButtonStagger } from "../lib/animations";

const Hero = () => {
  return (
    <section
      className="relative h-screen h-[100dvh] min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-label="Hero Section - SNK Build Fabric Solutions"
    >
      {/* Background with subtle zoom animation — GPU-only transform */}
      <motion.div
        className="absolute inset-0 w-full h-full will-change-transform"
        variants={heroZoom}
        initial="initial"
        animate="animate"
      >
        <img
          src={heroBg}
          alt="Premium Fabrication Works"
          role="presentation"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1200"
          height="800"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "right center",
          }}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,15,25,0.82) 0%, rgba(11,15,25,0.65) 60%, rgba(11,15,25,0.88) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content with staggered children */}
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 w-full text-center flex flex-col items-center justify-center"
        variants={heroContent}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={heroChild}
          className="inline-flex items-center space-x-3 mb-6 sm:mb-8 bg-white/10 rounded-full px-5 py-2 border border-white/20"
        >
          <div
            className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"
            aria-hidden="true"
          />
          <span className="text-white font-extrabold uppercase tracking-[0.2em] text-[10px]">
            Exceptional Engineering
          </span>
        </motion.div>

        <motion.h1
          variants={heroChild}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-4 sm:mb-6 max-w-4xl mx-auto"
        >
          Premium{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500">
            Fabrication Works
          </span>
          <br className="hidden md:block" /> in Bangalore
        </motion.h1>

        <motion.p
          variants={heroChild}
          className="text-base sm:text-lg md:text-2xl text-gray-300 mt-2 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium tracking-wide"
        >
          Gates, Grills, Railings &amp; Custom Metal Designs tailored to
          perfection.
        </motion.p>

        {/* Buttons with scale + fade stagger */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center px-4 sm:px-0">
          <motion.button
            variants={heroButtonStagger}
            custom={0}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document
                .getElementById("projects-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center justify-center border border-white/30 bg-white/10 text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-extrabold text-xs md:text-sm uppercase tracking-widest hover:border-white hover:bg-white hover:text-gray-900 transition-colors duration-300 shadow-lg hover:shadow-2xl w-full sm:w-auto"
            aria-label="View our project portfolio"
          >
            View Portfolio
            <ArrowRight
              className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </motion.button>

          <motion.button
            variants={heroButtonStagger}
            custom={1}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              window.open("https://wa.me/917204097229?text=I%20need%20a%20quote%20for%20a%20fabrication%20project." , '_blank' )
            }
            className="group flex items-center justify-center bg-brand-primary text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-extrabold text-xs md:text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors duration-300 shadow-xl w-full sm:w-auto"
            aria-label="Request a free fabrication estimate"
          >
            Get Quote
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
