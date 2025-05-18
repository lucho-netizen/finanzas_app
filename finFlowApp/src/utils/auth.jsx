// src/utils/auth.ts
export const logout = () => {
  localStorage.removeItem("token"); // o sessionStorage
  window.location.href = "/";  // redirigir al login
};
