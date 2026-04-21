import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="py-12 sm:py-20 bg-transparent relative overflow-hidden"
      id="contact-section"
    >
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-primary/10 rounded-full blur-[80px] sm:blur-[150px] -translate-y-1/2 -translate-x-1/2 animate-pulse pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-blue-500/5 rounded-full blur-[60px] sm:blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass bg-white/60 mb-6 font-bold shadow-sm border border-white">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary mr-3 animate-ping"></span>
            <span className="text-brand-primary text-[10px] sm:text-xs uppercase tracking-[0.2em]">
              Connect with our team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 tracking-tighter text-gray-900 leading-[1.1]">
            Visit Our{" "}
            <span className="text-brand-primary drop-shadow-sm">Workshop.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[clamp(14px,4vw,18px)] font-medium tracking-wide leading-relaxed px-2">
            Stop by for a free consultation or call us to schedule a site visit
            anywhere in Bangalore.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 lg:items-stretch items-start">
          {/* Contact Details Column (Left) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 lg:space-y-3 animate-fade-in-up flex flex-col">
            {[
              {
                icon: MapPin,
                label: "Visit Workshop",
                value: "66/3, Shivanna Building, Allasandra, Near Manipal Research Centre, Bangalore",
                sub: "",
              },
              {
                icon: Phone,
                label: "Call Directly",
                value: "+91 72040 97229",
                sub: "Mon-Sat: 9AM - 6PM",
              },
              {
                icon: Mail,
                label: "Email",
                value: "snkbuildfabricsolutionssnk@gmail.com",
                sub: "Fast Response Guaranteed",
              },
              {
                icon: Clock,
                label: "Working Hours",
                value: "Mon-Sat: 8AM-6PM | Sun: 9AM-2PM",
                sub: "Open for Consultations",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass bg-white/70 border-t border-l border-white/80 p-4 sm:p-5 lg:p-4 xl:p-5 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(230,81,0,0.12)] transition-all duration-500 group flex flex-col xs:flex-row items-start xs:items-center hover:-translate-y-1 flex-grow"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-2xl lg:rounded-xl bg-gradient-to-br from-brand-primary/10 to-orange-100 flex items-center justify-center shrink-0 border border-white group-hover:from-brand-primary group-hover:to-orange-500 transition-all duration-700 mr-0 xs:mr-5 lg:mr-4 shadow-sm group-hover:shadow-[0_10px_20px_rgba(230,81,0,0.3)] mb-4 xs:mb-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5 text-brand-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="min-w-0 flex-1 w-full translate-y-0 group-hover:-translate-y-0.5 transition-transform duration-500">
                  <h3 className="text-[10px] sm:text-xs lg:text-[10px] font-black uppercase tracking-[0.25em] text-brand-primary mb-1 opacity-90">
                    {item.label}
                  </h3>
                  <p className="text-gray-900 font-semibold text-[clamp(13px,4vw,16px)] lg:text-[14px] xl:text-[15px] leading-snug mb-1 tracking-tight break-words">
                    {item.value}
                  </p>
                  {item.sub && (
                    <p className="text-gray-500 text-[11px] sm:text-sm lg:text-xs font-medium tracking-wide leading-tight">
                      {item.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4 mt-auto">
              <a
                href="https://wa.me/917204097229"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-full bg-gradient-to-r from-brand-primary to-orange-500 text-white py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-xs sm:text-sm hover:brightness-110 transition-all duration-500 shadow-[0_15px_30px_rgba(230,81,0,0.25)] hover:shadow-[0_20px_40px_rgba(230,81,0,0.45)] hover:-translate-y-1.5 active:scale-95"
              >
                Instant WhatsApp Support
              </a>
            </div>
          </div>

          {/* Real Map Integration (Right) */}
          <div
            className="lg:col-span-7 aspect-[4/3] sm:aspect-video lg:aspect-auto w-full glass bg-white/20 border-t border-l border-white/60 p-2 sm:p-3 rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] relative group animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-full h-full rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden relative shadow-inner bg-gray-100 min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.186971538152!2d77.58999299999999!3d13.087333899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19cc7ced7c5b%3A0xeefffd4f7ae89360!2sSNK.%20Build%20Fabric%20solution!5e0!3m2!1sen!2sin!4v1776612881474!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                title="Google Maps showing SNK Build Fabric solution location"
              ></iframe>
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <div className="glass bg-white/90 border border-white shadow-xl px-4 py-2 sm:px-6 sm:py-3 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-brand-primary animate-float">
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
