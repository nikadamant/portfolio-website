
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Fit Coach',
      image: '/images/fit-coach.png',
      alt: 'Fit coach project',
      github: 'https://github.com/nikadamant/fit-coach'
    },
    {
      id: 2,
      title: 'Book-notes app',
      image: '/images/book-notes.png',
      alt: 'Book-notes app',
      github: 'https://github.com/nikadamant/book-notes-app'
    },
    {
      id: 3,
      title: 'Simon game',
      image: '/images/simon-game.png',
      alt: 'Simon game',
      github: 'https://github.com/nikadamant/simon-game'
    },
    {
      id: 4,
      title: 'My-blog',
      image: '/images/my-blog.png',
      alt: 'my-blog',
      github: 'https://github.com/nikadamant/my-blog'
    },
    {
      id: 5,
      title: 'poetry-guide',
      image: '/images/poetry-guide.png',
      alt: 'poetry-guide',
      github: 'https://github.com/nikadamant/poetry-guide'
    },
    {
      id: 6,
      title: 'portfolio-website',
      image: '/images/portfolio-website.png',
      alt: 'portfolio-website',
      github: 'https://github.com/nikadamant/portfolio-website'
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