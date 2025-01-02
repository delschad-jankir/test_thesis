"use client"; // Mark this component as a Client Component

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useState } from "react";

export default function CategoriesPage() {
  const [urls, setUrls] = useState([]);
  const [newUrl, setNewUrl] = useState("");

  const handleAddUrl = () => {
    if (newUrl.trim()) {
      setUrls((prev) => [...prev, newUrl.trim()]);
      setNewUrl(""); // Clear the input field after adding the URL
    }
  };

  const handleDeleteUrl = (index) => {
    setUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEditUrl = (index, updatedUrl) => {
    setUrls((prev) =>
      prev.map((url, i) => (i === index ? updatedUrl.trim() : url))
    );
  };

  return (
    <ContentLayout title="Categories">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Manage News URLs</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="Enter a URL"
              className="flex-grow border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleAddUrl}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>

          <ul className="space-y-2">
            {urls.map((url, index) => (
              <li key={index} className="flex items-center space-x-4">
                <input
                  type="url"
                  value={url}
                  onChange={(e) =>
                    handleEditUrl(index, e.target.value)
                  }
                  className="flex-grow border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteUrl(index)}
                  className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentLayout>
  );
}
