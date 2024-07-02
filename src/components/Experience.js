import React, { useState } from 'react';

const Experience = ({ experience, setExperience }) => {
  const handleChange = (index, e) => {
    const newExperience = experience.map((exp, i) => {
      if (i !== index) return exp;
      return { ...exp, [e.target.name]: e.target.value };
    });
    setExperience(newExperience);
  };

  const addExperience = () => {
    setExperience([...experience, { company: '', role: '', duration: '' }]);
  };

  return (
    <div>
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={exp.role}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={exp.duration}
            onChange={(e) => handleChange(index, e)}
          />
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
};

export default Experience;
