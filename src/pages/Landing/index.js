import React from "react";

export default function Landing() {
  return (
    <div>
      <div className="hero__section">
        <h1>Ylva Lund</h1>
        <span>Code is Art that Does Something</span>
      </div>
      <div className="after__hero landing__container">
        <h2>Who is Ylva?</h2>
        <p>About</p>
      </div>
      <div className="landing__container">
        <h2>What can Ylva do?</h2>
        <p>Skills</p>
      </div>
      <div className="landing__container">
        <h2>What has Ylva done Already?</h2>
        <p>Projects</p>
      </div>
      <div className="landing__container">
        <h2>How to contact Ylva?</h2>
        <p>Contact</p>
        <a href="https://github.com/YlvaLund">
          <i className="" />
          Github Profile
        </a>
      </div>
    </div>
  );
}
