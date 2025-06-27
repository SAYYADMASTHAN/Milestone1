
"use client";
import { useState } from "react";
import UploadDropzone from "../components/UploadDropzone";
import MyDataGrid from "../components/DataGrid";
import { validateClients } from "../lib/validators";

export default function Home() {
  const [clients, setClients] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [errors, setErrors] = useState<any[]>([]);

  const columns = Object.keys(clients[0] || {}).map((key) => ({ field: key, headerName: key, width: 150 }));

  return (
    <main className="p-4">
      <h1 className="text-xl mb-4 font-bold">Data Alchemist - Milestone 1</h1>
      <UploadDropzone onData={setClients} label="Upload Clients CSV" />
      <UploadDropzone onData={setTasks} label="Upload Tasks CSV" />

      {clients.length > 0 && (
        <>
          <MyDataGrid rows={clients} columns={columns} />
          <button
            onClick={() => setErrors(validateClients(clients, tasks))}
            className="mt-4 p-2 bg-blue-500 text-white"
          >
            Validate Clients
          </button>
        </>
      )}

      {errors.length > 0 && (
        <div className="mt-4 p-2 border">
          <h2>Validation Errors:</h2>
          <ul>
            {errors.map((err, idx) => (
              <li key={idx}>{`\${err.message} (Row \${err.row})`}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
