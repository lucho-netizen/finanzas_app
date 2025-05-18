import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/auth/login", {
        email,
        password
        //username: "temp", // requerido por el backend
      });
      localStorage.setItem("token", res.data.access_token);
      navigate("/dashboard");
    } catch (err) {
      setError("Correo o contraseña incorrectos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl animate-fade-in"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Iniciar Sesión
        </h2>
        {error && (
          <div className="mb-4 text-red-600 bg-red-100 px-4 py-2 rounded-md text-sm">
            {error}
          </div>
        )}
        <input
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Contraseña"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition-colors ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
