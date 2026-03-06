// Features Component - 4 feature blocks with icons
import React from 'react';
import { features } from '../data/featuresData';

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="section-title">Tại Sao Chọn Chúng Tôi</h2>
          <p className="section-subtitle mx-auto">
           Mỗi phương tiện được xây dựng với niềm đam mê, sự chính xác và cam kết không ngừng với sự xuất sắc.
          </p>
        </div>

        {/* Features Grid - Bootstrap responsive layout */}
        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-12 col-md-6 col-lg-3" key={feature.id}>
              {/* Feature Card */}
              <div className="feature-card h-100 d-flex flex-column">
                {/* Feature Icon */}
                <div className="feature-icon">
                  <i className={`bi ${feature.icon}`}></i>
                </div>

                {/* Feature Title - fixed height for consistent alignment */}
                <h3 className="feature-title" style={{ minHeight: '60px', marginBottom: '0' }}>
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="feature-description flex-grow-1">
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
