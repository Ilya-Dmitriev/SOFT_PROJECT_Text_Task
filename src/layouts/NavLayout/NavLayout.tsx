import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Popover, Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { clearAuthTocken } from "../../store/actionsCreators/clearAuthTocken";
import { useAppDispach } from "../../hooks/redux";
import { NavBarLink } from "components";

import "antd/dist/antd.css";
import classes from "./NavLayout.module.scss";

export const NavLayout: React.FC = () => {
  const dispatch = useAppDispach();
  const logout = () => {
    dispatch(clearAuthTocken());
  };

  return (
    <div className={classes.nav_layout}>
      <div className={classes.container}>
        <header className={classes.header}>
          <nav className={classes.nav}>
            <Typography.Title className={classes.menu_title} level={5}>
              Menu
            </Typography.Title>
            <NavBarLink to="posts">Posts</NavBarLink>
            <NavBarLink to="alboms">Alboms</NavBarLink>
            <NavBarLink to="todos">Todos</NavBarLink>
          </nav>
          <Popover placement="right" content={"Выйти"}>
            <NavLink to="/" onClick={logout}>
              <LogoutOutlined className={classes.icon_out} />
            </NavLink>
          </Popover>
        </header>
      </div>
      <div className={classes.container}>
        <Outlet />
      </div>
    </div>
  );
};
