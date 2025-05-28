import React, { useState } from 'react';
import axios from 'axios';
import processingGif from '../assets/processing.gif';

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
    <div className="bg-white/80 backdrop-blur-lg px-10 py-16 rounded-3xl shadow-xl border border-gray-200 w-full max-w-3xl mx-auto">
      <h2 className="text-4xl font-semibold mb-12 text-center leading-tight text-gray-900">Upload Your Census</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
        <input
          type="file"
          accept=".csv, .xlsx"
          className="text-sm text-gray-600 file:mr-5 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-gray-900 file:text-white hover:file:bg-gray-700 transition-all cursor-pointer"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          onClick={handleUpload}
          className="bg-gray-900 text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all shadow"
        >
          Upload &amp; Quote
        </button>
      </div>

      {loading && (
        <div className="mt-10 text-center animate-pulse">
          <img src={processingGif} alt="Processing" className="w-20 h-20 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Processing your data...</p>
        </div>
      )}

      {quote && (
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-inner text-left text-sm overflow-auto max-h-[600px] border border-gray-200">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">Quote Summary</h3>
          <pre className="text-gray-700 whitespace-pre-wrap leading-relaxed font-mono text-xs">{JSON.stringify(quote, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default UploadForm;
