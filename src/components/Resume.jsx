import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2>My Resume</h2>
        <hr />
        <div className="resume-content">
          <div className="education">
            <h3>Education</h3>
            <p>BS in Computer Science, XYZ University</p>
          </div>
          <div className="work-experience">
            <h3>Work Experience</h3>
            <p>Frontend Developer at ABC Corp</p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>C#, ASP.NET Core</li>
              <li>Python</li>
              <li>HTML, CSS, JavaScript</li>
              <li>React, Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 