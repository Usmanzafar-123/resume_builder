import React, { useState } from 'react';

const Education = ({ education, setEducation }) => {
  const handleChange = (index, e) => {
    const newEducation = education.map((edu, i) => {
      if (i !== index) return edu;
      return { ...edu, [e.target.name]: e.target.value };
    });
    setEducation(newEducation);
  };

  const addEducation = () => {
    setEducation([...education, { institution: '', degree: '', year: '' }]);
  };

  return (
    <div>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            name="institution"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={edu.year}
            onChange={(e) => handleChange(index, e)}
          />
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
    </div>
  );
};

export default Education;
