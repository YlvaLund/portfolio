import React from "react";
import { isDark } from "../helpers/globals";
import styled from "styled-components";

const PalletStyle = styled.div`
  border: 1px solid #ccc;
  padding: 12px;
  margin: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  div {
    padding: 12px;
    display: grid;
    place-content: center;
    text-transform: uppercase;
    font-size: 1rem;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 50px);
    max-width: 80svw;
  }
`;

export default function PalletTester({ primaryColor, secondaryColor, accentColor, backgroundColor }) {
  return (
    <PalletStyle>
      <div style={isDark(primaryColor) ? { color: "#fff", background: primaryColor ?? "#fff" } : { color: "#333", background: primaryColor ?? "#fff" }}>
        <span>{primaryColor}</span>
      </div>
      <div style={isDark(secondaryColor) ? { color: "#fff", background: secondaryColor ?? "#fff" } : { color: "#333", background: secondaryColor ?? "#fff" }}>
        <span>{secondaryColor}</span>
      </div>
      <div style={isDark(accentColor) ? { color: "#fff", background: accentColor ?? "#fff" } : { color: "#333", background: accentColor ?? "#fff" }}>
        <span>{accentColor}</span>
      </div>
      <div style={isDark(backgroundColor) ? { color: "#fff", background: backgroundColor ?? "#fff" } : { color: "#333", background: backgroundColor ?? "#fff" }}>
        <span>{backgroundColor}</span>
      </div>
    </PalletStyle>
  );
}
