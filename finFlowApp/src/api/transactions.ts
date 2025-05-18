import api from "./axios";

export const fetchDashboardData = async (startDate: string, endDate: string) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Token no encontrado");

  const response = await api.get(`/dashboard?startDate=${startDate}&endDate=${endDate}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};