"use client"; // Mark this component as a Client Component

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useState } from "react";

export default function CategoriesPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Handle the file upload here (e.g., sending it to a server)
      console.log("Uploading file:", file.name);
      // Reset the file input after upload
      setFile(null);
    }
  };

  return (
    <ContentLayout title="Categories">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Upload Company Data</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            accept=".csv, .xlsx, .xls" // Accept specific file types if needed
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Upload
          </button>
        </form>
      </div>
    </ContentLayout>
  );
}
