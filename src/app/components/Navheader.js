import React from 'react'

function Navheader() {
  return (
    <header className="text-center">
      <h1
        className="text-4xl font-extrabold bg-linear-to-r from-red-600 via-orange-700 to-yellow-400
        text-transparent bg-clip-text shadow-lg inline-block"
        style={{ filter: "drop-shadow(0 0 10px rgba(150, 50, 200, 0.7))" }}
      >
        XENFORECAST👒
      </h1>
      <p className="text-gray-300">Ramalan berdasarkan foto selfie kamu</p>
    </header>
  );
}

export default Navheader