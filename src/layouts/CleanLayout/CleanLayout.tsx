import React from "react";
import { Outlet } from "react-router-dom";

import "antd/dist/antd.css";
import classes from "./CleanLayout.module.scss";

export const CleanLayout: React.FC = () => {
  return (
    <div className={classes.clean_layout}>
      <Outlet />
    </div>
  );
};
