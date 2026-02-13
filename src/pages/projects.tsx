import React from 'react';

const projects = [
  {
    title: 'AI Model Quality & Program Coordination',
    description: 'Managed 12 cross-functional AI initiatives at xAI, achieving 90% quality compliance. Developed structured reporting dashboards and standardized workflow documentation with data-driven mitigation recommendations.',
    link: '#',
    timeframe: 'Sept 2024 - Nov 2025',
    company: 'xAI',
    skills: ['Program Management', 'Quality Metrics', 'Dashboard Development', 'Stakeholder Communication']
  },
  {
    title: 'Lean Six Sigma & Operational Excellence Initiative',
    description: 'Led manufacturing optimization projects at Saint-Gobain delivering $1M+ in annual savings. Reduced packaging machine cycle time by 35%, eliminated 40% of non-value-added forklift movement, and achieved 3.5% annual cost savings through systematic process improvements.',
    link: '#',
    timeframe: 'Jan 2021 - Jul 2023',
    company: 'Saint-Gobain Glass',
    skills: ['Lean Six Sigma', 'Process Optimization', 'Cost Analysis', 'Warehouse Optimization']
  },
  {
    title: 'Inventory Optimization & Demand Forecasting',
    description: 'Led Lean-based inventory optimization using DMAIC methodology at Teradyne. Developed forecasting models using Python, SQL, and Power BI on 12-month datasets, improving excess inventory risk visibility by 75%.',
    link: '#',
    timeframe: 'Jan 2024 - May 2024',
    company: 'Teradyne Inc.',
    skills: ['Python', 'SQL', 'Power BI', 'DMAIC', 'Forecasting']
  },
  {
    title: 'Parking Occupancy Detection & AI Pipeline',
    description: 'Designed end-to-end vision pipeline using Python, OpenCV, and YOLO/RCNN for occupancy classification. Processed 200+ labeled images achieving 90% classification accuracy in process automation and validation.',
    link: '#',
    timeframe: 'Mar 2024 - May 2024',
    company: 'Applied AI/ML Project',
    skills: ['Python', 'Computer Vision', 'Machine Learning', 'Process Automation']
  },
  {
    title: 'Manufacturing Defect Reduction with Data Analytics',
    description: 'Performed advanced data analysis on sensor and process data from manufacturing equipment. Used exploratory data analysis and cleansing techniques to identify patterns, achieving 55% defect reduction in clear glass manufacturing.',
    link: '#',
    timeframe: 'Apr 2022 - Dec 2022',
    company: 'Saint-Gobain Glass',
    skills: ['Data Analysis', 'Python', 'Root Cause Analysis', 'Quality Improvement']
  },
  {
    title: 'KPI Dashboard Development & Executive Reporting',
    description: 'Designed and maintained comprehensive KPI dashboards using Excel and Power BI with 98% data accuracy. Created executive-level portfolio reports highlighting risks, compliance, resources, and strategic alignment.',
    link: '#',
    timeframe: 'Jul 2019 - Dec 2020',
    company: 'Saint-Gobain Glass',
    skills: ['Power BI', 'Advanced Excel', 'Dashboard Design', 'Executive Reporting']
  },
];

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p><strong>{project.company}</strong> | {project.timeframe}</p>
            <p>{project.description}</p>
            <p><strong>Skills:</strong> {project.skills.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;