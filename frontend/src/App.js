import React from 'react';
import UploadForm from './components/UploadForm';
import logo from './logo.svg';
import uploadGraphic from './assets/upload.svg';
import './App.css';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans flex flex-col items-center">
      <header className="w-full flex flex-col items-center text-center py-20 bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow">
        <img src={logo} alt="Portal logo" className="w-24 h-24 mb-6" />
        <h1 className="text-7xl font-semibold tracking-tight">
          ICHRA <span className="text-black">Quote</span> Portal
        </h1>
        <p className="mt-6 text-xl text-gray-500">A streamlined, next‑gen insurance experience</p>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow w-full px-6 pt-12 pb-24">
        <img src={uploadGraphic} alt="Upload illustration" className="w-40 h-40 mb-10 opacity-70" />
        <UploadForm />
      </main>
      <footer className="w-full text-center py-12 text-sm text-gray-500 border-t border-gray-200">
        &copy; 2025 Insurance Masters. Crafted with precision.
      </footer>
    </div>
  );
}

export default App;
