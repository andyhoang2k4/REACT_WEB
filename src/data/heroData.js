// Hero data for Hero component
import heroBg1 from '../assets/images/hero-carousel-1.jpg';
import heroBg2 from '../assets/images/hero-carousel-2.jpg';
import heroBg3 from '../assets/images/hero-carousel-3.jpg';

// Hero carousel images - background slides only
export const heroCarouselImages = [
  heroBg1,
  heroBg2,
  heroBg3
];

// Hero content - fixed overlay
export const heroContent = {
  title: 'Trải nghiệm nghệ thuật biểu diễn',
  subtitle: 'Khám phá bộ sưu tập xe sang độc quyền của chúng tôi, được thiết kế cho những ai yêu cầu sự xuất sắc.',
  primaryButton: {
    text: 'Khám phá các mẫu',
    href: '#models'
  },
  secondaryButton: {
    text: 'Đặt lịch lái thử',
    href: '#cta'
  }
};

// Carousel settings
export const carouselSettings = {
  interval: 4000,
  ride: 'carousel',
  fade: true
};
