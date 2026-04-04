import { Link } from "react-router-dom";
import Header from '../components/Header'
import React from "react";

export default function Bio() {
  return (
    <>
    <Header/>
    <main className="bg-[#D9D9D9] text-[#261008] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">

          <h1 className="text-4xl sm:text-5xl font-bold text-[#03A63C] leading-tight">
            Entenda seu corpo além do peso
          </h1>

          <p className="mt-6 text-lg leading-8">
            A bioimpedância é uma avaliação que mostra dados importantes da sua
            composição corporal, ajudando a criar estratégias mais assertivas
            para emagrecimento, ganho de massa muscular e melhora do
            desempenho.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-[#F2E205] px-6 py-3 rounded-xl font-semibold hover:bg-[#03A63C] hover:text-white transition hover:opacity-90 hover:scale-105"
            >
              Agendar avaliação
            </Link>

            <Link
              to="/planos"
              className="border border-[#03A63C] text-[#03A63C] px-6 py-3 rounded-xl font-semibold hover:bg-[#03A63C] hover:text-white transition hover:scale-105"
            >
              Ver planos
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          O que a avaliação mostra
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#03A63C] hover:scale-105 transition">
            <h3 className="text-[#03A63C] font-bold text-xl mb-3">
              Gordura corporal
            </h3>
            <p className="leading-7">
              Descubra seu percentual de gordura e acompanhe sua evolução com
              mais clareza.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#03A63C] hover:scale-105 transition">
            <h3 className="text-[#03A63C] font-bold text-xl mb-3">
              Massa muscular
            </h3>
            <p className="leading-7">
              Entenda como está sua massa magra e acompanhe seu desenvolvimento
              físico.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#03A63C] hover:scale-105 transition">
            <h3 className="text-[#03A63C] font-bold text-xl mb-3">
              Água corporal
            </h3>
            <p className="leading-7">
              Veja como a hidratação do seu corpo pode impactar seu rendimento e
              saúde.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#03A63C] hover:scale-105 transition">
            <h3 className="text-[#03A63C] font-bold text-xl mb-3">
              Metabolismo basal
            </h3>
            <p className="leading-7">
              Saiba quantas calorias seu corpo gasta em repouso e entenda melhor
              suas necessidades.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#D9D9D9] py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-[#D9D9D9] rounded-2xl p-8 border-4 border-[#84D904] hover:scale-105 transition">
            <h2 className="text-3xl font-bold mb-6 text-[#03A63C]">
              Como funciona
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#84D904] text-white flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <p className="leading-7">
                  Agende sua avaliação com nossa equipe especializada.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#84D904] text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <p className="leading-7">
                  Realize o exame de bioimpedância em poucos minutos.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#84D904] text-white flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <p className="leading-7">
                  Receba a leitura dos dados corporais com orientação.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#84D904] text-white flex items-center justify-center font-bold shrink-0">
                  4
                </div>
                <p className="leading-7">
                  Monte um plano mais eficiente com base nos seus resultados.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#D9D9D9] rounded-2xl p-8 border-4 border-[#84D904] hover:scale-105 transition">
            <h2 className="text-3xl font-bold mb-6 text-[#03A63C]">
              Como se preparar
            </h2>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-[#03A63C] font-bold">✓</span>
                <p className="leading-7">
                  Evite refeições pesadas antes da avaliação.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-[#03A63C] font-bold">✓</span>
                <p className="leading-7">
                  Mantenha-se hidratado(a) ao longo do dia.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-[#03A63C] font-bold">✓</span>
                <p className="leading-7">
                  Não faça treino intenso imediatamente antes do exame.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-[#03A63C] font-bold">✓</span>
                <p className="leading-7">
                  Use roupas leves para facilitar a avaliação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#03A63C]">
          Resultados melhores começam com dados reais
        </h2>

        <p className="mt-6 text-lg leading-8">
          Com a bioimpedância, você acompanha sua evolução de forma muito mais
          inteligente do que olhando apenas para o peso na balança.
        </p>

        <Link
          to="/testeBio"
          className="inline-block mt-8 bg-[#03A63C] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#F2E205] hover:text-[#261008] transition hover:scale-105"
        >
          Quero fazer (Uso informativo)
        </Link>
      </section>
    </main>
    </>
  );
}