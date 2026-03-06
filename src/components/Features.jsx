// Features Component - 4 feature blocks with icons
import React from 'react';
import { features } from '../data/featuresData';

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle mx-auto">
            Every vehicle is built with passion, precision, and an unwavering commitment to excellence.
          </p>
        </div>

        {/* Features Grid - Bootstrap responsive layout */}
        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-12 col-md-6 col-lg-3" key={feature.id}>
              {/* Feature Card */}
              <div className="feature-card">
                {/* Feature Icon */}
                <div className="feature-icon">
                  <i className={`bi ${feature.icon}`}></i>
                </div>

                {/* Feature Title */}
                <h3 className="feature-title">{feature.title}</h3>

                {/* Feature Description */}
                <p className="feature-description">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
