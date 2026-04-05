import React from 'react'

export default function ToggleSexo({ sexo, setSexo, limpar }) {
  return (
    <div className="flex gap-3 mb-8">
      <button
        type="button"
        onClick={() => { setSexo('homem'); limpar() }}
        className={`flex-1 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
          sexo === 'homem' 
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-black shadow-lg shadow-orange-500/30' 
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
        }`}
      >
        Homem
      </button>
      <button
        type="button"
        onClick={() => { setSexo('mulher'); limpar() }}
        className={`flex-1 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
          sexo === 'mulher' 
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-black shadow-lg shadow-orange-500/30' 
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
        }`}
      >
        Mulher
      </button>
    </div>
  )
}