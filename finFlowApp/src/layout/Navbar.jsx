// src/components/layout/Navbar.tsx (ejemplo)
import LogoutButton from "../components/common/LogoutButton";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#1e1e2f] text-white">
      <h1 className="text-xl font-bold">FinFlow</h1>
      <LogoutButton />
    </nav>
  );
}
