import React from 'react'

const calcularPercentual = (dados, sexo) => {
  const { idade, peito, abdomen, coxa, triceps, suprailiaca } = dados
  
  const idadeNum = parseFloat(idade)
  let somaDobras = 0
  let densidadeCorporal = 0

  if (sexo === 'homem') {
    const peitoNum = parseFloat(peito)
    const abdomenNum = parseFloat(abdomen)
    const coxaNum = parseFloat(coxa)

    somaDobras = peitoNum + abdomenNum + coxaNum
    densidadeCorporal = 1.10938 - (0.0008267 * somaDobras) + (0.0000016 * Math.pow(somaDobras, 2)) - (0.0002574 * idadeNum)
  } else {
    const tricepsNum = parseFloat(triceps)
    const suprailiacaNum = parseFloat(suprailiaca)
    const coxaNum = parseFloat(coxa)

    somaDobras = tricepsNum + suprailiacaNum + coxaNum
    densidadeCorporal = 1.0994921 - (0.0009929 * somaDobras) + (0.0000023 * Math.pow(somaDobras, 2)) - (0.0001392 * idadeNum)
  }

  return (495 / densidadeCorporal) - 450
}

export default function ResultadoGordura({ dados, sexo }) {
  const percentual = calcularPercentual(dados, sexo)

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
