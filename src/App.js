import React, { useState } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import ResumePreview from './components/ResumePreview';
import './styles/App.css';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '' });
  const [experience, setExperience] = useState([{ company: '', role: '', duration: '' }]);
  const [education, setEducation] = useState([{ institution: '', degree: '', year: '' }]);
  const [skills, setSkills] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="form-container">
        <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        <Experience experience={experience} setExperience={setExperience} />
        <Education education={education} setEducation={setEducation} />
        <Skills skills={skills} setSkills={setSkills} />
      </div>
      <ResumePreview
        personalInfo={personalInfo}
        experience={experience}
        education={education}
        skills={skills}
      />
    </div>
  );
};

export default App;

