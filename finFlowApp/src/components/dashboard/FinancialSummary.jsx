// src/components/dashboard/FinancialSummary.jsx
import React from "react";
import SummaryCard from "../common/SummaryCard";
import { ArrowUp, ArrowDown, Wallet } from "lucide-react";

export default function FinancialSummary({ summary }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      <SummaryCard
        title="Ingresos"
        amount={summary.income}
        icon={<ArrowUp className="text-green-400" />}
      />
      <SummaryCard
        title="Egresos"
        amount={summary.expense}
        icon={<ArrowDown className="text-red-400" />}
      />
      <SummaryCard
        title="Saldo"
        amount={summary.balance}
        icon={<Wallet className="text-yellow-400" />}
      />
    </div>
  );
}
