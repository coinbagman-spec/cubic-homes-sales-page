import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { StatsBar } from './components/sections/StatsBar';
import { Collection } from './components/sections/Collection';
import { MaterialStory } from './components/sections/MaterialStory';
import { InteriorGallery } from './components/sections/InteriorGallery';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { TransparentPricing } from './components/sections/TransparentPricing';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30 selection:text-accent-foreground">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Collection />
        <MaterialStory />
        <InteriorGallery />
        <Process />
        <Testimonials />
        <TransparentPricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;