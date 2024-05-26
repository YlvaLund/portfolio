import React from "react";
import styled from "styled-components";

const ProjectStyle = styled.div`
  position: relative;
  display: inline-box;
  background: #fff;
  padding: 12px;
  width: 75svw;
  max-width: 450px;
  border: 3px solid var(--primary);
  border-radius: 0.25rem;
  h3 {
    font-size: 1.6rem;
    margin-bottom: 24px;
  }
  p {
    height: 100px;
  }
  img {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: 1px solid #ccc;
    object-fit: contain;
    height: 200px;
  }
  .link__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    a {
      display: grid;
      grid-template-columns: 1.2rem auto;
      gap: 4px;
      align-items: center;
    }
  }
`;

export default function ProjectCard({ children }) {
  return <ProjectStyle>{children}</ProjectStyle>;
}
