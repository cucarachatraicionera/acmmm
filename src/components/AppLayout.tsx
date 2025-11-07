import React from 'react';
import Hero from './property/Hero';
import Features from './property/Features';
import Location from './property/Location';
import PropertyDetails from './property/PropertyDetails';
import Gallery from './property/Gallery';
import PotentialUses from './property/PotentialUses';
import Contact from './property/Contact';
import Footer from './property/Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Location />
      <PropertyDetails />
      <Gallery />
      <PotentialUses />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppLayout;
