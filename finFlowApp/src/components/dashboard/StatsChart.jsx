// src/components/dashboard/StatsChart.jsx
import ChartContainer from "../common/ChartContainer";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function StatsChart({ data }) {
  console.log("📊 Datos que llegan a StatsChart:", data);

  return (
    <ChartContainer>
      <h2 className="text-white mb-4">Estadísticas</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="category" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="amount" fill="#4f46e5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

