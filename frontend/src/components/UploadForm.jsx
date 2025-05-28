import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [quote, setQuote] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('http://localhost:3001/api/upload-census', formData);
    setQuote(response.data);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Upload and Quote
      </button>
      {quote && <pre className="mt-4 text-left bg-white p-4 rounded shadow">{JSON.stringify(quote, null, 2)}</pre>}
    </div>
  );
}

export default UploadForm;