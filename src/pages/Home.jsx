import { lazy, Suspense } from 'react';
import SEO from '../seo/SEO';
import Hero from '../components/Hero';

// Lazy-load all below-the-fold sections to reduce initial bundle
const Services     = lazy(() => import('../components/Services'));
const Projects     = lazy(() => import('../components/Projects'));
const HowItWorks   = lazy(() => import('../components/HowItWorks'));
const WhyChooseUs  = lazy(() => import('../components/WhyChooseUs'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const CTA          = lazy(() => import('../components/CTA'));
const ContactSection = lazy(() => import('../components/ContactSection'));

// Simple, lightweight skeleton for lazy sections
const SectionSkeleton = () => (
  <div className="w-full py-24 flex items-center justify-center" aria-hidden="true">
    <div className="w-12 h-12 rounded-full border-4 border-brand-primary border-t-transparent animate-spin opacity-40" />
  </div>
);

const Home = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CTA />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
    </>
  );
};

export default Home;

