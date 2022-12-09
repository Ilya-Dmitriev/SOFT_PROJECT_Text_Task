import { Button, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import { deployPath } from "../../router/router";

import classes from "./NavBarLink.module.scss";

export const NavBarLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  const isActive = useLocation().pathname === "/" + deployPath + "/" + to;

  return (
    <Link to={deployPath + "/" + to} className={classes.link}>
      <Button
        size="small"
        shape="round"
        type={isActive ? "primary" : "default"}
      >
        <Typography.Text
          strong
          className={isActive ? classes.text_active : classes.text_unactive}
        >
          {children}
        </Typography.Text>
      </Button>
    </Link>
  );
};
