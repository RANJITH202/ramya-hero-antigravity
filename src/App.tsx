import { useEffect } from 'react';
import { Hero } from './sections/Hero';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { IntroGrid } from './sections/IntroGrid';
import { WhyChooseMe } from './sections/WhyChooseMe';
import { Footer } from './sections/Footer';
import { siteConfig } from './config';
import './App.css';

function App() {
  useEffect(() => {
    // Update document metadata
    if (siteConfig.siteTitle) {
      document.title = siteConfig.siteTitle;
    }
    if (siteConfig.siteDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', siteConfig.siteDescription);
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden bg-charcoal">
      {/* Hero Section - Premium Editorial Design */}
      <Hero />
      <div id="collection"><FeaturedProjects /></div>
      <div id="story"><IntroGrid /></div>
      <div id="craft"><WhyChooseMe /></div>
      <div id="contact"><Footer /></div>
    </main>
  );
}

export default App;
