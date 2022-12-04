import { Button, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";

import classes from "./NavBarLink.module.scss";

export const NavBarLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  const isActive = useLocation().pathname === "/" + to;

  return (
    <Link to={to} className={classes.link}>
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
