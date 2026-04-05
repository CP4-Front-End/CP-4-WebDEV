import React from 'react'

export default function DobrasForm({ sexo, peito, setPeito, abdomen, setAbdomen, coxa, setCoxa, triceps, setTriceps, suprailiaca, setSuprailiaca }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-orange-500/10 rounded-2xl p-4 border-l-4 border-orange-500">
        <p className="font-bold text-white text-lg mb-1">
          {sexo === 'homem' ? 'Dobras Masculinas' : 'Dobras Femininas'}
        </p>
        <p className="text-sm text-gray-500">Meça as dobras em milimetros (mm)</p>
      </div>

      {sexo === 'homem' ? (
        <div className="space-y-4">
          <div className="relative">
            <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
              Peito
            </label>
            <input
              type="number"
              step="0.1"
              placeholder="Dobra do peito (mm)"
              value={peito}
              className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
              onChange={({ target }) => setPeito(target.value)}
            />
          </div>
          <div className="relative">
            <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
              Abdomen
            </label>
            <input
              type="number"
              step="0.1"
              placeholder="Dobra do abdomen (mm)"
              value={abdomen}
              className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
              onChange={({ target }) => setAbdomen(target.value)}
            />
          </div>
          <div className="relative">
            <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
              Coxa
            </label>
            <input
              type="number"
              step="0.1"
              placeholder="Dobra da coxa (mm)"
              value={coxa}
              className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
              onChange={({ target }) => setCoxa(target.value)}
            />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
              Triceps
            </label>
            <input
              type="number"
              step="0.1"
              placeholder="Dobra do triceps (mm)"
              value={triceps}
              className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
              onChange={({ target }) => setTriceps(target.value)}
            />
          </div>
          <div className="relative">
            <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
              Supra-iliaca
            </label>
            <input
              type="number"
              step="0.1"
              placeholder="Dobra supra-iliaca (mm)"
              value={suprailiaca}
              className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
              onChange={({ target }) => setSuprailiaca(target.value)}
            />
          </div>
          <div className="relative">
            <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
              Coxa
            </label>
            <input
              type="number"
              step="0.1"
              placeholder="Dobra da coxa (mm)"
              value={coxa}
              className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
              onChange={({ target }) => setCoxa(target.value)}
            />
          </div>
        </div>
      )}
    </div>
  )
}