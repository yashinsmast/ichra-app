import React from 'react';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="p-10 text-center bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">ICHRA Quoting Tool</h1>
      <UploadForm />
    </div>
  );
}

export default App;