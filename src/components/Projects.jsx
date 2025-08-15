
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Fit Coach',
      image: '../public/images/fit-coach.png',
      alt: 'Fit coach project',
      github: 'https://github.com/nikadamant/fit-coach'
    },
    {
      id: 2,
      title: 'Portfolio',
      image: '../public/images/portfolio.png',
      alt: 'Portfolio project',
      github: 'https://github.com/nikadamant/html-portfolio-css-in-html-'
    },
    {
      id: 3,
      title: 'Bose landing page',
      image: '../public/images/bose-landing.png',
      alt: 'Bose landing page project',
      github: 'https://github.com/nikadamant/Landing'
    },
    {
      id: 4,
      title: 'Flexbox pricing table',
      image: '../public/images/flexbox-pricing-table.png',
      alt: 'Flexbox pricing table project',
      github: 'https://github.com/nikadamant/flexbox-pricing-table-project'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <img
                src={project.image}
                alt={project.alt}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <a
                className="project-github"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 