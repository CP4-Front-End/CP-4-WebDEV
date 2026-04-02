import React from 'react'
export default function Unidades() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border-l-4 border-green-500">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Augusta</h2>
          <p className="text-gray-600">
            Rua Augusta, 1585 - Consolação
          </p>
          <p className="text-gray-600">
            São Paulo, SP - 01305-100
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border-l-4 border-green-500">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Rua da Consolação II</h2>
          <p className="text-gray-600">
            Rua da Consolação, 3080 - Cerqueira César
          </p>
          <p className="text-gray-600">
            São Paulo - SP
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border-l-4 border-green-500">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Paulista</h2>
          <p className="text-gray-600">
            Avenida Paulista, 664 - Bela Vista
          </p>
          <p className="text-gray-600">
            São Paulo - SP
          </p>
        </div>

      </div>
    </div>
  );
}