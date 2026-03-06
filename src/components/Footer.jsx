// Footer Component - Brand info, links, social icons
import React from 'react';
import { footerLinks, socialLinks, footerInfo } from '../data/footerData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Brand Column */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="footer-brand">
              <i className={`bi ${footerInfo.brandIcon} me-2`}></i>
              {footerInfo.brandName}
            </div>
            <p className="footer-description">
              {footerInfo.description}
            </p>

            {/* Social Icons */}
            <div>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-icon"
                  aria-label={social.name}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Vehicles Column */}
          <div className="col-6 col-lg-2 mb-4 mb-lg-0">
            <h4 className="footer-heading">Phương tiện</h4>
            {footerLinks.vehicles.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* Company Column */}
          <div className="col-6 col-lg-2 mb-4 mb-lg-0">
            <h4 className="footer-heading">Công ty</h4>
            {footerLinks.company.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* Support Column */}
          <div className="col-6 col-lg-2 mb-4 mb-lg-0">
            <h4 className="footer-heading">Hỗ trợ</h4>
            {footerLinks.support.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="col-lg-2">
            <h4 className="footer-heading">Bản tin</h4>
            <p className="footer-description" style={{fontSize: '13px'}}>
              {footerInfo.newsletterText}
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="mb-0">
            {footerInfo.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
