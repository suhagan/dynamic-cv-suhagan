// import React from 'react';
// import './MoreInfoModal.css';

// function MoreInfoModal({ show, onClose, project }) {
//   if (!show) {
//     return null;
//   }

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>{project.name}</h2>
//         <p>{project.description}</p>
//       </div>
//     </div>
//   );
// }

// export default MoreInfoModal;

import React from 'react';
import './MoreInfoModal.css';

function MoreInfoModal({ show, onClose, project }) {
  if (!show || !project) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.src} alt={project.title} />
      </div>
    </div>
  );
}

export default MoreInfoModal;
