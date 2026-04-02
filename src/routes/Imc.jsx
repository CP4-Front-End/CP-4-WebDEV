import React from 'react'
import {useEffect, useState} from 'react'
import Resultado from '../components/Resultado'

const Imc= () => {
    // hooks
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [mostrarResultado, setMostrarResultado] = useState(false)

    const calculaIMC = ()=>{
        if(peso > 0 && altura > 0){
            let imc = peso / altura**2
            setResultado(imc)
        }else{
            alert("insira um valor válido")
        }
    }

    useEffect(()=>{
        resultado > 0 ? setMostrarResultado(true):setMostrarResultado(false)
    }, [resultado])

  return (
     <section>
        <div className="box">
            <form>
            <div>
                <label htmlFor="altura">Altura<span>(ex: 1.80)</span></label>
                <input
                id="altura"
                type="number"
                step="0.01" //permite o uso de ponto/virgula (casa decimal)
                placeholder="Digite sua altura"
                onChange={({target})=>setAltura(parseFloat(target.value))}
                />
                </div>
            
                <div>
                <label htmlFor="peso">Peso<span>(ex: 65)</span></label>
                <input
                id="peso"
                type="number"
                step="0.01" //permite o uso de ponto/virgula (casa decimal)
                placeholder="Digite sua altura"
                onChange={({target})=>setPeso(parseFloat(target.value))}
                />
            </div>
            <button type="button" onClick={calcularImc}>Calcular</button>
            </form>
        </div>
        {mostrarresultado &&(
        //Envia o valor do resultado com 2 casas decimais via props para o componente resultado
        <Resultado resultado={resultado.toFixed(2)}/>
      )}
    </section>
  )
}

export default Imc