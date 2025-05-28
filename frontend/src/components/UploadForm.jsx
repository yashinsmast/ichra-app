import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3001/api/upload-census', formData);
      setQuote(response.data);
    } catch (error) {
      alert('Failed to upload file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#111111] px-10 py-16 rounded-3xl shadow-2xl border border-[#222222] w-full max-w-3xl mx-auto">
      <h2 className="text-5xl font-bold mb-14 text-center leading-tight">Upload Your Census</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
        <input
          type="file"
          accept=".csv, .xlsx"
          className="text-sm text-gray-400 file:mr-5 file:py-3 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-600 file:text-white
            hover:file:bg-blue-700 transition-all cursor-pointer"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          onClick={handleUpload}
          className="bg-gradient-to-br from-blue-600 to-cyan-400 px-10 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-cyan-500 transition-all shadow-lg"
        >
          Upload & Quote
        </button>
      </div>

      {loading && (
        <div className="mt-10 text-center animate-pulse">
          <div className="w-14 h-14 border-[6px] border-blue-500 border-dashed rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Processing your data...</p>
        </div>
      )}

      {quote && (
        <div className="mt-16 bg-black/70 rounded-2xl p-8 shadow-inner text-left text-sm overflow-auto max-h-[600px] border border-blue-800">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 border-b border-blue-800 pb-3">Quote Summary</h3>
          <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed font-mono text-xs">{JSON.stringify(quote, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default UploadForm;
