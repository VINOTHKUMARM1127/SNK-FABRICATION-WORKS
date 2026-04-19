import SEO from '../seo/SEO';
import CTA from '../components/CTA';
import ContactSection from '../components/ContactSection';
import { ShieldCheck } from 'lucide-react';
import msFabrication from '../assets/ms.jpg';
import elevationCncCutting from '../assets/cnc.jpg';
import designerMainGates from '../assets/main_gate.jpg';
import safetyGrills from '../assets/grils.jpg';
import stainlessSteelRailings from '../assets/railing.jpg';
import weldingCustomWorks from '../assets/custom.jpg';

const serviceDetails = [
  {
    title: "MS Fabrication Works",
    desc: "We deliver heavy-duty mild steel structural fabrication for industrial sheds, warehouses, and complex commercial architectures designed to last a lifetime.",
    benefits: ["High tensile strength", "Structural integrity", "Anti-rust premier coating"],
    img: msFabrication
  },
  {
    title: "Elevation CNC Cutting",
    desc: "Transform your building's exterior with precision-cut architectural screens. We provide exact CNC laser cutting for custom intricate metal facade designs.",
    benefits: ["Custom geometric patterns", "Precise laser finish", "Modern architectural aesthetic"],
    img: elevationCncCutting
  },
  {
    title: "Designer Main Gates (HPL)",
    desc: "Make a striking first impression. We combine robust metal frameworks with premium High-Pressure Laminate (HPL) sheets to create stunning, wood-finish modern sliding and swing gates.",
    benefits: ["Weather & UV resistant", "Motorized compatibility", "Luxurious wood-texture appearance"],
    img: designerMainGates
  },
  {
    title: "Safety Grills",
    desc: "Security should not come at the cost of design. Our contemporary window and balcony safety grills feature clean lines, geometric layouts, and heavy-duty strength.",
    benefits: ["Heavy gauge steel", "Modern geometric designs", "Powder-coated smooth finish"],
    img: safetyGrills
  },
  {
    title: "Stainless Steel Railings",
    desc: "We fabricate and install premium 304/316 grade stainless steel railings, often integrated with toughened glass, for sleek, modern staircases and balconies.",
    benefits: ["Corrosion resistant", "Toughened glass integration", "Mirror or brushed finish"],
    img: stainlessSteelRailings
  },
  {
    title: "Welding & Custom Works",
    desc: "From industrial piping to unique custom architectural metal elements, our certified welders provide high-grade TIG and ARC welding services.",
    benefits: ["Certified professional welders", "Flawless joint finishing", "Custom profile bending"],
    img: weldingCustomWorks
  }
];

const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Our Services" 
        description="Detailed fabrication services including Premium Gates, Grills, Railings, Truss Work, and Pipeline Installation in Bangalore." 
      />
      
      {/* Page Header */}
      <div className="bg-transparent pt-40 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[20s] ease-linear hover:scale-105 opacity-30"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1920")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent backdrop-blur-[2px] z-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 glass bg-white/70 border border-white rounded-full px-5 py-2 mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping"></span>
            <span className="text-brand-primary text-[10px] uppercase tracking-[0.2em] font-black">Engineering Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-[1.05]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500 drop-shadow-sm">Services.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl font-medium leading-relaxed tracking-wide">Expert fabrication solutions tailored for structural strength and premium aesthetic finish.</p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-24 bg-transparent relative">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4 translate-y-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 space-y-32 relative z-10">
          {serviceDetails.map((service, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} group`}>
              <div className="w-full md:w-1/2 relative animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-orange-100 translate-x-4 translate-y-4 rounded-[2rem] transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <div className="relative z-10 w-full h-[450px] rounded-[2rem] overflow-hidden glass border border-white p-2">
                   <div className="w-full h-full rounded-[1.5rem] overflow-hidden shadow-inner relative">
                     <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter contrast-[0.95]" />
                   </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tighter leading-none">{service.title}</h2>
                <div className="w-16 h-1.5 bg-gradient-to-r from-brand-primary to-amber-500 rounded-full mb-8 shadow-sm"></div>
                <p className="text-gray-600 text-lg lg:text-xl mb-10 leading-relaxed font-medium tracking-wide">
                  {service.desc}
                </p>
                <div className="space-y-5 mb-12">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-gray-700 bg-white/50 glass px-5 py-3 rounded-2xl w-full sm:w-max border-white">
                      <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center mr-4 shrink-0">
                        <ShieldCheck className="w-4 h-4 text-brand-primary" />
                      </div>
                      <span className="font-extrabold text-[15px]">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:to-gray-900 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1"
                >
                  Get Quote for this
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <ContactSection />
    </>
  );
};

export default ServicesPage;
