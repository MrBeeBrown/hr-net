import React, { useEffect, useRef } from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

function DatePicker({ value, onDateChange, id, label }) {
  const dateInputRef = useRef(null);

  useEffect(() => {
    const picker = new Pikaday({
      field: dateInputRef.current,
      format: 'YYYY-MM-DD',
      onSelect: (date) => {
        const formattedDate = date.toLocaleDateString('fr-CA', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
        onDateChange(formattedDate);
      },
    });

    return () => picker.destroy();
  }, [onDateChange]);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        ref={dateInputRef}
        value={value}
        readOnly
      />
    </div>
  );
}

export default DatePicker;
