import React, { useMemo } from "react";

const UserTable: React.FC<{ columns: any; data: any }> = ({
  columns,
  data,
}) => {
  const memoizedData = React.useMemo(() => data, []);
  const memoizedColumns = React.useMemo(() => columns, [columns]);

  return <div></div>;
};
//
export default UserTable;
