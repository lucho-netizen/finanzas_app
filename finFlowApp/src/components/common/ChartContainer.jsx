// src/components/common/ChartContainer.jsx
export default function ChartContainer({ children }) {
  return (
    <div className="bg-[#1e1e2f] p-6 rounded-2xl shadow-md w-full">
      {children}
    </div>
  );
}
