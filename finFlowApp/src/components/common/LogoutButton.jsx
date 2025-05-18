// src/components/common/LogoutButton.tsx
import { logout } from ".././utils/auth";

export default function LogoutButton() {
  return (
    <button
      onClick={logout}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl shadow transition-all"
    >
      Cerrar sesión
    </button>
  );
}
