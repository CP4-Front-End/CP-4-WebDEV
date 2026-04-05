import { Link } from "react-router-dom"

export default function Banner() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-950/20 to-black"></div>
      
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Academia <span className="text-orange-500">Inteligente</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Calcule seu <span className="font-bold text-orange-500">IMC</span>, conheça sua 
          <span className="font-bold text-orange-500"> composição corporal</span> e alcance 
          seus objetivos com clareza
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/imc"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-black font-bold rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Calcular IMC
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          <Link 
            to="/testeBio"
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-2xl hover:bg-orange-500 hover:text-black transition-all duration-300 hover:scale-105"
          >
            Teste 3 Dobras
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:scale-105 transition border border-gray-800">
            <div className="w-12 h-12 mx-auto bg-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-bold text-white mt-2">Foco total</p>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:scale-105 transition border border-gray-800">
            <div className="w-12 h-12 mx-auto bg-orange-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-sm font-bold text-white mt-2">Resultados</p>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:scale-105 transition border border-gray-800">
            <div className="w-12 h-12 mx-auto bg-orange-400 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-sm font-bold text-white mt-2">Saude</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}