// CTA Component - Call to action section for test drive booking
import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        {/* CTA Title */}
        <h2 className="cta-title">
          Book Your Test Drive Today
        </h2>

        {/* CTA Description */}
        <p className="cta-text">
          Experience the thrill of driving a LUXE MOTORS vehicle. Schedule your
          exclusive test drive at your nearest showroom and feel the difference.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="btn btn-primary-custom"
          style={{
            backgroundColor: 'var(--color-white)',
            color: 'var(--color-black)'
          }}
        >
          Schedule Now
        </a>
      </div>
    </section>
  );
};

export default CTA;
