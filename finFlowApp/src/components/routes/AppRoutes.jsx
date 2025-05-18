import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import DashboardPage from "../pages/DashboardPage";
import PrivateRoute from "./PrivateRoute"; // <- este sí existe ahora

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />

      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
