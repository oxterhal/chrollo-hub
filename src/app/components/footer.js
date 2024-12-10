// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 Horloo Hub. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-discord"></i> Discord
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-kickstarter"></i> Kick
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-youtube"></i> YouTube
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
