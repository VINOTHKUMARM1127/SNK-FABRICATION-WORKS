import SEO from '../seo/SEO';
import CTA from '../components/CTA';
import HowItWorks from '../components/HowItWorks';

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about S.N.K Fabrication Works. 7+ years of experience in delivering premium fabrication projects in Bangalore."
      />

      <div className="bg-transparent pt-40 pb-16 relative overflow-hidden">
        {/* Architectural Image Background with Fade */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[20s] ease-linear hover:scale-105 opacity-30"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888031520-5cd5e523315a?auto=format&fit=crop&q=80&w=1200")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent backdrop-blur-[2px] z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 glass bg-white/70 border border-white rounded-full px-5 py-2 mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping"></span>
            <span className="text-brand-primary text-[10px] uppercase tracking-[0.2em] font-black">Our Legacy & Vision</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tighter leading-[1.05] break-words">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500 drop-shadow-sm">S.N.K</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl font-medium leading-relaxed tracking-wide">Building the future on a foundation of trust and supreme craftsmanship.</p>
        </div>
      </div>

      <section className="py-24 bg-transparent relative">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/2 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-brand-primary font-black tracking-widest uppercase text-[10px] mb-3">Our Story</h2>
                <h3 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                  7+ Years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500">Excellence.</span>
                </h3>
              </div>
              <p className="text-gray-600 text-[17px] leading-relaxed font-medium">
                Founded with a vision to provide structural solutions that don't just stand the test of time, but also look magnificent. Over the past 7 years, S.N.K Fabrication Works has grown from a small local workshop to one of Bangalore's most trusted premium fabrication partners.
              </p>
              <p className="text-gray-600 text-[17px] leading-relaxed font-medium">
                We believe that every gate, every grill, and every structural truss is a testament to our quality. That's why we use only high-grade materials combined with advanced welding techniques.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-8 border-t border-gray-200/50">
                <div className="glass bg-white/50 p-6 rounded-2xl border border-white">
                  <h4 className="text-4xl lg:text-5xl font-black text-gray-900 mb-2 drop-shadow-sm">100+</h4>
                  <p className="text-brand-primary font-bold text-xs uppercase tracking-widest">Projects Delivered</p>
                </div>
                <div className="glass bg-white/50 p-6 rounded-2xl border border-white">
                  <h4 className="text-4xl lg:text-5xl font-black text-gray-900 mb-2 drop-shadow-sm">100%</h4>
                  <p className="text-brand-primary font-bold text-xs uppercase tracking-widest">Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-amber-500/20 rounded-[3rem] translate-x-6 -translate-y-6"></div>
              <div className="relative z-10 glass bg-white/30 border border-white p-2 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
                  alt="Fabrication Workshop"
                  className="rounded-[2.5rem] w-full h-[500px] object-cover filter contrast-[0.95]"
                />
              </div>
              <div className="absolute -bottom-2 left-2 sm:-bottom-4 sm:left-4 md:-bottom-8 md:-left-8 glass bg-white/90 p-4 sm:p-5 rounded-2xl sm:rounded-[2rem] shadow-[0_20px_40px_rgba(230,81,0,0.15)] z-20 flex items-center space-x-3 sm:space-x-5 border border-white animate-float w-max max-w-[90%]">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-orange-500 text-white rounded-[1.2rem] flex items-center justify-center font-black text-3xl shadow-inner">
                  7+
                </div>
                <div className="pr-2">
                  <p className="font-black text-gray-900 text-lg leading-none">Years</p>
                  <p className="text-brand-primary text-[10px] font-bold uppercase tracking-widest mt-1">Experience</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <HowItWorks />
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 glass bg-white/70 border border-brand-primary/10 rounded-full px-5 py-2 mb-8 shadow-sm animate-fade-in-up">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping"></span>
            <span className="text-brand-primary font-black tracking-widest text-[10px] uppercase">Standards</span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-12 sm:mb-16 tracking-tighter leading-none animate-fade-in-up break-words">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500">Values.</span></h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Uncompromising Quality", desc: "Using top-tier metals, corrosion-resistant finishes, and robust welding for longevity." },
              { title: "Aesthetic Precision", desc: "Every project is measured, cut, and assembled to match complex architectural designs." },
              { title: "Timely Execution", desc: "We respect your time. Our project management ensures delivery exactly when promised." },
            ].map((val, i) => (
              <div key={i} className="glass bg-white border-t border-l border-white/60 p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(230,81,0,0.1)] hover:-translate-y-2 transition-all duration-500 text-left animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-amber-500 rounded-full mb-6"></div>
                <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{val.title}</h4>
                <p className="text-gray-600 font-medium leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default About;
