import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const raw = localStorage.getItem("currentUser");
  const user = raw ? JSON.parse(raw) : null;

  if (!user) return <Navigate to="/" replace />; // no login  completed - StartPage
  return <Outlet />; // login completed - access 
}