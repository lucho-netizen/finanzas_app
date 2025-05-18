// src/utils/formatCurrency.jsx
export const formatCurrency = (amount) => {
  return amount.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
};
