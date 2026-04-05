import React from 'react'

export default function DobrasForm({ sexo, valores, onChange }) {
  const handleChange = (field) => (e) => {
    onChange(field, e.target.value)
  }

  const inputClassName = "w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"

  const renderInput = (label, field, placeholder) => (
    <div className="relative">
      <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
        {label}
      </label>
      <input
        type="number"
        step="0.1"
        placeholder={placeholder}
        value={valores[field]}
        className={inputClassName}
        onChange={handleChange(field)}
      />
    </div>
  )

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
          {renderInput('Peito', 'peito', 'Dobra do peito (mm)')}
          {renderInput('Abdomen', 'abdomen', 'Dobra do abdomen (mm)')}
          {renderInput('Coxa', 'coxa', 'Dobra da coxa (mm)')}
        </div>
      ) : (
        <div className="space-y-4">
          {renderInput('Triceps', 'triceps', 'Dobra do triceps (mm)')}
          {renderInput('Supra-iliaca', 'suprailiaca', 'Dobra supra-iliaca (mm)')}
          {renderInput('Coxa', 'coxa', 'Dobra da coxa (mm)')}
        </div>
      )}
    </div>
  )
}
