import React from 'react';
import { useDashboardData } from '../api/useDashboardData';
import DateFilter from '../components/dashboard/DateFilter';
import SummaryCard from '../components/common/SummaryCard';
import StatsChart from '../components/dashboard/StatsChart';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import { useNavigate } from 'react-router-dom';
import {
  ArrowDownCircle,
  ArrowUpCircle,
  DollarSign,
} from 'lucide-react';

const DashboardPage = () => {
  const { data, isLoading } = useDashboardData();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (isLoading || !data) {
    return <p className="text-center mt-10 text-gray-600">Cargando datos del dashboard...</p>;
  }

  return (
    <div className="min-h-screen bg-[#f4f5f7] p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Cerrar sesión
        </button>
      </div>

      {/* Filtro de fechas */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <DateFilter />
      </div>

      {/* Resumen de tarjetas */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Resumen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard
            title="Ingresos"
            amount={`$${data.ingresos.toLocaleString()}`}
            icon={<ArrowDownCircle className="w-6 h-6 text-green-500" />}
          />
          <SummaryCard
            title="Egresos"
            amount={`$${data.egresos.toLocaleString()}`}
            icon={<ArrowUpCircle className="w-6 h-6 text-red-500" />}
          />
          <SummaryCard
            title="Saldo"
            amount={`$${data.saldo.toLocaleString()}`}
            icon={<DollarSign className="w-6 h-6 text-blue-500" />}
          />
        </div>
      </div>

      {/* Gráfico */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Estadísticas</h2>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <StatsChart data={data.timeline} />
        </div>
      </div>

      {/* Transacciones recientes */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transacciones recientes</h2>
        <RecentTransactions transactions={data.transactions.slice(0, 5)} />
        {/* Puedes agregar un botón "Ver todas" aquí si deseas paginación */}
      </div>
    </div>
  );
};

export default DashboardPage;
