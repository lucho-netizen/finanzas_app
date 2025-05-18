// src/api/useDashboardData.ts
import { useQuery } from '@tanstack/react-query';

const fetchDashboardData = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('http://localhost:8000/dashboard/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Error al obtener los datos del dashboard');
  }

  return res.json();
};

export const useDashboardData = () => {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboardData,
  });
};
