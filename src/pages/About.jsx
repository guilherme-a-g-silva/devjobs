import React from "react"
import reactLogo from "../assets/react.svg"
import viteLogo from "../assets/Vite.js.png"
import { FaReact } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";

export default function About() {
    return (
        <div className="main-about">
            <div className="about-text">
                <div className="about">
                    <h1>About DevJobs</h1>
                    <p>
                    DevJobs is a simple and clean job board where you can explore development job
                    listings, filter by category, location, or keyword, and simulate applying to jobs.
                    </p>
                </div>
                <div className="about">
                    <h2>Tech Stack</h2>
                    <ul>
                        <li>React (with React Router)</li>
                        <li>Context API for global state (submitted jobs)</li>
                        <li>URL Search Params for filters</li>
                        <li>Custom Hooks</li>
                        <li>Vite for development</li>
                    </ul>
                </div>
                <div className="about">
                    <h2>About the Developer</h2>
                    <p>
                    My name is Guilherme Silva and I'm a web developer currently focused on building solid
                    front-end applications with React. This project was built to practice real-world skills
                    like component structure, routing, filtering, and UI logic.
                    </p>
                </div>
                <div className="about">
                    <p>
                        View the source code on{" "}
                        <a href="https://github.com/guilherme-a-g-silva" target="_blank">GitHub</a>.
                    </p>
                </div>
            </div>
            <div className="logos">
                <img src={reactLogo} alt="React Logo" className="brand-logo react"/>
                <img src={viteLogo} alt="Vite Logo" className="brand-logo vite"/>
            </div>
        </div>
    )
}