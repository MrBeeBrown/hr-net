import React from 'react';

const DataTable = ({ headers, data }) => {
  const headerKeys = {
    "First Name": "firstName",
    "Last Name": "lastName",
    "Date of Birth": "birthday",
    "Start Date": "startDate",
    "Street": "street",
    "City": "city",
    "State": "state",
    "Zip Code": "zipCode",
    "Department": "department",
  };

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={row.id || rowIndex}>
            {headers.map((header, cellIndex) => {
              const key = headerKeys[header];
              if (!key) return null;
              return <td key={cellIndex}>{row[key]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
