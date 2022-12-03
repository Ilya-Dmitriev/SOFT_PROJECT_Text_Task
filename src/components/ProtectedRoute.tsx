import { useAppSelector } from "../hooks/redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const { authToken } = useAppSelector((state) => state.authReduser);

  if (!authToken) {
    return <Navigate to="/" replace />;
  }

  return children;
};
