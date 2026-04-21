import { useState, useEffect } from 'react';

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

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, [active]);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
      setIsFading(false);
    }, 500);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-amber-500 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888031520-5cd5e523315a?auto=format&fit=crop&q=40&w=1200&fm=webp')] opacity-10 bg-cover mix-blend-overlay" role="presentation"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className={`glass bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border-t border-l border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all duration-700 ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="text-white mb-6 flex justify-center space-x-2 drop-shadow-md">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-6 h-6 fill-[#D4AF37] animate-float" style={{ animationDelay: `${i * 100}ms` }} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
          </div>
          
          <div className="h-[280px] md:h-[220px] lg:h-[200px] flex items-center justify-center overflow-hidden mb-4">
            <h3 className="text-xl md:text-2xl lg:text-3xl italic text-white font-medium leading-[1.4] tracking-tight drop-shadow-sm">
              "{testimonials[active].text}"
            </h3>
          </div>

          <div className="inline-block glass bg-white/20 px-6 py-2 rounded-full border border-white/30 mt-4">
            <p className="font-extrabold text-white uppercase tracking-widest text-[10px] sm:text-xs">— {testimonials[active].author}, {testimonials[active].location}</p>
          </div>

          {/* Indicators */}
          <div className="flex justify-center flex-wrap -space-x-2 mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => {
                  setIsFading(true);
                  setTimeout(() => {
                    setActive(i);
                    setIsFading(false);
                  }, 300);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className="group relative flex items-center justify-center min-w-[48px] min-h-[48px]"
              >
                <span className={`h-1.5 transition-all duration-500 rounded-full ${active === i ? 'w-8 bg-white' : 'w-2 bg-white/30 group-hover:bg-white/50'}`} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
