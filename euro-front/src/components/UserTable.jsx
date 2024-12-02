import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const UserTable = ({ columns,data }) => {

  const memoizedData = React.useMemo(() => data, []);
  const memoizedColumns = React.useMemo(() => columns, [columns]);

  const table = useReactTable({
    data:memoizedData,
    columns: memoizedColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="styled-table">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="header-row">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="header-cell">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="body-row">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="body-cell">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
