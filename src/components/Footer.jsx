import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Adamant</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/nikita-borysov-b43268335/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/nikadamant" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://t.me" target="_blank">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
