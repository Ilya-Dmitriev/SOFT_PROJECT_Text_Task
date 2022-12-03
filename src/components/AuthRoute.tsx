import { useAppSelector } from "../hooks/redux";
import { Navigate } from "react-router-dom";

export const AuthRoute: React.FC<{
  children: React.ReactElement;
  path: string;
}> = ({ children, path }) => {
  const { authToken } = useAppSelector((state) => state.authReduser);

  if (authToken) {
    return <Navigate to={path} replace />;
  }

  return children;
};
