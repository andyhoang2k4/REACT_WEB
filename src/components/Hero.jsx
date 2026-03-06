// Hero Component - Main hero section with full-width background
import React from 'react';
import heroBg from '../assets/images/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url(${heroBg})`
      }}
    >
      {/* Dark Overlay for text readability */}
      <div className="hero-overlay"></div>

      {/* Hero Content - Bootstrap container with grid */}
      <div className="container hero-content">
        <div className="row">
          <div className="col-lg-6">
            {/* Main Headline */}
            <h1 className="hero-title">
              Experience The Art of Performance
            </h1>

            {/* Subheadline */}
            <p className="hero-subtitle">
              Discover our exclusive collection of luxury vehicles designed for those who demand excellence.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex gap-3 flex-wrap">
              <a href="#models" className="btn btn-primary-custom">
                Explore Models
              </a>
              <a href="#cta" className="btn btn-outline-custom">
                Book Test Drive
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
