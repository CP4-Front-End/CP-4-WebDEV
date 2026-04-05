import Header from '../components/Header'
import { Link } from 'react-router-dom'

const planos = [
  {
    nome: 'Mensal',
    preco: 'R$119,00',
    periodo: '/mes',
    descricao: 'O plano perfeito para quem quer testar nossa experiencia por um mes',
    caracteristicas: [
      'Acesso a +100 unidades',
      'Avaliacoes fisicas',
      'Personais a disposicao',
      '7 dias por semana',
      'Acesso as areas de musculacao'
    ],
    Destaque: false,
    cor: 'orange-500'
  },
  {
    nome: 'Anual',
    preco: 'R$99,00',
    periodo: '/mes',
    descricao: 'Plano perfeito para quem tem certeza da sua escolha e quer economia',
    caracteristicas: [
      'Acesso 24h',
      'Acesso a +100 unidades',
      '7 dias por semana',
      'Avaliacoes fisicas',
      'Aulas de zumba e luta',
      'Personais exclusivos',
      'Desconto de 17%'
    ],
    Destaque: true,
    cor: 'orange-600'
  }
]

export default function Planos() {
  return (
    <>
    <Header/>
    <section className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 border border-orange-500/30">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-orange-400">Planos flexiveis para seu objetivo</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Escolha seu <span className="text-orange-500">plano</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Planos pensado para todas as necessidades. Comece hoje mesmo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {planos.map((plano, index) => (
            <div 
              key={index}
              className={`relative bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                plano.Destaque ? 'border-orange-500' : 'border-gray-800 hover:border-orange-500'
              }`}
            >
              {plano.Destaque && (
                <div className="absolute top-0 right-0 bg-orange-500 text-black font-bold px-4 py-1 rounded-bl-2xl text-sm">
                  Mais popular
                </div>
              )}

              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plano.Destaque ? 'text-orange-500' : 'text-orange-400'}`}>
                  {plano.nome}
                </h3>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-white">{plano.preco}</span>
                  <span className="text-gray-500">{plano.periodo}</span>
                </div>

                <p className="text-gray-400 mb-6">
                  {plano.descricao}
                </p>

                <ul className="space-y-3 mb-8">
                  {planos[index].caracteristicas.map((caract, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plano.Destaque ? 'bg-orange-500' : 'bg-orange-500/80'}`}>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{caract}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    plano.Destaque 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-black hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105' 
                      : 'bg-orange-500 text-black hover:bg-orange-400 hover:shadow-xl hover:scale-105'
                  }`}
                >
                  Escolher plano
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Precisa de algo diferente?</p>
          <Link 
            to="/contato"
            className="inline-flex items-center gap-2 text-orange-500 font-bold hover:underline"
          >
            Fale conosco
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}