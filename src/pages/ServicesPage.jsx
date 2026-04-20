import SEO from '../seo/SEO';
import CTA from '../components/CTA';
import Services from '../components/Services';
import ContactSection from '../components/ContactSection';

const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore our range of premium fabrication services: MS Fabrication, CNC Cutting, HPL Gates, SS Railings, and more in Bangalore."
      />
      
      {/* Hero Section for Services */}
      <div className="bg-transparent pt-40 pb-16 relative overflow-hidden">
        {/* Decorative Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1510154221590-ff63e90a136f?auto=format&fit=crop&q=80&w=1200")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent backdrop-blur-[2px] z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 glass bg-white/70 border border-white rounded-full px-5 py-2 mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping"></span>
            <span className="text-brand-primary text-[10px] uppercase tracking-[0.2em] font-black">Our Expertise</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tighter leading-[1.05] break-words">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500 drop-shadow-sm">Solutions.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl font-medium leading-relaxed tracking-wide">
            From precision CNC cutting to heavy-duty structural fabrication, we deliver excellence in every weld.
          </p>
        </div>
      </div>

      {/* Main Services Grid (Reusing the Component) */}
      <Services />

      {/* Additional Detail Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Custom Fabrication to Your Exact Specifications</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At S.N.K Fabrication Works, we don't just provide standard solutions. We specialize in custom metalwork that meets the unique requirements of your project. Whether it's a bespoke gate design or a complex industrial structure, our team has the expertise to bring your vision to life.
              </p>
              <ul className="space-y-4">
                {[
                  "High-grade Materials (MS, SS, HPL)",
                  "Advanced Welding Techniques",
                  "Precision Measurement and Execution",
                  "Corrosion-Resistant Finishes"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-700 font-medium">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
                alt="Precision Metalwork" 
                className="rounded-[2.5rem] shadow-2xl relative z-10"
              />
              <div className="absolute inset-0 bg-brand-primary/10 rounded-[2.5rem] rotate-3 -z-10 translate-x-4"></div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <ContactSection />
    </>
  );
};

export default ServicesPage;
