import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";



const MainLayout = () => {
  const [user, isLoading] = useAuthState(auth);
  if(isLoading){return <h1>Yükleniyor...</h1>}
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
  return <Outlet />;
};

export default MainLayout;
