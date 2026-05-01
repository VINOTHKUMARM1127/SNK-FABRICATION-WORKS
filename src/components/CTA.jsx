import { PhoneCall, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, scaleIn, viewportOnce } from '../lib/animations';

const CTA = () => {
  return (
    <motion.section
      className="py-16 bg-transparent relative overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {/* Background Deep Accents */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888031520-5cd5e523315a?auto=format&fit=crop&q=40&w=1200&fm=webp')] opacity-10 bg-cover mix-blend-overlay" role="presentation"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="glass bg-gradient-to-br from-white/90 to-white/40 border-t border-l border-white/60 rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_80px_rgba(230,81,0,0.08)] relative overflow-hidden group hover:shadow-[0_40px_100px_rgba(230,81,0,0.12)] transition-shadow duration-700"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full glass bg-white/60 mb-6 border border-brand-primary/20"
              variants={scaleIn}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-primary mr-3 animate-ping"></span>
              <span className="text-brand-primary text-[10px] font-black uppercase tracking-widest">Limited slots for site visits</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tighter leading-[1.1]">
              Ready to construct your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500">Metal Vision?</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-10 font-medium leading-relaxed tracking-wide">
              Whether it's heavy-duty industrial fabrication or luxury residential railings, our expert team guarantees precision engineering.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:+917204097229"
                aria-label="Call S.N.K Fabrication Works for a quote"
                className="group/btn relative inline-flex items-center justify-center bg-gradient-to-r from-brand-primary to-orange-500 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all hover:to-orange-400 shadow-[0_8px_20px_rgba(230,81,0,0.3)] hover:shadow-[0_15px_30px_rgba(230,81,0,0.4)] active:scale-95 w-full sm:w-auto"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <PhoneCall className="w-4 h-4 mr-3" aria-hidden="true" />
                Call Us
              </motion.a>

              <motion.a
                href="https://wa.me/917204097229"
                target="_blank" rel="noreferrer"
                aria-label="Chat with S.N.K Fabrication Works on WhatsApp"
                className="group/btn relative inline-flex items-center justify-center glass bg-white/80 border-t border-l border-white text-gray-900 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all hover:bg-white hover:text-brand-primary shadow-lg active:scale-95 w-full sm:w-auto"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-4 h-4 mr-3 text-[#25D366] group-hover/btn:scale-110 transition-transform" aria-hidden="true" />
                WhatsApp Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA;
