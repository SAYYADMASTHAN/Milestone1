
"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function MyDataGrid({ rows, columns }: { rows: any[]; columns: GridColDef[] }) {
  return <DataGrid rows={rows} columns={columns} autoHeight checkboxSelection />;
}
