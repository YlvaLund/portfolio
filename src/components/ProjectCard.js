import React from "react";
import styled from "styled-components";

const ProjectStyle = styled.div`
  position: relative;
  display: inline-box;
  background: #fff;
  padding: 12px;
  width: 75svw;
  max-width: 450px;
  border: 4px solid var(--primary);
  border-radius: 0.25rem;
  box-shadow: 0px 4px 8px rgba(50, 50, 50, 0.3);
`;

export default function ProjectCard({ children }) {
  return <ProjectStyle>{children}</ProjectStyle>;
}
