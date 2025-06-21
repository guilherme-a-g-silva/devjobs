import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">DevJobs</h1>
        <nav>
          <ul className="nav-list">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}