"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useState } from "react";

export default function TagsPage() {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      alert("Please upload at least one PDF file.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      const response = await fetch("/api/check-fir-status", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze company data.");
      }

      const data = await response.json();
      setResults(data.results); // Assuming the server returns an array of results
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while checking the company data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContentLayout title="Check Company Status">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Upload Company Data (PDFs)</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="file"
            accept=".pdf"
            multiple
            onChange={handleFileChange}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? "Processing..." : "Check Status"}
          </button>
        </form>

        {results.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Results:</h3>
            <ul className="list-disc pl-6 space-y-2">
              {results.map((result, index) => (
                <li key={index}>
                  {result.companyName}:{" "}
                  <span className={result.isFir ? "text-green-500" : "text-red-500"}>
                    {result.isFir ? "FIR" : "Not FIR"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ContentLayout>
  );
}
