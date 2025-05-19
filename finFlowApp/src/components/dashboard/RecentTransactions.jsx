// src/components/dashboard/RecentTransactions.jsx
import React, { useState } from 'react';

export default function RecentTransactions({ transactions }) {
  const [limit, setLimit] = useState(5);

  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
  };

  if (!transactions || transactions.length === 0) {
    return <p className="mt-6 text-gray-500 italic">No hay transacciones recientes.</p>;
  }

  const limitedTransactions = transactions.slice(0, limit);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Transacciones recientes</h2>
        <div className="text-sm">
          <label htmlFor="limit" className="mr-2 text-gray-600">Mostrar:</label>
          <select
            id="limit"
            value={limit}
            onChange={handleLimitChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      <div className="divide-y">
        {limitedTransactions.map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center py-4 hover:bg-gray-50 transition"
          >
            <div>
              <p className="font-medium text-gray-800">{t.description}</p>
              <p className="text-sm text-gray-500">{t.category}</p>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold ${
                  t.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
              </p>
              <p className="text-sm text-gray-400">
                {new Date(t.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
