import SEO from '../seo/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import ContactSection from '../components/ContactSection';

import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Services />
      <Projects />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <ContactSection />
    </>
  );
};

export default Home;
