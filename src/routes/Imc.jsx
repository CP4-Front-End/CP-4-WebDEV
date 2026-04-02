import React, { useEffect, useState } from 'react'
import Resultado from '../components/Resultado'
import Header from '../components/Header'

const Imc = () => {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultadoImc, setResultadoImc] = useState(0)
  const [mostrarresultado, setMostrarResultado] = useState(false)
  const [mostrarCalculadora, setMostrarCalculadora] = useState(false)

  const calcularImc = () => {
    if (peso > 0 && altura > 0) {
      let imc = peso / altura ** 2
      setResultadoImc(imc)
    } else {
      alert("Insira valores válidos")
    }
  }

  useEffect(() => {
    setMostrarResultado(resultadoImc > 0)
  }, [resultadoImc])

  return (
    <>
      <Header abrirCalculadora={() => setMostrarCalculadora(true)} />

      <section className="min-h-screen bg-[#D9D9D9] flex flex-col items-center pt-28 px-4">

        {/* CARD */}
        {mostrarCalculadora && (
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 transition hover:shadow-xl">

            <h2 className="text-2xl font-bold text-[#03A63C] text-center mb-6">
              Calcule seu IMC
            </h2>

            <form className="flex flex-col gap-5 text-[#261008]">

              {/* ALTURA */}
              <div className="flex flex-col gap-1">
                <label className="font-medium">
                  Altura <span className="text-sm text-gray-500">(ex: 1.80)</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Digite sua altura"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#03A63C]"
                  onChange={({ target }) => setAltura(parseFloat(target.value))}
                />
              </div>

              {/* PESO */}
              <div className="flex flex-col gap-1">
                <label className="font-medium">
                  Peso <span className="text-sm text-gray-500">(ex: 65)</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Digite seu peso"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#03A63C]"
                  onChange={({ target }) => setPeso(parseFloat(target.value))}
                />
              </div>

              {/* BOTÃO */}
              <button
                type="button"
                onClick={calcularImc}
                className="mt-4 bg-[#03A63C] hover:bg-[#84D904] text-white font-semibold py-3 rounded-lg transition hover:scale-105"
              >
                Calcular
              </button>

            </form>
          </div>
        )}

        {/* RESULTADO */}
        {mostrarresultado && (
          <div className="w-full max-w-md mt-6">
            <Resultado resultadoImc={resultadoImc.toFixed(2)} />
          </div>
        )}

      </section>
    </>
  )
}

export default Imc