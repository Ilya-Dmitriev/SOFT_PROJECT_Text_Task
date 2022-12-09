import { useAppSelector } from "../hooks/redux";
import { Navigate } from "react-router-dom";
import { deployPath } from "../router/router";

export const ProtectedRoute: React.FC<{
  children: React.ReactElement;
  to?: string;
}> = ({ children, to = deployPath + "/" }) => {
  const { authToken } = useAppSelector((state) => state.authReduser);

  if (!authToken) {
    return <Navigate to={to} replace />;
  }

  return children;
};
