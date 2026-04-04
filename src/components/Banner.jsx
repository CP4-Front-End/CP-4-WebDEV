export default function Banner() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-26">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-balance text-[#03A63C] sm:text-7xl">
            Seja bem vindo(a) a página da Academia Inteligente
          </h1>
          
          <p className="mt-8 text-lg font-medium text-pretty text-[#261008] sm:text-xl/8">
            O IMC (Índice de Massa Corporal) é uma medida internacional, adotada pela Organização Mundial da Saúde (OMS), utilizada para avaliar se uma pessoa está em seu peso ideal, com sobrepeso ou abaixo do peso, baseando-se na relação entre peso e altura.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/imc"
              className="rounded-md bg-[#F2E205] px-3.5 py-2.5 text-sm font-semibold text-[#261008] shadow-xs transition: duration-300 hover:bg-[#03A63C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 hover:text-white hover:scale-110"
            >
              Calcular IMC
            </a>
            <a target='blank' href="/planos" className="text-sm/6 font-semibold text-[#261008] hover:text-[#03A63C] transition duration-300 cursor-pointer hover:scale-110">
              Ver planos <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >

      </div>
    </div>
  )
}
