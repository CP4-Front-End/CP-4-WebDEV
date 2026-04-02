import React from 'react'

const Tabela = ({resultado}) => {
    const valor = parseFloart(resultado);
    console.log(valor);
    if(resultado< 18.5){
        return (
            <> 
                <td>Abaixo do Peso</td>
                <td>Seu IMC está abaixo de 18.5</td>
            </>
        )
    }else if(resultado >= 18.5 && resultado < 25){
        return (
            <> 
                <td>Peso normal</td>
                <td>Seu IMC está entre 18.5 e 24.9</td>
                
            </>
        )
    }else if(resultado >= 25 && resultado < 30){
        return (
            <> 
                <td>Pré-obesidade</td>
                <td>Seu IMC está entre 25 e 29.9</td>
            </>
        )
    }else if (resultado >= 30 && resultado <35){
        return (
            <>
                <td>Obesidade Grau I</td>
                <td>Seu IMC está entre 30 e 34.9</td>
            </>
        )
    }else if (resultado >= 35 && resultado <40){
        return (
            <>
                <td>Obesidade Grau II</td>
                <td>Seu IMC está entre 35 e 39.9</td>
            </>
        )
    }else if (resultado >= 40){
        return (
            <>
                <td>Obesidade Grau III</td>
                <td>Seu IMC está acima de 40</td>
            </>
        )
    }
}

const Resultado = ({resultado}) => {
  return (
    <div>
        <div className="resultado">
            <h2>
                Seu IMC é de: <span className="img-span">{resultado}</span>
            </h2>
        </div>
        <table className="tabela">
            <thead className="tabelaHeader">
                <tr>
                    <th>Classificação:</th>
                    <th>IMC:</th>
                </tr>
            </thead>
            <tbody className="tabelaBody">
                <tr>
                    <Tabela resultado={resultado}/>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Resultado