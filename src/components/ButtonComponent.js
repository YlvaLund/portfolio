import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  padding: 0.25em 1em;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: #bf4f74;
    color: #fff;
  }
`;

export default function ButtonComponent() {
  return (
    <>
      <ButtonStyle>
        <span>Text</span>
      </ButtonStyle>
    </>
  );
}
