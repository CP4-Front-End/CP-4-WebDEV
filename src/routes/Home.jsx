import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className="bg-[#D9D9D9]">
      <Header />
      <Banner />
      <section className="bg-[#D9D9D9] py-16 px-6">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl font-bold text-[#261008] mb-10">
      Nossos Resultados
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      <div className="bg-white rounded-xl p-6 hover:scale-105 transition">
        <h3 className="text-3xl font-bold text-[#03A63C]">+1000</h3>
        <p className="text-[#261008] mt-2">Alunos ativos</p>
      </div>

      <div className="bg-white rounded-xl p-6 hover:scale-105 transition">
        <h3 className="text-3xl font-bold text-[#03A63C]">+5 anos</h3>
        <p className="text-[#261008] mt-2">de experiência</p>
      </div>

      <div className="bg-white rounded-xl p-6 hover:scale-105 transition">
        <h3 className="text-3xl font-bold text-[#03A63C]">+300</h3>
        <p className="text-[#261008] mt-2">transformações</p>
      </div>

      <div className="bg-white rounded-xl p-6 hover:scale-105 transition">
        <h3 className="text-3xl font-bold text-[#03A63C]">100%</h3>
        <p className="text-[#261008] mt-2">foco em resultados</p>
      </div>

    </div>

  </div>
</section>
<section className="bg-[#F2E205] py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl font-bold text-[#261008] mb-10">
      O que nossos alunos dizem
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-[#D9D9D9] p-6 rounded-xl border-4 border-[#84D904] italic hover:scale-105 transition">
        <p className="text-[#261008] mb-4">
          "Desde que comecei a treinar aqui, minha rotina mudou completamente. 
          O acompanhamento faz toda diferença."
        </p>
        <h4 className="font-semibold text-[#261008]">Carlos Silva</h4>
        <p className="text-sm text-[#261008]">Aluno há 1 ano</p>
      </div>

      <div className="bg-[#D9D9D9] p-6 rounded-xl border-4 border-[#84D904] italic hover:scale-105 transition">
        <p className="text-[#261008] mb-4">
          "Ambiente organizado, profissionais atentos e treinos que realmente dão resultado no longo prazo."
        </p>
        <h4 className="font-semibold text-[#261008]">Mariana Souza</h4>
        <p className="text-sm text-[#261008]">Aluna há 8 meses</p>
      </div>

      <div className="bg-[#D9D9D9] p-6 rounded-xl border-4 border-[#84D904] italic hover:scale-105 transition">
        <p className="text-[#261008] mb-4">
          "Nunca gostei de academia até conhecer esse lugar. Hoje treino com constância e motivação."
        </p>
        <h4 className="font-semibold text-[#261008]">Lucas Pereira</h4>
        <p className="text-sm text-[#261008]">Aluno há 6 meses</p>
      </div>

    </div>

  </div>
</section>
    </div>
  )
}
