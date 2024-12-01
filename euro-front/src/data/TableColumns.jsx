import { useMemo } from "react";

export const UserPointsColumns = () =>
  useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "points",
        header: "Points",
      },
    ],
    []
  );
