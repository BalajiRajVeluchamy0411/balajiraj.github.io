import React from 'react';

const Resume: React.FC = () => {
    return (
        <div>
            <h1>Balaji Raj Veluchamy - Resume</h1>
            <p>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Full Resume (PDF)</a>
            </p>
            
            <h2>Professional Summary</h2>
            <p>
                PMP-certified Project Manager with 5+ years of experience leading cross-functional initiatives across manufacturing, analytics, and operational environments. Proven track record managing multiple projects through full lifecycle—from scope definition and planning to execution, risk mitigation, stakeholder communication, and performance tracking.
            </p>
            
            <h2>Contact Information</h2>
            <p>
                <strong>Email:</strong> balajiraj.veluchamy@gmail.com<br />
                <strong>Phone:</strong> (650) 450-8995<br />
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/balajirajveluchamy" target="_blank" rel="noopener noreferrer">linkedin.com/in/balajirajveluchamy</a>
            </p>
            
            <h2>Education</h2>
            <ul>
                <li><strong>M.S. Business Analytics</strong> - Arizona State University (Aug 2023 - May 2024) | GPA: 4.0/4.0</li>
                <li><strong>B.E. Automobile Engineering</strong> - Anna University (Jun 2015 - May 2019) | GPA: 7.7/10</li>
            </ul>
            
            <h2>Certifications</h2>
            <ul>
                <li>Project Management Professional (PMP) - 4278242 (Jan 2026)</li>
                <li>Microsoft Certified: Power BI Data Analyst Associate - E5257C-3B754E (Dec 2025)</li>
                <li>Six Sigma Yellow Belt: Workplace Layout Analysis (Jul 2022)</li>
            </ul>
            
            <h2>Key Skills</h2>
            <ul>
                <li><strong>Project Management:</strong> Project Lifecycle, Scope Definition, WBS, Schedule Management, Risk Management, Budget Tracking, Stakeholder Communication</li>
                <li><strong>Operational Excellence:</strong> Process Optimization, KPI Development, DMAIC, Kaizen, Value Stream Mapping</li>
                <li><strong>Data & Analytics:</strong> Power BI, Advanced Excel, SQL, Python, Dashboard Development</li>
                <li><strong>Tools:</strong> JIRA, Agile, Microsoft Office Suite, Documentation</li>
            </ul>
        </div>
    );
};

export default Resume;