import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Eagerly load home (above the fold)
import Home from './pages/Home';

// Lazy-load other pages — only loaded when navigated to
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const GalleryPage  = lazy(() => import('./pages/GalleryPage'));
const About        = lazy(() => import('./pages/About'));

const PageSpinner = () => (
  <div className="flex items-center justify-center min-h-screen" aria-label="Loading page">
    <div className="w-12 h-12 rounded-full border-4 border-brand-primary border-t-transparent animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <main className="flex-grow overflow-hidden">
          <Suspense fallback={<PageSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<GalleryPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        
        {/* Sticky WhatsApp Button */}
        <a 
          href="https://wa.me/917204097229" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
          aria-label="Contact S.N.K Fabrication Works via WhatsApp"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt=""
            aria-hidden="true"
            width="32"
            height="32"
            className="w-8 h-8"
            loading="lazy"
          />
          <span className="absolute right-16 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap">
            Chat with us
          </span>
        </a>
      </div>
    </Router>
  );
}

export default App;
