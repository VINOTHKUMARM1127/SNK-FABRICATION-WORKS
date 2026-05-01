import SEO from '../seo/SEO';
import ContactSection from '../components/ContactSection';
import { Phone, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import msFabrication from '../assets/ms.jpg';
import elevationCncCutting from '../assets/cnc.jpg';
import designerMainGates from '../assets/main_gate.jpg';
import safetyGrills from '../assets/grils.jpg';
import stainlessSteelRailings from '../assets/railing.jpg';
import weldingCustomWorks from '../assets/custom.jpg';

const detailedServices = [
  {
    id: 1,
    title: 'MS Fabrication Works',
    desc: 'We provide heavy-duty structural mild steel fabrication for industrial, commercial, and residential projects. Our expert team ensures high precision and adherence to safety standards. From warehouse trusses to custom framework, we deliver structural integrity that lasts for decades.',
    bullets: ['Industrial-grade structural steel', 'Precision engineering and welding', 'Weather-resistant protective coatings'],
    img: msFabrication,
  },
  {
    id: 2,
    title: 'Elevation CNC Cutting',
    desc: 'Enhance your building\'s aesthetics with our high-precision laser-cut metal panels and designer elevation facades. We offer custom geometric and organic patterns that transform ordinary exteriors into modern architectural masterpieces. Perfect for residential and commercial facades.',
    bullets: ['Flawless laser precision', 'Custom geometric and organic patterns', 'Premium finish and aesthetics'],
    img: elevationCncCutting,
  },
  {
    id: 3,
    title: 'Designer Main Gates (HPL)',
    desc: 'Make a lasting first impression with our premium entrance gates. We combine robust MS and SS frames with weather-resistant High-Pressure Laminate (HPL) boards to create gates that are both highly secure and visually stunning. Automated sliding and swing options available.',
    bullets: ['Weather and UV resistant HPL', 'High-security structural frames', 'Automated motor integration available'],
    img: designerMainGates,
  },
  {
    id: 4,
    title: 'Safety Grills',
    desc: 'Secure your property without compromising on design. Our contemporary, robust window and balcony grills provide top-tier security while maintaining a clean, modern aesthetic. Available in various patterns, from minimalist horizontal lines to intricate decorative designs.',
    bullets: ['Heavy-gauge metal for security', 'Modern and minimalist designs', 'Anti-corrosion treatments'],
    img: safetyGrills,
  },
  {
    id: 5,
    title: 'Stainless Steel Railings',
    desc: 'Add a touch of elegance to your staircases and balconies with our 304-grade stainless steel railings. Combined with toughened glass, these railings offer a sleek, contemporary look while ensuring maximum safety and unobstructed views for your spaces.',
    bullets: ['Premium 304/316 grade stainless steel', 'Toughened safety glass integration', 'Rust-proof and low maintenance'],
    img: stainlessSteelRailings,
  },
  {
    id: 6,
    title: 'Welding & Custom Works',
    desc: 'Got a unique requirement? Our expert technicians specialize in advanced arc and TIG welding, custom profile bending, and unique architectural metalwork. We bring your bespoke designs to life with impeccable craftsmanship and precise execution.',
    bullets: ['Expert Arc and TIG welding', 'Complex architectural metalwork', 'Custom profile bending and shaping'],
    img: weldingCustomWorks,
  }
];

const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore our range of premium fabrication services: MS Fabrication, CNC Cutting, HPL Gates, SS Railings, and more in Bangalore."
      />
      
      {/* Hero Section */}
      <div className="bg-transparent pt-40 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1510154221590-ff63e90a136f?auto=format&fit=crop&q=40&w=1200&fm=webp")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent backdrop-blur-[2px] z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 glass bg-white/70 border border-white rounded-full px-5 py-2 mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-brand-primary text-[10px] uppercase tracking-[0.2em] font-black">Expertise & Quality</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-[1.1] max-w-4xl mx-auto">
            Our Fabrication <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500 drop-shadow-sm">Services.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
            Premium metal fabrication solutions tailored for modern homes and commercial projects.
          </p>
        </div>
      </div>

      {/* Detailed Services Sections */}
      <div className="py-12 md:py-20">
        {detailedServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section 
              key={service.id} 
              id={`service-${service.id}`}
              className="py-16 md:py-24 relative overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}>
                  
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 animate-fade-in-up">
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-1/2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="inline-flex items-center space-x-2 bg-brand-primary/10 rounded-full px-4 py-1.5 mb-6">
                      <span className="text-brand-primary text-[10px] uppercase tracking-[0.2em] font-black">Service 0{index + 1}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1]">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start text-gray-800 font-medium text-base">
                          <CheckCircle2 className="w-6 h-6 text-brand-primary mr-3 flex-shrink-0" />
                          <span className="pt-0.5">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <button onClick={() => window.open("https://wa.me/917204097229?text=I%20need%20a%20quote%20for%20a%20fabrication%20project." , '_blank' )} className="inline-flex items-center justify-center bg-brand-primary text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-full shadow-[0_10px_20px_rgba(230,81,0,0.2)] hover:shadow-[0_15px_30px_rgba(230,81,0,0.4)] hover:-translate-y-1 transition-all group">
                      Get Quote
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Modern CTA Section */}
      <section className="py-24 relative overflow-hidden bg-white" id="contact-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFEDD5] via-[#F8FAFC] to-[#E0F2FE] animate-gradient-shift"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="glass bg-white/70 backdrop-blur-md rounded-[3rem] p-10 md:p-16 border border-white shadow-xl text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">
              Need a custom fabrication solution?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 font-medium">
              Discuss your project requirements with our experts. We provide accurate estimates and quick turnaround times.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a href="tel:+919035653852" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors hover:shadow-lg hover:-translate-y-0.5">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a href="https://wa.me/919035653852" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#20bd5a] transition-colors hover:shadow-lg hover:-translate-y-0.5">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
