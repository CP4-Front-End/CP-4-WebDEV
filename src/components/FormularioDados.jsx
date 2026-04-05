import React from 'react'

export default function FormularioDados({ peso, setPeso, altura, setAltura, idade, setIdade }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
            Peso (kg)
          </label>
          <input
            type="number"
            step="0.1"
            placeholder="Ex: 70"
            value={peso}
            className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
            onChange={({ target }) => setPeso(target.value)}
          />
        </div>
        <div className="relative">
          <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
            Altura (m)
          </label>
          <input
            type="number"
            step="0.01"
            placeholder="Ex: 1.75"
            value={altura}
            className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
            onChange={({ target }) => setAltura(target.value)}
          />
        </div>
      </div>

      <div className="relative">
        <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
          Idade
        </label>
        <input
          type="number"
          placeholder="Digite sua idade"
          value={idade}
          className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
          onChange={({ target }) => setIdade(target.value)}
        />
      </div>
    </div>
  )
}