import React, { useState } from 'react';

const PersonalInfo = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={personalInfo.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={personalInfo.email}
          onChange={handleChange}
        />
        {/* Add more fields as necessary */}
      </form>
    </div>
  );
};

export default PersonalInfo;
