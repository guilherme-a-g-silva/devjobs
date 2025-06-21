import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} DevJobs. All rights reserved.</p>
                <nav>
                <ul className="footer-nav">
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                </ul>
                </nav>
            </div>
        </footer>
    );
}