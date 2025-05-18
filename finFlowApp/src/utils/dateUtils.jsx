// src/utils/dateUtils.jsx
import { formatISO } from 'date-fns';

export const formatDateToISO = (date) => {
  return formatISO(date, { representation: 'date' });
};
