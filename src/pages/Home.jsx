// Home Page - Main landing page with all sections
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Cars Section */}
      <FeaturedCars />

      {/* Features Section */}
      <Features />

      {/* Showcase Section */}
      <Showcase />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
