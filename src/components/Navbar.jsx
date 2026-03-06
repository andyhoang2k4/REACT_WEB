// Navbar Component - Navigation bar with logo and links
import React, { useState } from 'react';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  // Toggle mobile menu
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#home">
          <i className="bi bi-car-front-fill me-2"></i>
          LUXE MOTORS
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#home" onClick={handleLinkClick}>
                Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#models" onClick={handleLinkClick}>
                Mô hình
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#features" onClick={handleLinkClick}>
                Tính năng
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#showcase" onClick={handleLinkClick}>
                Trưng bày
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#testimonials" onClick={handleLinkClick}>
                Đánh giá
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
