import React from 'react';

function Project({ title, image, appLink, repoLink }) {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <p>
        <a href={appLink} target="_blank" rel="noopener noreferrer">Live Demo</a> | 
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </div>
  );
}

export default Project;