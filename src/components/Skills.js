import React, { useState } from 'react';

const Skills = ({ skills, setSkills }) => {
  const handleChange = (e) => {
    setSkills(e.target.value.split(','));
  };

  return (
    <div>
      <h2>Skills</h2>
      <input
        type="text"
        placeholder="Enter skills separated by commas"
        value={skills.join(',')}
        onChange={handleChange}
      />
    </div>
  );
};

export default Skills;
