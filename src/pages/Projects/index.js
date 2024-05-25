import React from "react";
import ProjectCard from "../../components/ProjectCard";
import styled from "styled-components";

const ProjectContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  place-content: center;
`;

export default function Projects() {
  return (
    <div>
      <h1>All projects</h1>
      <ProjectContainerStyle>
        <ProjectCard>
          <h3>Auction House</h3>
          <p>
            <strong>More information</strong>
          </p>
          <img src="#" alt="project screenshot" />
          <div>
            <a href="https://github.com/YlvaLund/auction-app">Github Repo</a>
            <a href="https://xd.adobe.com/view/ffcc0bab-2b83-4a91-9948-4c506b7d3f5a-aa9f/">Adobe XD Style</a>
            <a href="https://friendly-palmier-1f755b.netlify.app/">Website</a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h3>Ecom Shop</h3>
          <p>Project Description</p>
          <img src="¤" alt="project screenshot" />
          <div>
            <a href="https://github.com/YlvaLund/SocialMedia">Github Repo</a>
            <a href="https://splendorous-fairy-c62485.netlify.app/">Live site</a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h3>Social Media Platform</h3>
          <p>Project Description</p>
          <img src="¤" alt="project screenshot" />
          <div>
            <a href="https://github.com/YlvaLund/SocialMedia">Github Repo</a>
            <a href="https://noroff-socialmedia.netlify.app/">Live site</a>
          </div>
        </ProjectCard>
      </ProjectContainerStyle>
    </div>
  );
}
