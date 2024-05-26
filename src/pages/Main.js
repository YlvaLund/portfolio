import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Main() {
  return (
    <main>
      <Navigation />
      <div className="main__content">
        <Outlet />
      </div>
      <footer>
        <h4>Contact Me</h4>
        <a href="https://github.com/YlvaLund">
          <i className="fa-brands fa-github"></i>
          <span>Github Profile</span>
        </a>
      </footer>
    </main>
  );
}
