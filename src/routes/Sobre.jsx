import React from 'react'
import Header from '../components/Header'

const Sobre = () => {
  return (
    <>
    <Header/>
     <div className="relative isolate bg-[#D9D9D9] py-24 sm:py-32 flex flex-col items-center">
          <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#03A63C] to-[#03A63C] opacity-30"
            />
          </div>
            <h1 className="font-bold text-4xl text-center lg:text-5xl">Sobre a Academia Inteligente:</h1>
            <p className="font-bold text-2xl text-center lg:text-3xl py-5">Transformando vidas através de treinos inteligentes</p>
          <section className="text-center py-5 px-3 bg-[#03A63C] rounded-xl lg:w-5xl mx-6 border-4 border-[#84D904]">
              <h4 className="text-xl font-bold mb-6">Quem somos</h4>
              <p className="text-[#D9D9D9] text-xl font-semibold">Na Academia Inteligente, acreditamos que treinar vai muito além de levantar pesos, é sobre evoluir com estratégia, consciência e propósito.</p>
               <p className="text-[#D9D9D9] text-xl font-semibold">Nosso objetivo é oferecer um ambiente moderno, acolhedor e eficiente, onde cada aluno encontra suporte para alcançar seus resultados de forma segura e consistente. Aqui, unimos tecnologia, metodologia e acompanhamento profissional para transformar seu treino em algo realmente inteligente.</p>
               <p className="text-[#D9D9D9] text-xl font-semibold">Contamos com equipamentos de alta qualidade, profissionais qualificados e uma estrutura pensada para atender desde iniciantes até atletas mais avançados. Cada detalhe foi planejado para proporcionar a melhor experiência possível, respeitando o seu ritmo e incentivando sua evolução contínua.</p>
               <p className="text-[#D9D9D9] text-xl font-semibold">Mais do que uma academia, somos um espaço de transformação. Acreditamos que disciplina, orientação correta e constância são os pilares para uma vida mais saudável.</p>
               <p className="text-[#D9D9D9] text-xl font-semibold pb-5">Academia Inteligente: treine com propósito, evolua com inteligência.</p>
            </section>
<h2 className="font-bold text-2xl text-center lg:text-3xl mt-10 mb-8">Nossos diferenciais</h2>         
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="bg-white p-6 rounded-xl shadow-md border-4 border-[#03A63C]">
    <h3 className="font-bold text-lg mb-3 text-[#261008]">
      Treino Inteligente
    </h3>
    <ul className="text-sm text-gray-600 space-y-1">
      <li>Planejamento personalizado</li>
      <li>Foco em resultado real</li>
      <li>Evolução acompanhada</li>
      <li>Adaptação ao seu nível</li>
    </ul>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-md border-4 border-[#84D904]">
    <h3 className="font-bold text-lg mb-3 text-[#261008]">
      Equipamentos Modernos
    </h3>
    <ul className="text-sm text-gray-600 space-y-1">
      <li>Máquinas de última geração</li>
      <li>Área completa de treino</li>
      <li>Espaço funcional</li>
      <li>Manutenção constante</li>
    </ul>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-md border-4 border-[#F2E205]">
    <h3 className="font-bold text-lg mb-3 text-[#261008]">
      Profissionais Qualificados
    </h3>
    <ul className="text-sm text-gray-600 space-y-1">
      <li>Instrutores certificados</li>
      <li>Acompanhamento próximo</li>
      <li>Suporte durante o treino</li>
      <li>Orientação segura</li>
    </ul>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-md border-4 border-[#261008]">
    <h3 className="font-bold text-lg mb-3 text-[#261008]">
      Flexibilidade de Horários
    </h3>
    <ul className="text-sm text-gray-600 space-y-1">
      <li>Aberto todos os dias</li>
      <li>Horários amplos</li>
      <li>Treine no seu tempo</li>
      <li>Sem burocracia</li>
    </ul>
  </div>

</div>
<section className="bg-[#261008] py-16 px-6 text-center rounded-xl my-24">
  <div className="max-w-2xl mx-auto">

    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
      Pronto para começar sua evolução?
    </h2>

    <p className="text-[#D9D9D9] mb-8 text-base lg:text-lg">
      Dê o primeiro passo hoje e transforme sua rotina com treinos inteligentes.
    </p>

    <button className="bg-[#03A63C] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#84D904] transition duration-300 cursor-pointer">
      <a href="/planos">Ver Planos</a>
    </button>

  </div>
</section>
          </div>
    </>
  )
}

export default Sobre