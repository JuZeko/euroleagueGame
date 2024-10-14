import React from 'react';
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender
} from '@tanstack/react-table';

const UserTablePage = () => {
  const users = [
    { id: 0, name: 'Mantelis', points: '32' },
    { id: 1, name: 'Julekas', points: '32' },
    { id: 0, name: 'Mantelis', points: '32' },
    { id: 1, name: 'Julekas', points: '32' },
    { id: 0, name: 'Mantelis', points: '32' },
    { id: 1, name: 'Julekas', points: '32' },
    { id: 0, name: 'Mantelis', points: '32' },
    { id: 1, name: 'Julekas', points: '32' },
  ];

  // Create column definitions using createColumnHelper
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('name', {
      header: 'Name',
    }),
    columnHelper.accessor('points', {
      header: 'Points',
    }),
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead className="thead-dark">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
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
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTablePage;
