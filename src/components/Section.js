import React from "react";
import styled from "styled-components";

const SectionStyle = styled.div`
  @media screen and (max-width: 900px) {
    position: relative;
    width: 80svw;
    transform: translateX(0px) !important;
  }
  position: relative;
  margin: 12px auto;
  padding: 12px;
  width: 450px;
  h2 {
    text-align: center;
    margin-bottom: 18px;
    border-bottom: 1px solid #ccc;
  }
  transform: translateX(-100%) translateY(40px);
  background: #fefefe;
  border: 1px solid #cf2434;
  &.even {
    transform: translateX(3px);
  }
`;

export default function Section({ children, odd }) {
  return <SectionStyle className={odd ? "odd" : "even"}>{children}</SectionStyle>;
}
