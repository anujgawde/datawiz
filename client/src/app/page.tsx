'use client';
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-xl w-full text-center border border-blue-100">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Welcome to Datawiz</h1>
        <p className="text-gray-700 mb-6">Upload your Excel file to visualize it like magic ✨</p>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-blue-400 p-6 rounded-md bg-blue-50 hover:bg-blue-100 transition">
          <input
            type="file"
            accept=".xlsx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
          />
          {file && (
            <p className="mt-2 text-blue-600 font-medium">Selected file: {file.name}</p>
          )}
        </div>

        <button
          onClick={() => alert('Implement file upload next!')}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold shadow-md transition"
        >
          Upload & Visualize
        </button>
      </div>
    </div>
  );
}
