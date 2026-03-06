// Hero Component - Main hero section with Bootstrap Carousel
import React from 'react';
import { heroCarouselImages, heroContent, carouselSettings } from '../data/heroData';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Bootstrap Carousel - Background Layer Only */}
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride={carouselSettings.ride}
        data-bs-interval={carouselSettings.interval}
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {heroCarouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Inner - Slides */}
        <div className="carousel-inner">
          {heroCarouselImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                alt={`Hero slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark Overlay for text readability */}
      <div className="hero-overlay"></div>

      {/* Hero Content - Fixed Overlay */}
      <div className="container hero-content">
        <div className="row">
          <div className="col-lg-6">
            {/* Main Headline */}
            <h1 className="hero-title">
              {heroContent.title}
            </h1>

            {/* Subheadline */}
            <p className="hero-subtitle">
              {heroContent.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="d-flex gap-3 flex-wrap">
              <a href={heroContent.primaryButton.href} className="btn btn-primary-custom">
                {heroContent.primaryButton.text}
              </a>
              <a href={heroContent.secondaryButton.href} className="btn btn-outline-custom">
                {heroContent.secondaryButton.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
