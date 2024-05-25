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
        <span>Footer</span>
      </footer>
    </main>
  );
}
