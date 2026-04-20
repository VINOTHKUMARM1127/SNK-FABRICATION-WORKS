import { useState, useEffect } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, type: "Main Gates", title: "Modern HPL Sliding Gate", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=60&w=800&fm=webp", desc: "A luxurious 20ft automated sliding gate combining robust mild steel with premium High-Pressure Laminate (HPL) wood finish panels. Designed for maximum security and aesthetic appeal." },
  { id: 2, type: "SS Railings", title: "Glass & SS-304 Railing", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=60&w=800&fm=webp", desc: "Premium grade SS-304 staircase railings integrated with 12mm toughened glass. Features mirror-finish circular profiles and invisible floor mounting for a sleek, modern villa interior." },
  { id: 3, type: "Truss Work", title: "Architectural Roof Truss", img: "https://images.unsplash.com/photo-1503387762-592972158f89?auto=format&fit=crop&q=60&w=800&fm=webp", desc: "Heavy-duty MS structural truss installation for a 5000 sq.ft industrial warehouse. Engineered for high wind resistance with anti-corrosion premier epoxy coating." },
  { id: 4, type: "CNC Cutting", title: "Elevation CNC Facade", img: "https://images.unsplash.com/photo-1518005020252-ee7026df2158?auto=format&fit=crop&q=60&w=800&fm=webp", desc: "Custom geometric CNC laser-cut aluminum composite panels for a commercial building facade. Finished with champagne gold powder coating for a contemporary architectural look." },
  { id: 5, type: "Safety Grills", title: "Geometric Safety Grills", img: "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?auto=format&fit=crop&q=60&w=800&fm=webp", desc: "Minimalist window and balcony safety grills fabricated from heavy-gauge square bars. Features clean geometric lines and a scratch-resistant matte black finish." },
  { id: 6, type: "Truss Work", title: "Commercial Pergola Truss", img: "https://images.unsplash.com/photo-1449156001935-d28bc3df72a5?auto=format&fit=crop&q=60&w=800&fm=webp", desc: "Custom structural steel pergola for a luxury rooftop cafe. Features integrated lighting fixtures and a robust truss frame designed for weather durability." }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll Lock Strategy
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <>
      <section className="py-24 bg-brand-light relative" id="projects-section">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass bg-white/70 border border-white rounded-full px-5 py-2 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping"></span>
              <span className="text-brand-primary font-black tracking-widest text-[10px] uppercase">Portfolio</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-[1.1]">
              Our Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500 drop-shadow-sm">Works.</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium tracking-wide">Explore some of our finest fabrication projects delivered across Bangalore with uncompromising quality and finish.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item) => (
              <div 
                key={item.id} 
                className="group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(230,81,0,0.15)] transition-all duration-500 border border-white glass hover:-translate-y-2 p-2"
                onClick={() => setSelectedProject(item)}
              >
                <div className="w-full h-72 rounded-[1.5rem] overflow-hidden relative shadow-inner">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="288"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-brand-primary text-white text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full mb-3 inline-block shadow-md">
                      {item.type}
                    </span>
                    <h4 className="text-2xl font-black text-white mb-1 flex items-center justify-between tracking-tight">
                      {item.title}
                      <div className="w-10 h-10 rounded-full glass bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/projects" className="inline-flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:to-gray-900 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1">
              View Full Gallery <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal - Moved outside section to ensure viewport centering */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] p-4 sm:p-6 flex items-center justify-center transition-all duration-300" onClick={() => setSelectedProject(null)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md animate-in fade-in duration-300"></div>
          
          <div className="glass bg-white/90 border border-white rounded-[2rem] sm:rounded-[3rem] w-full max-w-4xl max-h-[90dvh] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row z-10" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 bg-white/80 hover:bg-brand-primary text-gray-900 hover:text-white p-2.5 rounded-xl backdrop-blur-md transition-all duration-300 z-30 shadow-sm border border-gray-100/50"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project detail"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid md:grid-cols-5 p-3 overflow-y-auto md:overflow-visible w-full">
              <div className="md:col-span-2 h-64 md:h-full rounded-[2rem] overflow-hidden relative shadow-inner shrink-0">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 p-6 lg:p-12 flex flex-col justify-center space-y-4 md:space-y-5">
                <span className="text-brand-primary text-[11px] font-black uppercase tracking-[0.2em]">{selectedProject.type}</span>
                <h3 className="text-4xl font-black text-gray-900 tracking-tighter leading-[1.1]">{selectedProject.title}</h3>
                <div className="w-16 h-1.5 bg-gradient-to-r from-brand-primary to-amber-500 rounded-full shadow-sm"></div>
                <p className="text-gray-600 text-lg leading-relaxed pt-2 font-medium">
                  {selectedProject.desc}
                </p>
                <button 
                  onClick={() => {
                    setSelectedProject(null);
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="mt-6 bg-gradient-to-r from-brand-primary to-orange-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:to-orange-400 transition-all shadow-[0_10px_20px_rgba(230,81,0,0.2)] hover:shadow-[0_15px_30px_rgba(230,81,0,0.3)] hover:-translate-y-0.5 w-max"
                >
                  Request Similar Look
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
