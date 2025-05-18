// src/components/dashboard/DateFilter.jsx
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateFilter({ startDate, endDate, onStartDateChange, onEndDateChange }) {
  return (
    <div className="mb-6">
      <DateRange
        ranges={[{ startDate, endDate, key: "selection" }]}
        onChange={(ranges) => {
          onStartDateChange(ranges.selection.startDate);
          onEndDateChange(ranges.selection.endDate);
        }}
        moveRangeOnFirstSelection={false}
      />
    </div>
  );
}
