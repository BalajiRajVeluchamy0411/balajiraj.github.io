import React from 'react';
import { resumeData } from '../lib/resume';

const Resume: React.FC = () => {
    return (
        <div>
            <h1>{resumeData.name}'s Resume</h1>
            <h2>Contact Information</h2>
            <p>Email: {resumeData.contact.email}</p>
            <p>Phone: {resumeData.contact.phone}</p>
            <h2>Education</h2>
            <ul>
                {resumeData.education.map((edu, index) => (
                    <li key={index}>
                        <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
                    </li>
                ))}
            </ul>
            <h2>Work Experience</h2>
            <ul>
                {resumeData.workExperience.map((job, index) => (
                    <li key={index}>
                        <strong>{job.title}</strong> at {job.company} ({job.years})
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
            <h2>Skills</h2>
            <ul>
                {resumeData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <a href="/resume.pdf" download>Download Resume</a>
        </div>
    );
};

export default Resume;