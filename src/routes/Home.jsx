import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Banner />
      <section className="bg-black py-16 px-6">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl font-bold text-white mb-10">
      Nossos Resultados
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
        <h3 className="text-3xl font-bold text-orange-500">+1000</h3>
        <p className="text-gray-400 mt-2">Alunos ativos</p>
      </div>

      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
        <h3 className="text-3xl font-bold text-orange-500">+5 anos</h3>
        <p className="text-gray-400 mt-2">de experiência</p>
      </div>

      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
        <h3 className="text-3xl font-bold text-orange-500">+300</h3>
        <p className="text-gray-400 mt-2">transformações</p>
      </div>

      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
        <h3 className="text-3xl font-bold text-orange-500">100%</h3>
        <p className="text-gray-400 mt-2">foco em resultados</p>
      </div>

    </div>

  </div>
</section>
<section className="bg-gray-900 py-16 px-6 border-t border-gray-800">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl font-bold text-white mb-10">
      O que nossos alunos dizem
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-black p-6 rounded-xl border-2 border-orange-500/50 hover:border-orange-500 hover:scale-105 transition">
        <p className="text-gray-300 mb-4 italic">
          "Desde que comecei a treinar aqui, minha rotina mudou completamente. 
          O acompanhamento faz toda diferença."
        </p>
        <h4 className="font-semibold text-orange-500">Carlos Silva</h4>
        <p className="text-sm text-gray-500">Aluno há 1 ano</p>
      </div>

      <div className="bg-black p-6 rounded-xl border-2 border-orange-500/50 hover:border-orange-500 hover:scale-105 transition">
        <p className="text-gray-300 mb-4 italic">
          "Ambiente organizado, profissionais atentos e treinos que realmente dão resultado no longo prazo."
        </p>
        <h4 className="font-semibold text-orange-500">Mariana Souza</h4>
        <p className="text-sm text-gray-500">Aluna há 8 meses</p>
      </div>

      <div className="bg-black p-6 rounded-xl border-2 border-orange-500/50 hover:border-orange-500 hover:scale-105 transition">
        <p className="text-gray-300 mb-4 italic">
          "Nunca gostei de academia até conhecer esse lugar. Hoje treino com constância e motivação."
        </p>
        <h4 className="font-semibold text-orange-500">Lucas Pereira</h4>
        <p className="text-sm text-gray-500">Aluno há 6 meses</p>
      </div>

    </div>

  </div>
</section>
    </div>
  )
}