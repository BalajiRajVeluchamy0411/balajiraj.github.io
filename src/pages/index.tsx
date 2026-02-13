import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Portfolio</h1>
                <p>
                    Hello! I'm Balaji Raj Veluchamy, a PMP-certified Project Manager with 5+ years of experience leading cross-functional initiatives. I specialize in project lifecycle management, operational excellence, and data-driven decision making across manufacturing, analytics, and operational environments.
                </p>
                <nav>
                    <ul>
                        <li>
                            <Link href="/about">About Me</Link>
                        </li>
                        <li>
                            <Link href="/projects">My Projects</Link>
                        </li>
                        <li>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
                        </li>
                    </ul>
                </nav>
            </main>
            <Footer />
        </div>
    );
};

export default Home;