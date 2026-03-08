// Navbar Component - Navigation bar with logo and links
import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-custom fixed-top">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="LUXE MOTORS" className="brand-logo" />
          LUXE MOTORS
        </a>

        {/* Navigation Links */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link nav-link-custom" href="#home">
              Trang chủ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-custom" href="#models">
              Mô hình
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-custom" href="#features">
              Tính năng
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-custom" href="#showcase">
              Trưng bày
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-custom" href="#testimonials">
              Đánh giá
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
