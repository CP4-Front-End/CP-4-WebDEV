import { Link } from "react-router-dom";
import Header from '../components/Header'
import React from "react";

export default function Bio() {
  return (
    <>
    <Header/>
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">

          <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 leading-tight">
            Entenda seu corpo alem do peso
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A bioimpedancia e uma avaliacao que mostra dados importantes da sua
            composicao corporal, ajudando a criar estrategias mais assertivas
            para emagrecimento, ganho de massa muscular e melhora do
            desempenho.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/testeBio"
              className="bg-orange-500 px-6 py-3 rounded-xl font-semibold text-black hover:bg-orange-600 transition hover:scale-105"
            >
              Fazer teste 3 dobras
            </Link>

            <Link
              to="/planos"
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-black transition hover:scale-105"
            >
              Ver planos
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Por que a avaliação é importante?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
            <h3 className="text-orange-500 font-bold text-xl mb-3">
              Gordura corporal
            </h3>
            <p className="leading-7 text-gray-400">
              Descubra seu percentual de gordura e acompanhe sua evolucao com
              mais clareza.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
            <h3 className="text-orange-500 font-bold text-xl mb-3">
              Massa muscular
            </h3>
            <p className="leading-7 text-gray-400">
              Entenda como esta sua massa magra e acompanhe seu desenvolvimento
              fisico.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
            <h3 className="text-orange-500 font-bold text-xl mb-3">
              Agua corporal
            </h3>
            <p className="leading-7 text-gray-400">
              Veja como a hidratacao do seu corpo pode impactar seu rendimento e
              saude.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
            <h3 className="text-orange-500 font-bold text-xl mb-3">
              Metabolismo basal
            </h3>
            <p className="leading-7 text-gray-400">
              Saiba quantas calorias seu corpo gasta em repouso e entenda melhor
              suas necessidades.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-black rounded-2xl p-8 border-2 border-orange-500/50 hover:border-orange-500 hover:scale-105 transition">
            <h2 className="text-3xl font-bold mb-6 text-orange-500">
              Como funciona
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <p className="leading-7 text-gray-300">
                  Agende sua avaliacao com nossa equipe especializada.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <p className="leading-7 text-gray-300">
                  Realize o exame de bioimpedancia em poucos minutos.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <p className="leading-7 text-gray-300">
                  Receba a leitura dos dados corporais com orientacao.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold shrink-0">
                  4
                </div>
                <p className="leading-7 text-gray-300">
                  Monte um plano mais eficiente com base nos seus resultados.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-2xl p-8 border-2 border-orange-500/50 hover:border-orange-500 hover:scale-105 transition">
            <h2 className="text-3xl font-bold mb-6 text-orange-500">
              Como se preparar
            </h2>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <p className="leading-7 text-gray-300">
                  Evite refeicoes pesadas antes da avaliacao.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <p className="leading-7 text-gray-300">
                  Mantenha-se hidratado(a) ao longo do dia.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <p className="leading-7 text-gray-300">
                  Nao faca treino intenso imediatamente antes do exame.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <p className="leading-7 text-gray-300">
                  Use roupas leves para facilitar a avaliacao.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-500">
          Resultados melhores comecam com dados reais
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          Com a bioimpedancia, voce acompanha sua evolucao de forma muito mais
          inteligente do que olhando apenas para o peso na balanca.
        </p>

        <Link
          to="/testeBio"
          className="inline-block mt-8 bg-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:scale-105 transition"
        >
          Fazer teste das 3 dobras
        </Link>
      </section>
    </main>
    </>
  );
}