import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-gray-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-12 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                SNK
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-brand-primary transition-colors duration-300">Fabrication</h2>
                <p className="text-xs text-brand-primary font-semibold tracking-wider uppercase">Works</p>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Premium quality fabrication works in Bangalore. Specializing in gates, grills, railings, and structural steel works for 7+ years.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Follow S.N.K Fabrication on Facebook" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Follow S.N.K Fabrication on Instagram" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-pink-600 hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Follow S.N.K Fabrication on Twitter" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-sky-500 hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-extrabold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Our Projects'].map((item, i) => (
                <li key={i}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 font-medium hover:text-brand-primary hover:translate-x-1 transition-all duration-300 text-sm inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-extrabold mb-6 uppercase tracking-wider text-sm">Our Services</h3>
            <ul className="space-y-3">
              {['Gate Fabrication', 'Grills & Railings', 'Structural Truss', 'Pipeline Work', 'Custom Welding'].map((item, i) => (
                <li key={i}>
                  <Link to="/services" className="text-gray-600 font-medium hover:text-brand-primary hover:translate-x-1 transition-all duration-300 text-sm inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-extrabold mb-6 uppercase tracking-wider text-sm">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm group">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 font-medium">66/3, Ground Floor, Shivanna Building, Allasandra, Bangalore - 560065</span>
              </li>
              <li className="flex items-center text-sm group">
                <Phone className="w-5 h-5 text-brand-primary shrink-0 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 font-medium">+91 72040 97229</span>
              </li>
              <li className="flex items-center text-sm group">
                <Mail className="w-5 h-5 text-brand-primary shrink-0 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 font-medium">snkbuildfabricsolutionssnk@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} S.N.K Fabrication Works. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
