import React from 'react';

function AboutMe() {
  return (
    <section>
      <h2>Resume</h2>
      <img src="images/diesel.jpeg" alt="" />
      <div>
        <a href="/Downloads/resume.pdf" target="_blank" download={true}>Download Resume</a>
      </div>
    </section>
  );
}

export default AboutMe;