import React, { useState } from 'react'
import Header from '../components/Header'

const Bio = () => {
  const [sexo, setSexo] = useState('homem')
  const [idade, setIdade] = useState(0)
  const [peito, setPeito] = useState(0)
  const [abdomen, setAbdomen] = useState(0)
  const [coxa, setCoxa] = useState(0)
  const [triceps, setTriceps] = useState(0)
  const [suprailiaca, setSuprailiaca] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [mostrarResultado, setMostrarResultado] = useState(false)

  const calcularGordura = () => {
    let somaDobras = 0
    let densidadeCorporal = 0

    if (sexo === 'homem') {
      if (peito <= 0 || abdomen <= 0 || coxa <= 0) {
        alert('Preencha todas as dobras cutâneas')
        return
      }
      somaDobras = peito + abdomen + coxa
      densidadeCorporal = 1.10938 - (0.0008267 * somaDobras) + (0.0000016 * Math.pow(somaDobras, 2)) - (0.0002574 * idade)
    } else {
      if (triceps <= 0 || suprailiaca <= 0 || coxa <= 0) {
        alert('Preencha todas as dobras cutâneas')
        return
      }
      somaDobras = triceps + suprailiaca + coxa
      densidadeCorporal = 1.0994921 - (0.0009929 * somaDobras) + (0.0000023 * Math.pow(somaDobras, 2)) - (0.0001392 * idade)
    }

    if (densidadeCorporal > 0) {
      const percentualGordura = (495 / densidadeCorporal) - 450
      setResultado(percentualGordura)
      setMostrarResultado(true)
    }
  }

  const getCategoria = (percentual) => {
    if (sexo === 'homem') {
      if (percentual < 6) return 'Atletico'
      if (percentual < 14) return 'Fitness'
      if (percentual < 18) return 'Normal'
      if (percentual < 25) return 'Sobrepeso'
      return 'Obeso'
    } else {
      if (percentual < 14) return 'Atletico'
      if (percentual < 21) return 'Fitness'
      if (percentual < 25) return 'Normal'
      if (percentual < 32) return 'Sobrepeso'
      return 'Obeso'
    }
  }

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#D9D9D9] flex flex-col items-center pt-28 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 transition hover:shadow-xl">
          <h2 className="text-2xl font-bold text-[#03A63C] text-center mb-6">
            Calcule seu Percentual de Gordura (3 Dobras)
          </h2>

          <div className="flex gap-4 mb-6">
            <button
              type="button"
              onClick={() => { setSexo('homem'); setMostrarResultado(false) }}
              className={`flex-1 py-2 rounded-lg font-medium transition ${
                sexo === 'homem' 
                  ? 'bg-[#03A63C] text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Homem
            </button>
            <button
              type="button"
              onClick={() => { setSexo('mulher'); setMostrarResultado(false) }}
              className={`flex-1 py-2 rounded-lg font-medium transition ${
                sexo === 'mulher' 
                  ? 'bg-[#03A63C] text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Mulher
            </button>
          </div>

          <form className="flex flex-col gap-5 text-[#261008]">
            <div className="flex flex-col gap-1">
              <label className="font-medium">Idade <span className="text-sm text-gray-500">(anos)</span></label>
              <input
                type="number"
                placeholder="Digite sua idade"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#03A63C]"
                onChange={({ target }) => setIdade(parseFloat(target.value))}
              />
            </div>

            {sexo === 'homem' ? (
              <>
                <div className="flex flex-col gap-1">
                  <label className="font-medium">Peito <span className="text-sm text-gray-500">(mm)</span></label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Digite a dobra do peito"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#03A63C]"
                    onChange={({ target }) => setPeito(parseFloat(target.value))}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-medium">Abdômen <span className="text-sm text-gray-500">(mm)</span></label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Digite a dobra do abdômen"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#03A63C]"
                    onChange={({ target }) => setAbdomen(parseFloat(target.value))}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-medium">Coxa <span className="text-sm text-gray-500">(mm)</span></label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Digite a dobra da coxa"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#03A63C]"
                    onChange={({ target }) => setCoxa(parseFloat(target.value))}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-1">
                  <label className="font-medium">Tríceps <span className="text-sm text-gray-500">(mm)</span></label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Digite a dobra do tríceps"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#03A63C]"
                    onChange={({ target }) => setTriceps(parseFloat(target.value))}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-medium">Supra-ilíaca <span className="text-sm text-gray-500">(mm)</span></label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Digite a dobra supra-ilíaca"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#03A63C]"
                    onChange={({ target }) => setSuprailiaca(parseFloat(target.value))}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-medium">Coxa <span className="text-sm text-gray-500">(mm)</span></label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Digite a dobra da coxa"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#03A63C]"
                    onChange={({ target }) => setCoxa(parseFloat(target.value))}
                  />
                </div>
              </>
            )}

            <button
              type="button"
              onClick={calcularGordura}
              className="mt-4 bg-[#03A63C] hover:bg-[#84D904] text-white font-semibold py-3 rounded-lg transition hover:scale-105"
            >
              Calcular
            </button>

            {mostrarResultado && (
              <div className="mt-6 p-4 bg-[#03A63C] text-white rounded-lg text-center">
                <p className="text-lg font-bold">Percentual de Gordura:</p>
                <p className="text-3xl font-bold">{resultado.toFixed(1)}%</p>
                <p className="text-lg mt-2">Categoria: {getCategoria(resultado)}</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

export default Bio