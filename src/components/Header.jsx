import React from "react";
import { Link } from "react-router-dom";
// import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className="header bg-gray-100 text-gray-800">
      {/* Topbar */}
      <div className="topbar flex items-center py-2 bg-[#01455D] shadow-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          {/* Contact Info */}
          <div className="contact-info flex items-center gap-4 text-sm text-white">
            <div className="flex items-center gap-1">
              <i className="bi bi-envelope"></i>
              <a href="mailto:hello@xtocast.com">hello@xtocast.com</a>
            </div>
            <div className="flex items-center gap-1">
              <i className="bi bi-telephone"></i>
              <span>+233551196764</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-links hidden md:flex items-center gap-3">
            <a href="http://x.com/xtocast" className="text-blue-400">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://facebook.com/@xtocast" className="text-blue-600">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com/@xtocast" className="text-pink-500">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://youtube.com/@xtocast" className="text-red-600">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/company/xtocast/" className="text-blue-700">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="mainHeader py-4 bg-white">
        <div className="container mx-auto">
          <nav className="navigation flex items-center justify-between">
            {/* Logo */}
            <a className="nav-brand" href="#">
              <img src="./" className="h-10" alt="Logo" />
            </a>

            {/* Toggle Button for Mobile (optional) */}
            <div className="nav-toggle md:hidden"> {/* Add icon here */}</div>

            {/* Menu */}
            <div className="nav-menus-wrapper hidden md:flex items-center space-x-6">
              <ul className="flex items-center space-x-4">
                <Link className="text-blue-600"  to="/home">
                Home
                </Link>
                <li>
                  <a href="evoting.html">Evoting</a>
                </li>
                <Link to='/donation'>
                Donation
                </Link>
                <li>
                  <a href="events.html">Events</a>
                </li>
                <li>
                  <a href="results.html">Results</a>
                </li>
                <li>
                  <a href="our-blog.html">Our Blog</a>
                </li>
                {/* Dropdown */}
                <li className="relative group">
                  <a href="#" className="flex items-center">
                    Pages <span className="ml-1">▼</span>
                  </a>
                  <ul className="nav-dropdown nav-submenu absolute hidden group-hover:block bg-white shadow-lg rounded py-2 mt-1 w-48">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="pages/about-us.html">About Us</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="pages/contact-us.html">Contact Us</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="pages/help-center.html">Help Center</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="pages/careers.html">Careers</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="pages/our-sponsors.html">Our Sponsors</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="pages/privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="pages/terms-and-conditions.html">Terms & Conditions</a>
                    </li>
                  </ul>
                </li>
                <li className="text-red-500 font-semibold">
                  <a href="dashboard.xtocast.com">Host Event</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
