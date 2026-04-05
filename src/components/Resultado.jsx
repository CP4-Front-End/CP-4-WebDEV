import React from 'react'

const getClassificacao = (resultadoImc) => {
  let resultado = parseFloat(resultadoImc)
  if (resultado < 18.5) {
    return {
      titulo: "Abaixo do peso",
      descricao: "Seu IMC está abaixo de 18.5",
      cor: "text-yellow-500"
    }
  } else if (resultado < 25) {
    return {
      titulo: "Peso normal",
      descricao: "Seu IMC está entre 18.5 e 24.9",
      cor: "text-orange-500"
    }
  } else if (resultado < 30) {
    return {
      titulo: "Pré-obesidade",
      descricao: "Seu IMC está entre 25 e 29.9",
      cor: "text-orange-400"
    }
  } else if (resultado < 35) {
    return {
      titulo: "Obesidade Grau I",
      descricao: "Seu IMC está entre 30 e 34.9",
      cor: "text-red-400"
    }
  } else if (resultado < 40) {
    return {
      titulo: "Obesidade Grau II",
      descricao: "Seu IMC está entre 35 e 39.9",
      cor: "text-red-500"
    }
  } else {
    return {
      titulo: "Obesidade Grau III",
      descricao: "Seu IMC está acima de 40",
      cor: "text-red-700"
    }
  }
}

const Resultado = ({ resultadoImc }) => {

  const info = getClassificacao(resultadoImc)

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-800">

      <div className="text-center mb-6">
        <h2 className="text-lg text-gray-400 font-medium">
          Seu IMC é
        </h2>

        <span className="text-4xl font-bold text-orange-500">
          {resultadoImc}
        </span>
      </div>

      <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
        <h3 className={`text-xl font-semibold ${info.cor}`}>
          {info.titulo}
        </h3>
        <p className="text-sm text-gray-400 mt-2">
          {info.descricao}
        </p>
      </div>

      <div className="mt-6">
        <table className="w-full text-sm text-left border border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-orange-500 text-black font-bold">
            <tr>
              <th className="p-3">Classificação</th>
              <th className="p-3">IMC</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800">
            <tr className="border-t border-gray-700">
              <td className="p-3 font-semibold text-white">{info.titulo}</td>
              <td className="p-3 text-gray-400">{info.descricao}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  )
}

export default Resultado