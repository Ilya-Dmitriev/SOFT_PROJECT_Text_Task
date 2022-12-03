import { Typography } from "antd";
import { AuthForm } from "components";
import { Navigate } from "react-router-dom";
import { useAppDispach, useAppSelector } from "../../hooks/redux";
import { fetchAuth } from "../../store/actions/fetchAuth";
import classes from "./Authorization.module.scss";

const Authorization = () => {
  const dispatch = useAppDispach();
  const { authToken, isLoading, error } = useAppSelector(
    (state) => state.authReduser,
  );

  if (authToken) {
    return <Navigate to="/posts" replace />;
  }

  return (
    <div className={classes.auth_container}>
      <div className={classes.auth_wrap}>
        <Typography.Title className={classes.logo} level={4}>
          "Logo"
        </Typography.Title>
        <AuthForm
          onFinish={(authParams) => dispatch(fetchAuth(authParams))}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Authorization;
