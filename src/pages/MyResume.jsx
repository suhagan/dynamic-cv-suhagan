import React from 'react';
import './MyResume.css';
import resumeImage from '../assets/Suhagan.jpeg';
import experienceData from '../data/experienceData.json';
import skillData from '../data/skillData.json';
import educationData from '../data/educationData.json';

function MyResume() {
  return (
    <div className="my-resume">
      <div className="main-column">
        <h2>Summary</h2>
        <p>
          Skilled in Full-stack Development.NET, analyzing, designing, and coordinating projects having basic knowledge in programming languages like C/C++, C#, and HTML-CSS. A gregarious, independent, flexible and a versatile person capable of multitasking in a multicultural workplace, who excels in innovative thinking and collaboration.
        </p>
        
        <h2>Courses</h2>
        {experienceData.Courses.map((course, index) => (
          <div key={index} className="experience-item">
            <h3>{course.CourseName}</h3>
            <p>{course.Period}</p>
            <p>{course.Institution}, {course.Location}</p>
            <p>{course.Description}</p>
            <p>Tools Used: {course.ToolsUsed.join(', ')}</p>
          </div>
        ))}
      </div>
      <div className="side-column">
        <div className="information">
          <img src={resumeImage} alt="Suhagan" />
          <h3>Suhagan</h3>
          <p>Stockholm, Sweden.<br />
            +46 700 86 65 47 <br /></p>
          <a href="mailto:suhaganmostahid@yahoo.com">suhaganmostahid@yahoo.com</a>
          
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a className="fab fa-linkedin" href="https://www.linkedin.com/in/suhagan-mostahid-914b62100/"></a>
          </div>
        </div>
        
        
        <h3>Key Skills</h3>
        <ul>
          {skillData.KeySkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        
        <h3>Core Competencies</h3>
        <ul>
          {skillData.CoreCompetencies.map((competency, index) => (
            <li key={index}>{competency}</li>
          ))}
        </ul>

        <h3>Basic Knowledge</h3>
        <ul>
          {skillData.BasicKnowledges.map((knowledge, index) => (
            <li key={index}>{knowledge}</li>
          ))}
        </ul>

        <h2>Languages</h2>
        <ul>
          {Object.entries(skillData.Languages).map(([language, proficiency], index) => (
            <li key={index}>{language}: {proficiency}</li>
          ))}
        </ul>

        <h2>Hobbies</h2>
        <ul>
          {skillData.Hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        
        <h2>Education</h2>
        {educationData.Education.map((education, index) => (
          <div key={index} className="education-item">
            <h3>{education.Course}</h3>
            <p>{education.Period}</p>
            <p>{education.Institution}, {education.Location}</p>
            <p>Degree: {education.Degree}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyResume;
