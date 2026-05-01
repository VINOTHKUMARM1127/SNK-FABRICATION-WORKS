import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import msFabrication from '../assets/ms.jpg';
import elevationCncCutting from '../assets/cnc.jpg';
import designerMainGates from '../assets/main_gate.jpg';
import safetyGrills from '../assets/grils.jpg';
import stainlessSteelRailings from '../assets/railing.jpg';
import weldingCustomWorks from '../assets/custom.jpg';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const services = [
  {
    id: 1,
    title: 'MS Fabrication Works',
    desc: 'Heavy-duty structural mild steel fabrication for industrial, commercial, and residential projects.',
    img: msFabrication
  },
  {
    id: 2,
    title: 'Elevation CNC Cutting',
    desc: 'High-precision laser cut metal panels and designer elevation facades for modern buildings.',
    img: elevationCncCutting
  },
  {
    id: 3,
    title: 'Designer Main Gates (HPL)',
    desc: 'Premium entrance gates combining MS/SS frames with weather-resistant High-Pressure Laminate boards.',
    img: designerMainGates
  },
  {
    id: 4,
    title: 'Safety Grills',
    desc: 'Contemporary, robust window and balcony grills providing top-tier security without sacrificing aesthetics.',
    img: safetyGrills
  },
  {
    id: 5,
    title: 'Stainless Steel Railings',
    desc: 'Toughened glass and 304-grade stainless steel railings for an elegant finish to staircases and balconies.',
    img: stainlessSteelRailings
  },
  {
    id: 6,
    title: 'Welding & Custom Works',
    desc: 'Expert arc & TIG welding, custom profile bending, and unique architectural metalwork.',
    img: weldingCustomWorks
  }
];

const ServiceCard = ({ service, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      style={{ perspective: 1000 }}
    >
      <Link
        to={`/services#service-${service.id}`}
        className="group block rounded-[2.5rem] overflow-hidden glass bg-white/50 border-t border-l border-white shadow-sm cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
      >
        <motion.div
          animate={{
            rotateY: isHovered ? mousePos.x * 4 : 0,
            rotateX: isHovered ? -mousePos.y * 4 : 0,
            scale: isHovered ? 1.03 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="will-change-transform transform-gpu"
        >
          <div className="h-64 overflow-hidden relative p-3">
            <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative shadow-inner">
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                decoding="async"
                width="600"
                height="256"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          <div className="p-8 pt-4">
            <h4 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300 tracking-tight">{service.title}</h4>
            <p className="text-gray-600 text-[15px] leading-relaxed font-medium line-clamp-1">
              {service.desc}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="services-section">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-brand-primary font-black tracking-widest text-[10px] uppercase mb-4 inline-flex items-center glass bg-white/70 px-5 py-2 rounded-full border border-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-primary mr-3 animate-pulse"></span>
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-500 drop-shadow-sm">Fabrication.</span>
            </h3>
          </div>
          <Link to="/services" className="hidden md:flex items-center text-brand-primary font-black uppercase tracking-widest text-[11px] hover:text-orange-600 transition-colors group bg-white/50 glass px-6 py-3 rounded-full border border-white hover:bg-white hover:shadow-lg shadow-sm">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center md:hidden"
        >
          <Link to="/services" className="inline-flex items-center justify-center bg-gradient-to-r from-brand-primary to-orange-500 text-white font-black uppercase tracking-widest text-xs px-8 py-5 rounded-2xl shadow-[0_10px_20px_rgba(230,81,0,0.2)] hover:shadow-[0_15px_30px_rgba(230,81,0,0.4)] hover:-translate-y-1 transition-all w-full">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
