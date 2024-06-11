import React from 'react';
import './AboutMe.css';
import aboutImage from '../assets/female-developer.png';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="main-column">
        <h2>A brief about me</h2>
        <p>
          Renowned for being interested in expanding skills in Full-stack Development .NET along with analyzing, designing, and coordinating projects. Having basic understandings and knowledge in programming languages (especially C/C++, C#, HTML-CSS) with the ability to analyze and solve problems.
        </p>
        <p>
          A person who is gregarious, independent, flexible, and versatile, who can operate in many environments and with different people, and who is familiar with multitasking and functioning in a multicultural workplace. Innovative thinker who excels while collaborating with members of other teams to provide advantages for the organization.
        </p>
        <div className="box-container">
          <div className="box">
            <h3><span> Skills: </span> Fullstack Developer, Problem solving, Team work.</h3>
            <h3><span> Languages: </span> English, Swedish.</h3>
            <h3><span> Experience: </span> 00 Year(s)</h3>
            <h3><span> Freelance: </span> Available</h3>
            <h3><span> Status: </span> Available</h3>
          </div>
        </div>
      </div>
      <div className="side-column">
        <img src={aboutImage} alt="Main image of About Me page." />
      </div>
    </div>
  );
}

export default AboutMe;
