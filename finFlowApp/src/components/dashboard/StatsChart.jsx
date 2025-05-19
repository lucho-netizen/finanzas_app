import ChartContainer from "../common/ChartContainer";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

export default function StatsChart({ data }) {
  console.log("Datos que llegan a StatsChart:", data);

  return (
    <ChartContainer>
      <h2 className="text-white mb-4">Estadísticas</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#22c55e" name="Ingresos" />
          <Bar dataKey="expense" fill="#ef4444" name="Egresos" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
