import React from 'react';
import UploadForm from './components/UploadForm';
import './App.css';

function App() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen font-sans">
      <header className="text-center py-24 bg-gradient-to-b from-black via-[#111111] to-[#1a1a1a] shadow-lg">
        <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-xl">
          ICHRA <span className="text-blue-500">Quote</span> Portal
        </h1>
        <p className="mt-6 text-2xl text-gray-400 font-light">A bold, premium insurance experience</p>
      </header>
      <main className="w-full flex justify-center items-center px-6 pt-20 pb-28 min-h-[70vh]">
        <UploadForm />
      </main>
      <footer className="text-center py-12 text-sm text-gray-600 border-t border-gray-800">
        &copy; 2025 Insurance Masters. Designed with elegance and precision.
      </footer>
    </div>
  );
}

export default App;
