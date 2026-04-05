export const calcularGordura = (dados) => {
  const { sexo, idade, peito, abdomen, coxa, triceps, suprailiaca } = dados
  
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

export const validarDados = (dados) => {
  const { sexo, idade, peito, abdomen, coxa, triceps, suprailiaca } = dados

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