import React, { useState } from "react";
import { FaFileWord, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import axios from "axios";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convert, setConvert] = useState("");
  const [downloadError, setDownloadError] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setConvert("");
    setDownloadError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setConvert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/convertFile",
        formData,
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf"
      );
      document.body.appendChild(link);
      link.click();
      link.remove();

      setSelectedFile(null);
      setDownloadError("");
      setConvert("✅ File Converted Successfully!");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setDownloadError(error.response.data.message);
      } else {
        setConvert("");
        setDownloadError("❌ Something went wrong!");
      }
    }
  };

  return (
    <div className="bg-gradient-to-tr from-gray-900 via-black to-gray-800 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-700 transition-all hover:border-purple-500/70 hover:shadow-purple-500/40 hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center text-white mb-3">
          SwiftPDF Converter
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Upload a Word document & convert to PDF instantly — 100% Free!
        </p>

        {/* File Upload */}
        <input
          type="file"
          accept=".doc,.docx"
          onChange={handleFileChange}
          className="hidden"
          id="FileInput"
        />
        <label
          htmlFor="FileInput"
          className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-purple-600 text-gray-300 hover:text-white font-medium py-6 px-6 rounded-xl cursor-pointer transition duration-300 border-2 border-dashed border-gray-600 hover:border-purple-500"
        >
          <FaFileWord className="text-4xl text-purple-400" />
          <span className="text-lg">
            {selectedFile ? selectedFile.name : "Click or Drag to Choose File"}
          </span>
        </label>

        {/* Convert Button */}
        <button
          onClick={handleSubmit}
          disabled={!selectedFile}
          className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 disabled:opacity-50 text-white font-semibold py-3 rounded-full transition duration-300 shadow-lg shadow-purple-500/30"
        >
          Convert File
        </button>

        {/* Messages */}
        {convert && (
          <p className="mt-4 flex items-center justify-center gap-2 text-green-400 text-center font-medium">
            <FaCheckCircle /> {convert}
          </p>
        )}
        {downloadError && (
          <p className="mt-4 flex items-center justify-center gap-2 text-red-400 text-center font-medium">
            <FaTimesCircle /> {downloadError}
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
