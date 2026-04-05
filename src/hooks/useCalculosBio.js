import { useState, useCallback } from 'react'

export const useCalculosBio = () => {
  const [resultado, setResultado] = useState(null)
  const [erro, setErro] = useState(null)

  const calcularGordura = useCallback((dados) => {
    const { sexo, idade, peito, abdomen, coxa, triceps, suprailiaca, peso } = dados
    
    const idadeNum = parseFloat(idade)
    const pesoNum = parseFloat(peso)
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

    const percentualGordura = (495 / densidadeCorporal) - 450
    const massaGorda = (percentualGordura / 100) * pesoNum
    const massaMagra = pesoNum - massaGorda
    const aguaCorporal = massaMagra * 0.6
    const metabolismoBasal = Math.round(massaMagra * 22)

    return {
      percentualGordura: percentualGordura.toFixed(1),
      massaGorda: massaGorda.toFixed(1),
      massaMagra: massaMagra.toFixed(1),
      aguaCorporal: aguaCorporal.toFixed(1),
      metabolismoBasal
    }
  }, [])

  const validarDados = useCallback((dados) => {
    const { sexo, idade, peso, peito, abdomen, coxa, triceps, suprailiaca } = dados

    const idadeNum = parseFloat(idade)
    const pesoNum = parseFloat(peso)

    if (!pesoNum || pesoNum < 20 || pesoNum > 300) {
      return { valido: false, mensagem: 'Insira um peso válido (20-300 kg)' }
    }

    if (!idadeNum || idadeNum < 10 || idadeNum > 100) {
      return { valido: false, mensagem: 'Insira uma idade válida (10-100 anos)' }
    }

    if (sexo === 'homem') {
      if (!peito || !abdomen || !coxa) {
        return { valido: false, mensagem: 'Preencha todas as dobras cutâneas' }
      }
    } else {
      if (!triceps || !suprailiaca || !coxa) {
        return { valido: false, mensagem: 'Preencha todas as dobras cutâneas' }
      }
    }

    return { valido: true }
  }, [])

  const calcular = useCallback((dados) => {
    setErro(null)
    
    const validacao = validarDados(dados)
    if (!validacao.valido) {
      setErro(validacao.mensagem)
      setResultado(null)
      return null
    }

    const result = calcularGordura(dados)
    setResultado(result)
    return result
  }, [validarDados, calcularGordura])

  const limparResultado = useCallback(() => {
    setResultado(null)
    setErro(null)
  }, [])

  return {
    resultado,
    erro,
    calcular,
    limparResultado,
    validarDados
  }
}
