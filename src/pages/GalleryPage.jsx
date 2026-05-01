import { useState, useEffect } from 'react';
import SEO from '../seo/SEO';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CTA from '../components/CTA';
import { useProjects } from '../context/ProjectContext';

const categories = ["All", "MS Fabrication", "CNC Cutting", "Main Gates", "Safety Grills", "SS Railings", "Custom Welding"];

const GalleryPage = () => {
  const { projects: allProjects, loading } = useProjects();
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();

  // Scroll Lock Strategy
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImg]);

  const filteredProjects = filter === "All" ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <>
      <SEO
        title="Project Gallery"
        description="View our portfolio of premium fabrication works - Gates, Grills, Railings, and Truss Works in Bangalore."
      />

      {/* Redesigned Gallery Hero */}
      <div className="relative pt-40 sm:pt-48 pb-20 sm:pb-24 bg-brand-light overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-brand-primary/5 to-transparent opacity-50" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 animate-fade-in-up">
           <div className="inline-flex items-center space-x-2 bg-white border border-gray-100 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm mb-8 sm:mb-10">
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary break-words">Our Portfolio</span>
           </div>
           
           <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8 sm:mb-10 break-words">
             Crafting Metal <span className="text-brand-primary italic">Masterpieces.</span>
           </h1>
           
           <p className="text-base sm:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
             Witness the fusion of industrial strength and contemporary design. A showcase of precision engineering and premium finishing.
           </p>

           <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-0 sm:space-x-12 opacity-60">
              <div className="text-center w-[40%] sm:w-auto">
                 <p className="text-2xl sm:text-3xl font-black text-gray-900">500+</p>
                 <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-gray-500">Projects</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200" />
              <div className="text-center w-[40%] sm:w-auto">
                 <p className="text-2xl sm:text-3xl font-black text-gray-900">12+</p>
                 <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-gray-500">Years Exp</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200" />
              <div className="text-center w-[40%] sm:w-auto">
                 <p className="text-2xl sm:text-3xl font-black text-gray-900">100%</p>
                 <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-gray-500">Quality</p>
              </div>
           </div>
        </div>
      </div>

      <section className="py-24 bg-transparent min-h-[500px] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-black text-[11px] uppercase tracking-widest transition-all duration-300 shadow-sm ${filter === cat ? 'bg-gradient-to-r from-brand-primary to-orange-500 text-white shadow-[0_10px_20px_rgba(230,81,0,0.2)] -translate-y-1' : 'glass bg-white/60 text-gray-700 hover:bg-white hover:text-brand-primary border border-white hover:shadow-[0_8px_15px_rgba(0,0,0,0.05)] hover:-translate-y-0.5'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-500">
                <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mb-4" />
                <p className="font-bold tracking-widest text-[10px] uppercase">Loading Gallery...</p>
              </div>
            ) : filteredProjects.map((item, i) => (
              <div
                key={item.id}
                className="group relative rounded-[2.5rem] overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(230,81,0,0.15)] transition-all duration-500 border border-white glass hover:-translate-y-2 p-2 aspect-[4/3] lg:aspect-square animate-fade-in-up"
                style={{ animationDelay: `${(i % 3) * 100}ms` }}
                onClick={() => setSelectedImg(item)}
              >
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-inner">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="400"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full glass bg-white/20 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-500">
                      <ZoomIn className="text-white w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass bg-white/90 border border-white px-5 py-3 rounded-2xl translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                      <p className="text-brand-primary text-[9px] font-black uppercase tracking-[0.2em] mb-1">{item.category}</p>
                      <h2 className="font-black text-gray-900 text-lg leading-tight tracking-tight">{item.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 z-[200] p-4 sm:p-6 flex items-center justify-center"
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"></div>

            <motion.div
              className="glass bg-white/90 border border-white rounded-[2rem] sm:rounded-[3rem] w-full max-w-4xl max-h-[90dvh] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative flex flex-col md:flex-row z-10"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <button
                className="absolute top-4 right-4 bg-white/80 hover:bg-brand-primary text-gray-900 hover:text-white p-2.5 rounded-xl backdrop-blur-md transition-all duration-300 z-30 shadow-sm border border-gray-100/50"
                onClick={() => setSelectedImg(null)}
                aria-label="Close project detail"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="grid md:grid-cols-5 p-3 overflow-y-auto md:overflow-visible w-full">
                <div className="md:col-span-2 h-64 md:h-full rounded-[2rem] overflow-hidden relative shadow-inner shrink-0">
                  <img
                    src={selectedImg.img}
                    alt={selectedImg.title}
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="400"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6 lg:p-12 flex flex-col justify-center space-y-4 md:space-y-5">
                  <span className="text-brand-primary text-[11px] font-black uppercase tracking-[0.2em]">
                    {selectedImg.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tighter leading-[1.1]">
                    {selectedImg.title}
                  </h3>
                  <div className="w-16 h-1.5 bg-gradient-to-r from-brand-primary to-amber-500 rounded-full shadow-sm"></div>
                  <p className="text-gray-600 text-lg leading-relaxed pt-2 font-medium">
                    {selectedImg.desc}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedImg(null);
                      navigate('/#contact-section');
                      // Add a small delay for navigation to complete before scrolling
                      setTimeout(() => {
                        document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="mt-6 bg-gradient-to-r from-brand-primary to-orange-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:to-orange-400 transition-all shadow-[0_10px_20px_rgba(230,81,0,0.2)] hover:shadow-[0_15px_30px_rgba(230,81,0,0.3)] hover:-translate-y-0.5 w-max"
                  >
                    Request Similar Look
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </>
  );
};

export default GalleryPage;
