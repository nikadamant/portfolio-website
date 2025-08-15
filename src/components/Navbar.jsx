
const Navbar = ({ isDarkMode, onToggle }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection('about')}>
              About Me
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection('resume')}>
              Resume
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </li>
        </ul>
        <div className="nav-right">
          <button 
            className="theme-toggle-nav"
            onClick={onToggle}
            aria-label="Toggle theme"
          >
            <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 