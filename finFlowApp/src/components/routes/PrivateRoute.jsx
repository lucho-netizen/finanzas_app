// src/routes/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const token = localStorage.getItem("token");

  // Si no hay token, redirige a login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si hay token, permite acceder a las rutas hijas
  return <Outlet />;
}
