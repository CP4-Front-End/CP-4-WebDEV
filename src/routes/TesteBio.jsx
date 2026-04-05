import React, { useState } from 'react'
import Header from '../components/Header'
import ToggleSexo from '../components/ToggleSexo'
import DobrasForm from '../components/DobrasForm'
import ResultadoGordura from '../components/ResultadoGordura'

const TesteBio = () => {
  const [sexo, setSexo] = useState('homem')
  const [idade, setIdade] = useState('')
  const [peito, setPeito] = useState('')
  const [abdomen, setAbdomen] = useState('')
  const [coxa, setCoxa] = useState('')
  const [triceps, setTriceps] = useState('')
  const [suprailiaca, setSuprailiaca] = useState('')
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [erro, setErro] = useState(null)

  const limparResultado = () => {
    setMostrarResultado(false)
    setErro(null)
  }

  const validarDados = () => {
    const idadeNum = parseFloat(idade)

    if (!idadeNum || idadeNum < 10 || idadeNum > 100) {
      return { valido: false, mensagem: 'Insira uma idade valida (10-100 anos)' }
    }

    if (sexo === 'homem') {
      if (!peito || !abdomen || !coxa) {
        return { valido: false, mensagem: 'Preencha todas as dobras cutaneas' }
      }
    } else {
      if (!triceps || !suprailiaca || !coxa) {
        return { valido: false, mensagem: 'Preencha todas as dobras cutaneas' }
      }
    }

    return { valido: true }
  }

  const calcular = () => {
    const validacao = validarDados()
    if (!validacao.valido) {
      setErro(validacao.mensagem)
      setMostrarResultado(false)
      return
    }

    setErro(null)
    setMostrarResultado(true)
  }

  const handleDobrasChange = (field, value) => {
    switch(field) {
      case 'peito': setPeito(value); break
      case 'abdomen': setAbdomen(value); break
      case 'coxa': setCoxa(value); break
      case 'triceps': setTriceps(value); break
      case 'suprailiaca': setSuprailiaca(value); break
    }
  }

  const valores = { peito, abdomen, coxa, triceps, suprailiaca }

  return (
    <>
      <Header />
      <section className="min-h-screen bg-black flex flex-col items-center pt-20 px-4 pb-12">
        
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-white mb-2">
              Percentual de <span className="text-orange-500">Gordura</span>
            </h1>
            <p className="text-gray-400 text-lg">Teste das 3 Dobras (Jackson-Pollock)</p>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-800">
            
            <ToggleSexo 
              sexo={sexo} 
              setSexo={setSexo} 
              limpar={limparResultado} 
            />

            <div className="relative mb-6">
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

            <DobrasForm 
              sexo={sexo}
              idade={idade}
              valores={valores}
              onChange={handleDobrasChange}
            />

            <button
              type="button"
              onClick={calcular}
              className="mt-6 mx-auto w-fit bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-black font-bold px-8 py-5 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-orange-500/20"
            >
              Calcular Gordura
            </button>

            {mostrarResultado && (
              <ResultadoGordura dados={{ idade, peito, abdomen, coxa, triceps, suprailiaca }} sexo={sexo} />
            )}

            {erro && (
              <p className="text-red-500 text-center mt-4 font-medium">{erro}</p>
            )}
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