// Testimonials Component - 3 customer testimonials
import React from 'react';
import { testimonials } from '../data/testimonialsData';

// Helper function to render star rating
const renderStars = (rating) => {
  return Array(rating).fill('').map((_, index) => (
    <i key={index} className="bi bi-star-fill"></i>
  ));
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="section-title">Đánh giá của khách hàng</h2>
          <p className="section-subtitle mx-auto">
            Nghe từ những khách hàng quý của chúng tôi đã trải nghiệm sự xuất sắc của LUXE MOTORS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div className="col-12 col-md-6 col-lg-4" key={testimonial.id}>
              {/* Testimonial Card */}
              <div className="testimonial-card h-100 d-flex flex-column">
                {/* Star Rating */}
                <div className="testimonial-stars">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="testimonial-text flex-grow-1">
                  "{testimonial.text}"
                </p>

                {/* Author Information */}
                <div className="testimonial-author mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
