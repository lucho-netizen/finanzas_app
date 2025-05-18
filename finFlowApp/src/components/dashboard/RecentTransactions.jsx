// src/components/dashboard/RecentTransactions.jsx
import React from 'react';
import { cn } from '../../utils/cn'; // solo si estás usando esta utilidad

export default function RecentTransactions({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return <p className="mt-6 text-gray-500 italic">No hay transacciones recientes.</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-md divide-y">
      {transactions.map((t) => (
        <div
          key={t.id}
          className="flex justify-between items-center p-4 hover:bg-gray-50 transition"
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
  );
}
