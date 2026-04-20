import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled beyond threshold
      setScrolled(currentScrollY > 20);

      // Hide/Show logic based on direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & passed threshold
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${!showNavbar && !isOpen ? '-translate-y-full' : 'translate-y-0'} ${scrolled || isOpen ? 'glass py-3 top-0 md:top-0' : (location.pathname !== '/' ? 'glass py-3 top-0 md:top-8' : 'bg-gray-900/40 backdrop-blur-md py-3 top-0 md:top-8')} `}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-tr from-brand-primary to-amber-400 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_10px_20px_rgba(230,81,0,0.3)] group-hover:scale-110 transition-all duration-500">
            SNK
          </div>
          <div>
            <h1 className={`text-2xl font-black leading-none bg-clip-text text-transparent bg-gradient-to-r transition-all group-hover:to-brand-primary ${scrolled || isOpen || location.pathname !== '/' ? 'from-gray-900 to-gray-600' : 'from-white to-gray-300'}`}>Fabrication</h1>
            <p className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-brand-primary mt-1">Works</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-extrabold text-sm transition-all hover:-translate-y-1 duration-300 relative group overflow-hidden uppercase tracking-wider ${location.pathname === link.path ? 'text-brand-primary' : (scrolled || isOpen || location.pathname !== '/' ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-brand-primary')}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-brand-primary to-amber-500 transition-all duration-300 ${location.pathname === link.path ? 'translate-x-[-50%] opacity-100' : 'translate-x-[-50%] opacity-0 group-hover:opacity-100'}`}></span>
            </Link>
          ))}
          <button
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full font-extrabold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-[0_8px_20px_rgba(230,81,0,0.25)] bg-gradient-to-r from-brand-primary to-orange-500 text-white hover:shadow-[0_15px_30px_rgba(230,81,0,0.4)] hover:-translate-y-1"
          >
            Get Quote
          </button>
        </div>

        <button
          className={`md:hidden p-2 transition-colors ${scrolled || isOpen || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass flex flex-col pt-2 pb-6 px-4 animate-in slide-in-from-top-2">
          <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 flex flex-col items-center space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium w-full text-center py-2 ${location.pathname === link.path ? 'text-brand-primary bg-blue-50' : 'text-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full bg-gradient-to-r from-brand-primary to-orange-500 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-[0_10px_20px_rgba(230,81,0,0.2)]"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
