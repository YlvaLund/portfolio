import React from "react";

export default function Landing() {
  return (
    <div>
      <div className="hero__section">
        <h1>Ylva Lund</h1>
        <span>Code is Art that Does Something</span>
      </div>
      <div className="after__hero landing__container animate__fade_in">
        <h2>Who is Ylva?</h2>
        <p>A mother of three young boys, always trying to improve a little each day in all the aspects of her life.</p>
        <p>She has been working with clients and customers for her whole career.</p>
      </div>
      <div className="landing__container animate__fade_in">
        <h2>What can Ylva do?</h2>
        <p>Main focus is currently on Design and learning different elements of frontend coding and how to incorporate different style elements.</p>
      </div>
      <div className="landing__container animate__fade_in">
        <h2>What has Ylva done Already?</h2>
        <p>
          Please look at my Projects page <a href="/projects">Here</a>
        </p>
      </div>
    </div>
  );
}
