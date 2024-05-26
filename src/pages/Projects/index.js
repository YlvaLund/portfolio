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
      <h1 className="animate__fade_in">Portfolio Projects</h1>
      <ProjectContainerStyle>
        <ProjectCard>
          <h3>Auction House</h3>
          <p>I created a frontend in React to let users to list Auctions, post new Auctions and place bids.</p>
          <img src="/img/auction_1.png" alt="project screenshot" />
          <div className="link__container">
            <a href="https://github.com/YlvaLund/auction-app">
              <i className="fa-brands fa-github"></i>
              <span>Code</span>
            </a>
            <a href="https://friendly-palmier-1f755b.netlify.app/">
              <i class="fa-solid fa-globe"></i>
              <span>Website</span>
            </a>
            <a href="https://xd.adobe.com/view/ffcc0bab-2b83-4a91-9948-4c506b7d3f5a-aa9f/">
              <i className="fa-solid fa-crop-simple"></i>
              Design
            </a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h3>Ecom Shop</h3>
          <p>I created a frontend in React to let users list, search and add products to their shopping cart.</p>
          <img src="/img/ecom_1.png" alt="project screenshot" />
          <div className="link__container">
            <a href="https://github.com/YlvaLund/ecom">
              <i className="fa-brands fa-github"></i>
              <span>Code</span>
            </a>
            <a href="https://splendorous-fairy-c62485.netlify.app/">
              <i class="fa-solid fa-globe"></i>
              <span>Website</span>
            </a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h3>Social Media Platform</h3>
          <p>I created a frontend in React to let users signup, login, follow, create posts and react to posts.</p>
          <img src="/img/some.png" alt="project screenshot" />
          <div className="link__container">
            <a href="https://github.com/YlvaLund/SocialMedia">
              <i className="fa-brands fa-github"></i>
              <span>Code</span>
            </a>
            <a href="https://noroff-socialmedia.netlify.app/">
              <i class="fa-solid fa-globe"></i>
              <span>Website</span>
            </a>
          </div>
        </ProjectCard>
      </ProjectContainerStyle>
    </div>
  );
}
