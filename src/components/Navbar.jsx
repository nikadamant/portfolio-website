
const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default Navbar; 