
"use client";
import { parseCSV } from "../lib/parsers";

export default function UploadDropzone({ onData, label }: { onData: (data: any[]) => void, label: string }) {
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const parsed = await parseCSV(e.target.files[0]);
      onData(parsed);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <input type="file" accept=".csv" onChange={handleFile} />
    </div>
  );
}
