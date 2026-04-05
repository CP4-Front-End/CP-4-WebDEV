import React, { useState } from 'react'
import Header from '../components/Header'

const TesteBio = () => {
  const [sexo, setSexo] = useState('homem')
  const [idade, setIdade] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [peito, setPeito] = useState('')
  const [abdomen, setAbdomen] = useState('')
  const [coxa, setCoxa] = useState('')
  const [triceps, setTriceps] = useState('')
  const [suprailiaca, setSuprailiaca] = useState('')
  const [resultado, setResultado] = useState(null)
  const [mostrarResultado, setMostrarResultado] = useState(false)

  const calcularGordura = () => {
    const idadeNum = parseFloat(idade)
    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura)
    let somaDobras = 0
    let densidadeCorporal = 0

    if (!idadeNum || idadeNum < 10 || idadeNum > 100) {
      alert('Insira uma idade valida (10-100 anos)')
      return
    }

    if (!pesoNum || pesoNum < 20 || pesoNum > 300) {
      alert('Insira um peso valido')
      return
    }

    if (!alturaNum || alturaNum < 1 || alturaNum > 2.5) {
      alert('Insira uma altura valida')
      return
    }

    if (sexo === 'homem') {
      const peitoNum = parseFloat(peito)
      const abdomenNum = parseFloat(abdomen)
      const coxaNum = parseFloat(coxa)

      if (!peitoNum || !abdomenNum || !coxaNum) {
        alert('Preencha todas as dobras cutaneas')
        return
      }
      somaDobras = peitoNum + abdomenNum + coxaNum
      densidadeCorporal = 1.10938 - (0.0008267 * somaDobras) + (0.0000016 * Math.pow(somaDobras, 2)) - (0.0002574 * idadeNum)
    } else {
      const tricepsNum = parseFloat(triceps)
      const suprailiacaNum = parseFloat(suprailiaca)
      const coxaNum = parseFloat(coxa)

      if (!tricepsNum || !suprailiacaNum || !coxaNum) {
        alert('Preencha todas as dobras cutaneas')
        return
      }
      somaDobras = tricepsNum + suprailiacaNum + coxaNum
      densidadeCorporal = 1.0994921 - (0.0009929 * somaDobras) + (0.0000023 * Math.pow(somaDobras, 2)) - (0.0001392 * idadeNum)
    }

    if (densidadeCorporal > 0) {
      const percentualGordura = (495 / densidadeCorporal) - 450
      
      const massaGorda = pesoNum * (percentualGordura / 100)
      const massaMagra = pesoNum - massaGorda
      const aguaCorporal = massaMagra * 0.73
      
      let metabolismoBasal
      if (sexo === 'homem') {
        metabolismoBasal = 88.362 + (13.397 * pesoNum) + (4.799 * alturaNum * 100) - (5.677 * idadeNum)
      } else {
        metabolismoBasal = 447.593 + (9.247 * pesoNum) + (3.098 * alturaNum * 100) - (4.330 * idadeNum)
      }

      setResultado({
        percentualGordura: percentualGordura,
        massaGorda: massaGorda,
        massaMagra: massaMagra,
        aguaCorporal: aguaCorporal,
        metabolismoBasal: Math.round(metabolismoBasal),
        peso: pesoNum,
        altura: alturaNum
      })
      setMostrarResultado(true)
    }
  }

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

  return (
    <>
      <Header />
      <section className="min-h-screen bg-black flex flex-col items-center pt-20 px-4 pb-12">
        
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-white mb-2">
              Analise de <span className="text-orange-500">Composicao Corporal</span>
            </h1>
            <p className="text-gray-400 text-lg">Teste das 3 Dobras (Jackson-Pollock)</p>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-800">
            
            <div className="flex gap-3 mb-8">
              <button
                type="button"
                onClick={() => { setSexo('homem'); setMostrarResultado(false); setResultado(null) }}
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
                onClick={() => { setSexo('mulher'); setMostrarResultado(false); setResultado(null) }}
                className={`flex-1 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  sexo === 'mulher' 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-black shadow-lg shadow-orange-500/30' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                Mulher
              </button>
            </div>

            <form className="flex flex-col gap-6 text-white">
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

              <button
                type="button"
                onClick={calcularGordura}
                className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-black font-bold py-5 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-orange-500/20"
              >
                Calcular Composicao Corporal
              </button>

              {mostrarResultado && resultado && (
                <div className="mt-6 space-y-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-black shadow-2xl">
                    <div className="text-center">
                      <p className="text-black/80 font-medium text-lg mb-2">Seu Percentual de Gordura</p>
                      <p className="text-6xl font-extrabold mb-2">{resultado.percentualGordura.toFixed(1)}<span className="text-3xl">%</span></p>
                      <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full mt-3">
                        <span className="font-bold text-lg" style={{ color: getCategoria(resultado.percentualGordura).cor }}>{getCategoria(resultado.percentualGordura).label}</span>
                      </div>
                      <p className="text-black/90 mt-4 text-sm leading-relaxed">
                        {getDescricaoCategoria(getCategoria(resultado.percentualGordura))}
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
                          style={{ width: `${Math.min(100, Math.max(0, resultado.percentualGordura * 3))}%` }}
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
              )}
            </form>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-900/60 rounded-2xl p-4 shadow-md border border-gray-800">
              <p className="text-xs text-gray-500 uppercase font-bold">Metodo</p>
              <p className="text-orange-500 font-bold">Jackson-Pollock 3</p>
            </div>
            <div className="bg-gray-900/60 rounded-2xl p-4 shadow-md border border-gray-800">
              <p className="text-xs text-gray-500 uppercase font-bold">Precisao</p>
              <p className="text-orange-500 font-bold">+/- 3-4%</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TesteBio