import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase";

const AutLayout = () => {
  const [user, isLoading] = useAuthState(auth);

  if (isLoading) {
    return <h1>Yükleniyor...</h1>;
  }
  if (user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AutLayout;
