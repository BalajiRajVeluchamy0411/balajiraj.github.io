import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem', background: '#f1f1f1' }}>
            <p>&copy; {new Date().getFullYear()} Balaji Raj Veluchamy. All rights reserved.</p>
            <p>
                <strong>Contact:</strong> <a href="mailto:balajiraj.veluchamy@gmail.com">balajiraj.veluchamy@gmail.com</a> | 
                <a href="tel:+16504508995">(650) 450-8995</a> | 
                <a href="https://www.linkedin.com/in/balajirajveluchamy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </p>
        </footer>
    );
};

export default Footer;