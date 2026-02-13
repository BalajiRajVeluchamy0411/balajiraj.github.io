import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Balaji Raj Veluchamy</h1>
            <p style={{ margin: '0.5rem 0' }}>PMP-Certified Project Manager | Program Coordination | Operational Excellence</p>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;