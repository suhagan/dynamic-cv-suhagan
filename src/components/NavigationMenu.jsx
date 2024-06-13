import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavigationMenu.css';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function NavigationMenu() {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleSaveAsPDF = async () => {
    // Exclude the navigation bar from the screenshot
    const element = document.getElementById('resume-content');
  
    // Use html2canvas to capture the screenshot
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    // Create a jsPDF instance
    const pdf = new jsPDF('p', 'pt', 'a4');

    // Calculate the image dimensions to fit within the PDF page
    const imgWidth = 595.28;
    const pageHeight = 841.89;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Add the image to the PDF
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Save the PDF
    pdf.save('resume.pdf');
  };

  
  const handlePrint = () => {
    window.print();
  };

  return (
    <nav className="navigation-menu">
      <ul>
        <li>
        
          <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
            About Me
          </NavLink>
        </li>
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
            My Resume
          </NavLink>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li id="generate-pdf" onClick={handleSaveAsPDF}>Save as PDF</li>
              <li onClick={handlePrint}>Print</li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
            My Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
