import React from "react";
import PalletTester from "../../components/PalletTester";
import Section from "../../components/Section";

export default function Process() {
  return (
    <div>
      <h1>Process</h1>
      <div className="red__line">
        <Section odd>
          <h2>Initial Consulatation and Requirement Gathering</h2>
          <strong>Objective</strong>
          <p>Understand the vision, goals and underlying problem / solution.</p>
          <strong>Activities</strong>
          <ul>
            <li>Kick-off meeting with stakeholders</li>
            <li>Detailed Q&A to clarify scope, target audience and desired outcome</li>
            <li>Document all requirements, and get the client to sign off on the project proposal</li>
          </ul>
        </Section>
        <Section>
          <h2>Research and Analysis</h2>
          <strong>Objective</strong>
          <p>Conduct research to gather insights and validate any assumptions</p>
          <strong>Activities</strong>
          <ul>
            <li>Analyze competitors and market trends </li>
            <li>Understand the user personas and behaviors</li>
            <li>Gather reviews and existing materials the client provides</li>
            <li>Document any and all findings and insights</li>
          </ul>
        </Section>
        <Section odd>
          <h2>Concept development and idea-phase</h2>
          <strong>Objective</strong>
          <p>Generate many ideas and create initial concepts</p>
          <strong>Activities</strong>
          <ul>
            <li>Brainstorming sessions</li>
            <li>Start wireframes, low-res XD designs and layouts</li>
            <li>Style tiles, explore visual directions - might even include a mood board, always tied to the previous steps and document</li>
            <li>Present initial concepts for the client and get feedback</li>
          </ul>
          <h3>This is where we try to get the color pallet and over-all feel of the project signed off</h3>
          <PalletTester primaryColor={"#2E3A59"} secondaryColor={"#6A8D92"} accentColor={"#FF6F61"} backgroundColor={"#f4f7f6"} />
          <PalletTester primaryColor={"#64766A"} secondaryColor={"#97A7AE"} accentColor={"#C0A9BD"} backgroundColor={"#F4F2F3"} />
          <PalletTester primaryColor={"#403234"} secondaryColor={"#687477"} accentColor={"#E2C2B3"} backgroundColor={"#F7F3F5"} />
          <PalletTester primaryColor={"#2d3142"} secondaryColor={"#bfc0c0"} accentColor={"#ef8354"} backgroundColor={"#ffffff"} />
          <PalletTester primaryColor={"#687864"} secondaryColor={"#31708E"} accentColor={"#8FC1E3"} backgroundColor={"#F7F9FB"} />
        </Section>
        <Section>
          <h2>Design and Visuals</h2>
          <strong>Objective</strong>
          <p>Create detailed designs based on the approved feedback and concepts</p>
          <strong>Activities</strong>
          <ul>
            <li>High quality mockups</li>
            <li>Design Components and key UI elements</li>
            <li>Always think Mobile-first designs</li>
            <li>Iterate on Client feedback</li>
            <li>Document each step</li>
          </ul>
          <p>This is where we nail down the complete design</p>
        </Section>
        <Section odd>
          <h2>Development</h2>
          <strong>Objective</strong>
          <p>Take the completed Design to a functional product</p>
          <strong>Activities</strong>
          <ul>
            <li>Setup the Development Environment</li>
            <li>Pipelines with Continous Deployment and testing from day one</li>
            <li>Build the Frontend Client</li>
            <li>Perform Continous Testing and have client user testing for each component and feature</li>
            <li>Document any technical decisions, especially important for the deployment and build</li>
          </ul>
          <p>Now we test some components and make sure the design and product will be the same, not similar...</p>
        </Section>
        <Section>
          <h2>Testing and Quality Assurance</h2>
          <strong>Objective</strong>
          <p>Ensure the product is free of initial bugs and meets the client requirements</p>
          <strong>Activities</strong>
          <ul>
            <li>Unit and user acceptance testing</li>
            <li>Gather feedback from real testers and or users</li>
            <li>Fix bugs and optimize the product</li>
          </ul>
        </Section>
        <Section odd>
          <h2>Client review and approval</h2>
          <strong>Objective</strong>
          <p>Get the final approval before the official Launch</p>
          <strong>Activities</strong>
          <ul>
            <li>Presentation of completed product to the client</li>
            <li>Deliver documentation and walkthrough features and functionality</li>
            <li>Gather and incorporate any final feedback</li>
          </ul>
        </Section>
        <Section>
          <h2>Retrospective</h2>
          <strong>Objective</strong>
          <p>Reflect on the project and document learnings</p>
          <strong>Activities</strong>
          <ul>
            <li>What went well and what could be improved</li>
            <li>Client feedback on the project and process</li>
            <li>Create a case study for future references</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}
