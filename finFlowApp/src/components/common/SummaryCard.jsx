// src/components/common/SummaryCard.jsx
export default function SummaryCard({ title, amount, icon }) {
  return (
    <div className="bg-white text-gray-800 rounded-xl shadow-sm p-5 w-full transition hover:shadow-md">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-100 rounded-full text-indigo-600">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-sm text-gray-500">{title}</h3>
          <p className="text-xl font-semibold text-gray-800">{amount}</p>
        </div>
      </div>
    </div>
  );
}
