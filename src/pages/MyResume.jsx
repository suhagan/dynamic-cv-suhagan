import React from 'react';
import './AboutMe.css';
import resumeImage from '../assets/Suhagan.jpeg';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="main-column">
        <h2>Summary</h2>
        <p>
        Skilled in Full-stack Development.NET, analyzing, designing, and coordinating projects having basic knowledge in programming languages like C/C++, C#, and HTML-CSS. A gregarious, independent, flexible and a versatile person capable of multitasking in a multicultural workplace, who excels in innovative thinking and collaboration.
        </p>
        
      </div>
      <div className="side-column">
        <img src={resumeImage} alt="Resume image." />
      </div>
    </div>
  );
}

export default AboutMe;
