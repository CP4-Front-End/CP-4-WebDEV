import React from 'react'

export default function ResultadoBio({ resultado, sexo }) {
  const getCategoria = (percentual) => {
    if (sexo === 'homem') {
      if (percentual < 6) return { label: 'Atletico', cor: '#FFD700' }
      if (percentual < 14) return { label: 'Fitness', cor: '#F97316' }
      if (percentual < 18) return { label: 'Normal', cor: '#22C55E' }
      if (percentual < 25) return { label: 'Sobrepeso', cor: '#EAB308' }
      return { label: 'Obeso', cor: '#EF4444' }
    } else {
      if (percentual < 14) return { label: 'Atletico', cor: '#FFD700' }
      if (percentual < 21) return { label: 'Fitness', cor: '#F97316' }
      if (percentual < 25) return { label: 'Normal', cor: '#22C55E' }
      if (percentual < 32) return { label: 'Sobrepeso', cor: '#EAB308' }
      return { label: 'Obeso', cor: '#EF4444' }
    }
  }

  const getDescricaoCategoria = (categoria) => {
    const descricoes = {
      'Atletico': 'Excelente! Nivel competitivo de definicao muscular.',
      'Fitness': 'Muito bom! Corpo definido e saudavel.',
      'Normal': 'Bom! Intervalo considerado saudavel.',
      'Sobrepeso': 'Atencao! Considere atividades fisicas e alimentacao.',
      'Obeso': 'Alto risco! Procure orientacao profissional.'
    }
    return descricoes[categoria.label]
  }

  const percentual = resultado.percentualGordura
  const categoria = getCategoria(percentual)

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-black shadow-2xl">
        <div className="text-center">
          <p className="text-black/80 font-medium text-lg mb-2">Seu Percentual de Gordura</p>
          <p className="text-6xl font-extrabold mb-2">{percentual.toFixed(1)}<span className="text-3xl">%</span></p>
          <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full mt-3">
            <span className="font-bold text-lg" style={{ color: categoria.cor }}>{categoria.label}</span>
          </div>
          <p className="text-black/90 mt-4 text-sm leading-relaxed">
            {getDescricaoCategoria(categoria)}
          </p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-black/20">
          <div className="flex justify-between text-xs text-black/70 mb-2">
            <span>Mais magro</span>
            <span>Mais gordo</span>
          </div>
          <div className="h-3 bg-black/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 via-green-400 to-red-500 rounded-full transition-all duration-1000"
              style={{ width: `${Math.min(100, Math.max(0, percentual * 3))}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <p className="text-xs text-gray-500 uppercase font-bold mb-2">Massa Gorda</p>
          <p className="text-2xl font-bold text-orange-400">{resultado.massaGorda.toFixed(1)} <span className="text-sm text-gray-400">kg</span></p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <p className="text-xs text-gray-500 uppercase font-bold mb-2">Massa Magra</p>
          <p className="text-2xl font-bold text-green-500">{resultado.massaMagra.toFixed(1)} <span className="text-sm text-gray-400">kg</span></p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <p className="text-xs text-gray-500 uppercase font-bold mb-2">Agua Corporal</p>
          <p className="text-2xl font-bold text-blue-400">{resultado.aguaCorporal.toFixed(1)} <span className="text-sm text-gray-400">L</span></p>
          <p className="text-xs text-gray-500 mt-1">~{((resultado.aguaCorporal / resultado.peso) * 100).toFixed(0)}% do peso</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <p className="text-xs text-gray-500 uppercase font-bold mb-2">Metabolismo Basal</p>
          <p className="text-2xl font-bold text-yellow-400">{resultado.metabolismoBasal} <span className="text-sm text-gray-400">kcal/dia</span></p>
          <p className="text-xs text-gray-500 mt-1">Calorias em repouso</p>
        </div>
      </div>
    </div>
  )
}