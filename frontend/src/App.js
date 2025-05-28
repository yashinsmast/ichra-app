import React from 'react';
import UploadForm from './components/UploadForm';
import './App.css';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans flex flex-col">
      <header className="text-center py-24 bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow">
        <h1 className="text-7xl font-semibold tracking-tight">
          ICHRA <span className="text-black">Quote</span> Portal
        </h1>
        <p className="mt-6 text-xl text-gray-500">A streamlined, next‑gen insurance experience</p>
      </header>
      <main className="w-full flex justify-center items-start px-6 pt-20 pb-28 flex-grow">
        <UploadForm />
      </main>
      <footer className="text-center py-12 text-sm text-gray-500 border-t border-gray-200">
        &copy; 2025 Insurance Masters. Crafted with precision.
      </footer>
    </div>
  );
}

export default App;
