import React from 'react'
import Header from '../components/Header'
const Bio = () => {
    return (
        <>
         <section className="min-h-screen bg-[#D9D9D9] flex flex-col items-center pt-28 px-4">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 transition hover:shadow-xl">

            <h2 className="text-2xl font-bold text-[#03A63C] text-center mb-6">
              Calcule seu Percentual de gordura corporal(teste das 3 dobras) 
            </h2>

            <form className="flex flex-col gap-5 text-[#261008]">

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
                <button
                  type="button"
                  onClick={calcularImc}
                  className="mt-4 bg-[#03A63C] hover:bg-[#84D904] text-white font-semibold py-3 rounded-lg transition hover:scale-105"
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

export default Bio