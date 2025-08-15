
import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiPostman
} from 'react-icons/si';
import { TbBrandCSharp, TbBrandVscode } from 'react-icons/tb';
import { DiMsqlServer, DiVisualstudio } from 'react-icons/di';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2>Skills</h2>
        <div className="resume-content">
          <div className="skills">
            <h3 className="skills-title">Programming Languages</h3>
            <ul className="skills-list">
              <li className="skill-item">
                <SiHtml5 className="skill-icon" />
                <span>HTML</span>
              </li>
              <li className="skill-item">
                <SiCss3 className="skill-icon" />
                <span>CSS</span>
              </li>
              <li className="skill-item">
                <SiJavascript className="skill-icon" />
                <span>JavaScript</span>
              </li>
              <li className="skill-item">
                <TbBrandCSharp className="skill-icon" />
                <span>C#</span>
              </li>
              <li className="skill-item">
                <SiPython className="skill-icon" />
                <span>Python</span>
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3 className="skills-title">Frameworks/Libraries</h3>
            <ul className="skills-list">
              <li className="skill-item">
                <SiReact className="skill-icon" />
                <span>React</span>
              </li>
              <li className="skill-item">
                <SiNodedotjs className="skill-icon" />
                <span>Node.js</span>
              </li>
              <li className="skill-item">
                <SiExpress className="skill-icon" />
                <span>Express</span>
              </li>
              <li className="skill-item">
                <SiJavascript className="skill-icon" />
                <span>EJS</span>
              </li>
              <li className="skill-item">
                <SiDotnet className="skill-icon" />
                <span>.NET</span>
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3 className="skills-title">Databases</h3>
            <ul className="skills-list">
              <li className="skill-item">
                <DiMsqlServer className="skill-icon" />
                <span>SQL Server</span>
              </li>
              <li className="skill-item">
                <SiPostgresql className="skill-icon" />
                <span>PostgreSQL(basic)</span>
              </li>
              <li className="skill-item">
                <SiMongodb className="skill-icon" />
                <span>MongoDB(basic)</span>
              </li>
              <li className="skill-item">
                <SiRedis className="skill-icon" />
                <span>Redis(basic)</span>
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3 className="skills-title">Tools</h3>
            <ul className="skills-list">
              <li className="skill-item">
                <SiGit className="skill-icon" />
                <span>Git</span>
              </li>
              <li className="skill-item">
                <SiGithub className="skill-icon" />
                <span>GitHub</span>
              </li>              <li className="skill-item">
                <DiVisualstudio className="skill-icon" />
                <span>Visual Studio</span>
              </li>
              <li className="skill-item">
                <TbBrandVscode className="skill-icon" />
                <span>Visual Studio Code</span>
              </li>
              <li className="skill-item">
                <SiPostman className="skill-icon" />
                <span>Postman(basic)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 