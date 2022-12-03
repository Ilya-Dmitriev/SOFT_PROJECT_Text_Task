import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "antd/dist/antd.css";
import classes from "./NavLayout.module.scss";

export const NavLayout: React.FC = () => {
  return (
    <div className={classes.nav_layout}>
      <header>
        <nav>
          <NavLink to="posts">Posts</NavLink>
          <NavLink to="alboms">Alboms</NavLink>
          <NavLink to="todos">Todos</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
