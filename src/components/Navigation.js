import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(255, 255, 255, 0.8);
  height: 100svh;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 0px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(4px);
  padding: 0px;
  padding-top: 12px;
  a {
    position: relative;
    color: var(--color);
    text-decoration: none;
    opacity: 0;
    transition: all 0.2s linear;
    border-bottom: 2px solid transparent;
    width: 80%;
    margin: 12px auto;
    &:hover {
      border-bottom: 2px solid var(--primary);
    }
  }
  &.open {
    width: 400px;
    border-right: 4px solid var(--primary);
    a {
      opacity: 1;
    }
  }
`;

const NavButtonStyle = styled.button`
  background: transparent;
  position: fixed;
  top: 12px;
  right: 12px;
  border: none;
  width: 60px;
  height: 40px;
  display: grid;
  grid-template-row: 1fr 1fr 1fr;
  gap: 4px;
  cursor: pointer;
  z-index: 1000;
  span {
    height: 100%;
    background: var(--accent);
    border-radius: 4px;
  }
`;

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div
        id="menu__closer"
        style={
          openNav
            ? {
                position: "fixed",
                width: "100svw",
                height: "100svh",
                background: "transparent",
              }
            : {}
        }
        onClick={() => {
          setOpenNav(false);
        }}
      ></div>
      <NavStyle className={openNav ? "open" : "closed"}>
        <Link
          to="/"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <span>Home</span>
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <span>Projects</span>
        </Link>
        <Link
          to="/process"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <span>Process</span>
        </Link>
      </NavStyle>
      <NavButtonStyle
        type="button"
        onClick={() => {
          setOpenNav((prev) => !prev);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </NavButtonStyle>
    </>
  );
}
