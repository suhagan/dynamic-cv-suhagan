import React from 'react';
import { useState } from 'react';
import './ContactMe.css';
import aboutImage from '../assets/female-developer.png';


function ContactMe() {
        const [showModal, setShowModal] = useState(false);
      
        const handleSubmit = (e) => {
          e.preventDefault();
          setShowModal(true);
        };
      
        const handleCloseModal = () => {
          setShowModal(false);
        };
  return (
  
<div className="contact-me">
      <div className="main-column">
        <h2>Thanks for Visiting!</h2>
        <p>
          <i>"You have been through my digital realm! Delve into my professional narrative, journey through defining projects, and uncover the essence of my skills and passions. Whether you seek background insights, portfolio exploration, or direct communication, I'm delighted to welcome you. Take your time to traverse the pages and delve deeper into the driving force behind my endeavors. If you have any query about me and my work, or you want to collaborate working with me, send me a message, please."</i>
        </p>
        
      </div>
      <div className="side-column">
      
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <p>Message Sent!</p>
            </div>
          </div>
        )}
        </div>
    </div>

  );
}

export default ContactMe;
