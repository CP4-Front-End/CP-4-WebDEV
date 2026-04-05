import React from 'react'

export default function ResultadoGordura({ resultado, sexo }) {
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
    <div className="mt-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-black shadow-2xl">
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
    </div>
  )
}