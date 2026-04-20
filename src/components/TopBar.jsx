import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Clock, ShieldCheck, MessageCircle } from 'lucide-react';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Sync hiding with navbar scroll state (20px)
      setIsVisible(window.scrollY < 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`backdrop-blur-md border-b text-[10px] uppercase tracking-widest h-8 hidden md:flex items-center fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isHome ? 'bg-gray-900/40 border-white/10 text-white/90 shadow-2xl' : 'bg-white/80 border-gray-200 text-gray-700 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <a href="tel:+917204097229" aria-label="Call S.N.K Fabrication Works" className={`flex items-center hover:text-brand-primary transition-all duration-300 font-black group ${!isHome ? 'hover:text-brand-primary' : ''}`}>
            <Phone className={`w-3.5 h-3.5 mr-2 text-brand-primary group-hover:scale-125 transition-transform`} aria-hidden="true" />
            <span>+91 72040 97229</span>
          </a>
          <a href="https://wa.me/917204097229" aria-label="Connect with us on WhatsApp" className={`flex items-center transition-all duration-300 font-black group ${isHome ? 'hover:text-[#25D366]' : 'hover:text-[#128C7E]'}`}>
            <MessageCircle className={`w-3.5 h-3.5 mr-2 text-[#25D366] group-hover:scale-125 transition-transform`} aria-hidden="true" />
            <span>WhatsApp Connect</span>
          </a>
        </div>
        <div className="flex items-center space-x-10">
          <div className="flex items-center font-black">
            <Clock className={`w-3.5 h-3.5 mr-2 text-brand-primary ${isHome ? 'animate-pulse' : ''}`} aria-hidden="true" />
            <span>Fast Execution</span>
          </div>
          <div className={`flex items-center font-black border-l pl-10 ml-2 ${isHome ? 'border-white/10' : 'border-gray-200'}`}>
            <ShieldCheck className={`w-3.5 h-3.5 mr-2 text-brand-primary ${isHome ? 'animate-bounce' : ''}`} aria-hidden="true" />
            <span>Verified Quality</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
