import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-transparent relative overflow-hidden" id="contact-section">
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass bg-white/60 mb-6 font-bold shadow-sm border border-white">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary mr-3 animate-ping"></span>
            <span className="text-brand-primary text-[10px] uppercase tracking-[0.2em]">Connect with our team</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter text-gray-900 leading-[1.1]">
            Visit Our <span className="text-brand-primary drop-shadow-sm">Workshop.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium tracking-wide">
            Stop by for a free consultation or call us to schedule a site visit anywhere in Bangalore.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Contact Details Column (Left) */}
          <div className="lg:col-span-5 space-y-4 animate-fade-in-up">
            {[
              { icon: MapPin, label: "Visit Workshop", value: "66/3, Shivanna Building, Allasandra", sub: "Near Manipal Research Centre, Bangalore" },
              { icon: Phone, label: "Call Directly", value: "+91 72040 97229", sub: "Mon-Sat: 9AM - 6PM" },
              { icon: Mail, label: "Email", value: "snkbuildfabricsolutionssnk@gmail.com", sub: "Fast Response Guaranteed" },
              { icon: Clock, label: "Working Hours", value: "Mon-Sat: 8AM-6PM | Sun: 9AM-2PM", sub: "Open for Consultations" }
            ].map((item, idx) => (
              <div key={idx} className="glass bg-white/60 border-t border-l border-white/80 p-5 md:p-6 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(230,81,0,0.1)] transition-all duration-500 group flex items-start sm:items-center hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-orange-100 flex items-center justify-center shrink-0 border border-white group-hover:from-brand-primary group-hover:to-orange-500 transition-all duration-500 mr-5 shadow-sm group-hover:shadow-[0_10px_20px_rgba(230,81,0,0.3)] mt-1 sm:mt-0">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-brand-primary mb-1.5 opacity-90">{item.label}</h4>
                  <p className="text-gray-900 font-black text-sm md:text-base lg:text-lg leading-tight mb-1.5 break-words tracking-tight">{item.value}</p>
                  <p className="text-gray-500 text-[10px] md:text-[11px] font-bold tracking-wide">{item.sub}</p>
                </div>
              </div>
            ))}
            
            <div className="pt-2 px-1">
              <a 
                href="https://wa.me/917204097229" 
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center w-full bg-gradient-to-r from-brand-primary to-orange-500 text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] sm:text-xs hover:to-orange-400 transition-all duration-300 shadow-[0_10px_20px_rgba(230,81,0,0.2)] hover:shadow-[0_15px_30px_rgba(230,81,0,0.4)] hover:-translate-y-1"
              >
                Instant WhatsApp Support
              </a>
            </div>
          </div>

          {/* Real Map Integration (Right) */}
          <div className="lg:col-span-7 h-[350px] sm:h-[450px] lg:h-[550px] w-full glass bg-white/20 border-t border-l border-white/60 p-2 sm:p-3 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.186971538152!2d77.58999299999999!3d13.087333899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19cc7ced7c5b%3A0xeefffd4f7ae89360!2sSNK.%20Build%20Fabric%20solution!5e0!3m2!1sen!2sin!4v1776612881474!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-[10s] ease-linear group-hover:scale-105 filter contrast-[0.95]"
              ></iframe>
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                <div className="glass bg-white/90 border border-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-brand-primary animate-float">
                  Interactive Map
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
