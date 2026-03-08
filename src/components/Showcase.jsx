// Showcase Component - Split layout with image and description
import React from 'react';
import { showcaseData } from '../data/showcaseData';
import checkIcon from '../assets/icons/check-circle-fill.svg';

const Showcase = () => {
  return (
    <section id="showcase" className="section section-bg-light">
      <div className="container">
        <div className="row g-0">
          {/* Left Side - Large Car Image */}
          <div className="col-lg-7">
            <img
              src={showcaseData.image}
              alt="Featured Car"
              className="showcase-img"
            />
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-5">
            <div className="showcase-content bg-white h-100">
              {/* Title */}
              <h2 className="showcase-title">
                {showcaseData.title}
              </h2>

              {/* Description */}
              <p className="showcase-description">
                {showcaseData.description}
              </p>

              {/* Features List */}
              <ul className="showcase-features-list">
                {showcaseData.features.map((feature, index) => (
                  <li key={index}>
                    <img src={checkIcon} alt="" className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="btn btn-dark-custom">
                {showcaseData.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
