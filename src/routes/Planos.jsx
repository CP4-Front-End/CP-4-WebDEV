import React from 'react'
import Header from '../components/Header'

const Planos= () => {
  return (
    <>
        <Header/>
        <section>
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center">Escolha seu <span className='text-[#84D904]'>plano</span></h1>
            <p className='text-[#F2E205] md-12 texe-center max-w-lg'>Mude sua vida por um pequeno custo!</p>

            <div className='grid md:grud-cols-3 gap-8 max-w-5xl w-full'>
                <div className="plan-card bg-white/10 p-8 rounded-2xl backdrop-blur-lg transition duration-300 border border-[#84D904 hover:border-[#261008] hover:border-green cursor-pointer">
                    <h3 className='text-xl font-bold mb-2'>Mensal</h3>
                    <p className='text-[#F2E205]'>por mês</p>
                    <div></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Planos