import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import '../styles/UserTable.css'; // Import the styles

// Define the User type


interface UserTableProps {
  tableData: User[]; // The data that will be passed to the table
}

const UserTable: React.FC<UserTableProps> = ({ tableData }) => {
  const handleEdit = (row: any) => {
    alert(`Editing user: ${row.original.name}`);
    // Add your logic for editing here
  };

  const handleDelete = (row: any) => {
    alert(`Deleting user: ${row.original.name}`);
    // Add your logic for deleting here
  };

  const columns = React.useMemo<ColumnDef<User>[]>(
    () => [
      { accessorKey: 'id', header: 'ID' },
      { accessorKey: 'userName', header: 'UserName' },
      { accessorKey: 'age', header: 'Age' },
      {
        id: 'actions', // Custom column for actions
        header: 'Actions',
        cell: ({ row }) => (
          <div>
            <button
              onClick={() => handleEdit(row)}
              style={{
                marginRight: '8px',
                padding: '5px 10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(row)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: tableData , // Use tableData prop here
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
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
