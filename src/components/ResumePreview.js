import React from 'react';

const ResumePreview = ({ personalInfo, experience, education, skills }) => {
  return (
    <div>
      <h2>Resume Preview</h2>
      <div>
        <h3>Personal Information</h3>
        <p>Name: {personalInfo.name}</p>
        <p>Email: {personalInfo.email}</p>
      </div>
      <div>
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <p>Company: {exp.company}</p>
            <p>Role: {exp.role}</p>
            <p>Duration: {exp.duration}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <p>Institution: {edu.institution}</p>
            <p>Degree: {edu.degree}</p>
            <p>Year: {edu.year}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Skills</h3>
        <p>{skills.join(', ')}</p>
      </div>
    </div>
  );
};

export default ResumePreview;

