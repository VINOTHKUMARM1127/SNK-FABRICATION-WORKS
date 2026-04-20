import { ShieldCheck, Users, Pickaxe, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified & Trusted",
      desc: "A verified business serving Allasandra & broader Bangalore with a solid 7+ years track record."
    },
    {
      icon: Users,
      title: "Dedicated Experts",
      desc: "A tight-knit, specialized team of 6 certified welders ensuring personal attention to every detail."
    },
    {
      icon: Pickaxe,
      title: "Specialized Engineering",
      desc: "From complex LPG gas & fire pipeline installations to heavy truss works and detailed railings."
    },
    {
      icon: Clock,
      title: "Reliable Operations",
      desc: "Operating 6 days a week (8 AM - 6 PM) and Sunday mornings to ensure your project finishes on time."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-transparent relative overflow-hidden">
      {/* Bright Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-bl from-brand-primary/10 via-amber-400/5 target-to-transparent opacity-80 pointer-events-none animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Content */}
          <div className="relative">
            <div className="inline-flex items-center space-x-2 glass bg-white/70 border border-white rounded-full px-5 py-2 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping"></span>
              <span className="text-brand-primary font-black tracking-widest text-[10px] uppercase">Why S.N.K Fabrication</span>
            </div>
            
            <h3 className="text-4xl lg:text-5xl lg:text-[3.5rem] font-black mb-6 leading-[1.1] text-gray-900 tracking-tighter">
              Expert Built.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500">Verified by Bangalore.</span>
            </h3>
            
            <div className="pl-6 border-l-4 border-brand-primary mb-10 relative">
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed font-medium tracking-wide">
                Founded by <strong className="text-gray-900 font-extrabold">Naveenkumar Sivashankaran</strong>, S.N.K Fabrication Works combines 7+ years of specialized experience with a passionate focus on structural integrity. From heavy-duty commercial pipelines to premium residential custom works, our core team guarantees flawless, verified execution.
              </p>
            </div>

            <button 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Contact us to discuss your project"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-brand-primary to-orange-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:to-orange-400 transition-all shadow-[0_10px_20px_rgba(230,81,0,0.2)] hover:shadow-[0_15px_30px_rgba(230,81,0,0.3)] hover:-translate-y-1 overflow-hidden"
            >
              Discuss Your Project
            </button>
          </div>

          {/* Right Column Staggered Grid */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className={`group glass bg-white/60 p-8 rounded-[2rem] shadow-[0_10px_30px_rgb(0,0,0,0.03)] border-t border-l border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(230,81,0,0.1)] hover:bg-white/90 ${idx % 2 !== 0 ? 'sm:mt-12' : ''}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-white flex items-center justify-center mb-6 transition-all duration-500 shrink-0 border border-brand-primary/10 group-hover:from-brand-primary group-hover:to-orange-500 group-hover:scale-110 shadow-sm group-hover:shadow-[0_10px_20px_rgba(230,81,0,0.3)]">
                  <item.icon className="w-8 h-8 text-brand-primary transition-colors duration-500 group-hover:text-white" aria-hidden="true" />
                </div>
                
                <h4 className="text-lg font-black text-gray-900 mb-3 tracking-wide">{item.title}</h4>
                <p className="text-gray-600 text-[14px] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
