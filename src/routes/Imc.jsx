import React, { useEffect, useState } from 'react'
import Resultado from '../components/Resultado'
import Header from '../components/Header'

const Imc = () => {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultadoImc, setResultadoImc] = useState(0)
  const [mostrarresultado, setMostrarResultado] = useState(false)

  const calcularImc = () => {
    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura)
    if (pesoNum > 0 && alturaNum > 0) {
      let imc = pesoNum / alturaNum ** 2
      setResultadoImc(imc)
    } else {
      alert("Insira valores validos")
    }
  }

  useEffect(() => {
    setMostrarResultado(resultadoImc > 0)
  }, [resultadoImc])

  return (
    <>
      <Header />

      <section className="min-h-screen bg-black flex flex-col items-center pt-28 px-4">

        <div className="w-full max-w-md bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-800 transition hover:border-orange-500">

            <h2 className="text-2xl font-bold text-orange-500 text-center mb-6">
              Calcule seu IMC
            </h2>

            <form className="flex flex-col gap-5 text-white">

              <div className="relative">
                <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
                  Altura
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Ex: 1.80"
                  value={altura}
                  className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
                  onChange={({ target }) => setAltura(target.value)}
                />
              </div>

              <div className="relative">
                <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
                  Peso
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Ex: 65"
                  value={peso}
                  className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
                  onChange={({ target }) => setPeso(target.value)}
                />
              </div>

                <button
                  type="button"
                  onClick={calcularImc}
                  className="mt-4 bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-2xl transition hover:scale-105 shadow-lg shadow-orange-500/20"
                >
                  Calcular
                </button>

        {mostrarresultado && (
          <div className="w-full max-w-md mt-6">
            <Resultado resultadoImc={resultadoImc.toFixed(2)} />
          </div>
        )}

            </form>
          </div>
      </section>
    </>
  )
}

export default Imc