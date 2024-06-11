import React from 'react';
import './Home.css';
import homeImage from '../assets/woman-programmer.png';

function Home() {
  return (
    <div className="home">
      <div className="main-column">
        <p>
          <i>"You are stepping into my digital realm! Delve into my professional narrative, journey through defining projects, and uncover the essence of my skills and passions. Whether you seek background insights, portfolio exploration, or direct communication, I'm delighted to welcome you. Take your time to traverse the pages and delve deeper into the driving force behind my endeavors. Thank you for visiting!"</i>
        </p>
        <h2>- Suhagan</h2>
      </div>
      <div className="side-column">
        <img src={homeImage} alt="Homepage Image" />
      </div>
    </div>
  );
}

export default Home;
