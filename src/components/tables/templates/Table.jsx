import React from "react";

const Table = ({ columns, children, loading = true }) => {
  return (
    <div className="overflow-x-auto">
      {loading ? (
        <div>Loading...</div> // Placeholder while loading
      ) : (
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              {columns.map((column) => (
                <th
                  key={column.field}
                  className="border border-gray-300 px-4 py-2"
                >
                  {column.headerName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
