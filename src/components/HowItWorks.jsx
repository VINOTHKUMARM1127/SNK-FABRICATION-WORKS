import { Phone, ClipboardCheck, Calculator, Hammer, Truck } from 'lucide-react';

const steps = [
  { icon: Phone, title: "1. Contact Us", desc: "Reach out via call, WhatsApp, or form." },
  { icon: ClipboardCheck, title: "2. Site Visit", desc: "We inspect your site for precise measurements." },
  { icon: Calculator, title: "3. Get Quote", desc: "Receive a transparent, no-hidden-cost estimate." },
  { icon: Hammer, title: "4. Execution", desc: "Skilled fabrication work begins." },
  { icon: Truck, title: "5. Delivery", desc: "On-time installation and handover." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative animate-fade-in-up">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass bg-white/70 border border-white rounded-full px-5 py-2 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping"></span>
            <span className="text-brand-primary font-black tracking-widest text-[10px] uppercase">Process</span>
          </div>
          <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1]">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500 drop-shadow-sm">Works.</span>
          </h3>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start gap-12 md:gap-8 relative">
          {/* Animated Connector Line hidden on mobile */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent -z-10 drop-shadow-sm"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[200px] mx-auto group">
              <div className="w-24 h-24 rounded-[2rem] glass bg-white/80 border-t border-l border-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-8 group-hover:-translate-y-3 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(230,81,0,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <step.icon className="w-10 h-10 text-brand-primary group-hover:scale-110 transition-transform duration-500 relative z-10" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-brand-primary transition-colors duration-300">{step.title}</h4>
              <p className="text-[15px] font-medium text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
