import React from 'react'
import {useEffect, useState} from 'react'
import Resultado from '../components/Resultado'

const Imc= () => {
    // hooks
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultadoImc, setResultadoImc] = useState(0)
    const [mostrarresultado, setMostrarResultado] = useState(false)

    const calcularImc = ()=>{
        if(peso > 0 && altura > 0){
            let imc = peso / altura**2
            setResultadoImc(imc)
        }else{
            alert("insira um valor válido")
        }
    }

    useEffect(()=>{
        resultadoImc > 0 ? setMostrarResultado(true):setMostrarResultado(false)
    }, [resultadoImc])

  return (
     <section>
        <div class="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-md hover:shadow-1 transform hover:scale-105 transition duration-500">
            <h2 className="text-xl font-bold text-[#03A63C]">Calcule seu IMC</h2>
            <form className="mt-2 text-black">
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
            <button type="button" onClick={calcularImc}className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"> Calcular</button>
            </form>
        </div>
        {mostrarresultado &&(
        //Envia o valor do resultado com 2 casas decimais via props para o componente resultado
        
        <Resultado resultadoImc={resultadoImc.toFixed(2)}/>
      )}
    </section>
  )
}

export default Imc