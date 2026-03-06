// CTA Component - Call to action section for test drive booking
import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="cta-section">
      <div className="container text-center">
        {/* CTA Title */}
        <h2 className="cta-title">
          Đặt Lịch Lái Thử Ngay Hôm Nay
        </h2>

        {/* CTA Description */}
        <p className="cta-text">
          Trải nghiệm sự phấn khích khi lái một chiếc xe LUXE MOTORS. Đặt lịch
          lái thử độc quyền của bạn tại showroom gần nhất và cảm nhận sự khác
          biệt.
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
          Lên lịch ngay
        </a>
      </div>
    </section>
  );
};

export default CTA;
