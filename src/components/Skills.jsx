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
              <li className="skill-item" data-tooltip="HTML">
                <SiHtml5 className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="CSS">
                <SiCss3 className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="JavaScript">
                <SiJavascript className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="C#">
                <TbBrandCSharp className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="Python">
                <SiPython className="skill-icon" />
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3 className="skills-title">Frameworks/
                                         Libraries</h3>
            <ul className="skills-list">
              <li className="skill-item" data-tooltip="React">
                <SiReact className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="Node.js">
                <SiNodedotjs className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="Express">
                <SiExpress className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="EJS">
                <SiJavascript className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip=".NET">
                <SiDotnet className="skill-icon" />
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3 className="skills-title">Databases</h3>
            <ul className="skills-list">
              <li className="skill-item" data-tooltip="SQL Server">
                <DiMsqlServer className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="PostgreSQL (basic)">
                <SiPostgresql className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="MongoDB (basic)">
                <SiMongodb className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="Redis (basic)">
                <SiRedis className="skill-icon" />
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3 className="skills-title">Tools</h3>
            <ul className="skills-list">
              <li className="skill-item" data-tooltip="Git">
                <SiGit className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="GitHub">
                <SiGithub className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="Visual Studio">
                <DiVisualstudio className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="Visual Studio Code">
                <TbBrandVscode className="skill-icon" />
              </li>
              <li className="skill-item" data-tooltip="Postman (basic)">
                <SiPostman className="skill-icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 