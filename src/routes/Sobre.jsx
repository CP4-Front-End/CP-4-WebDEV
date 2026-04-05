import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <Header />
      <div className="relative isolate bg-black py-24 sm:py-32 flex flex-col items-center">
        <h1 className="font-bold text-4xl text-center lg:text-5xl text-white mb-4">
          Sobre a <span className="text-orange-500">Academia Inteligente</span>
        </h1>
        <p className="font-bold text-2xl text-center lg:text-3xl py-5 text-gray-400">
          Transformando vidas através de treinos inteligentes
        </p>
        <section className="text-center py-8 px-6 bg-gray-900 rounded-2xl lg:w-5xl mx-6 border border-gray-800 hover:border-orange-500 transition">
          <h4 className="text-2xl font-bold mb-6 text-orange-500">Quem somos</h4>
          <p className="text-gray-300 text-lg font-medium">
            Na Academia Inteligente, acreditamos que treinar vai muito alem de
            levantar pesos, e sobre evoluir com estrategia, consciencia e
            proposito.
          </p>
          <p className="text-gray-300 text-lg font-medium mt-4">
            Nosso objetivo e oferecer um ambiente moderno, acolhedor e
            eficiente, onde cada aluno encontra suporte para alcançar seus
            resultados de forma segura e consistente. Aqui, unimos tecnologia,
            metodologia e acompanhamento profissional para transformar seu
            treino em algo realmente inteligente.
          </p>
          <p className="text-gray-300 text-lg font-medium mt-4">
            Contamos com equipamentos de alta qualidade, profissionais
            qualificados e uma estrutura pensada para atender desde iniciantes
            ate atletas mais avancados. Cada detalhe foi planejado para
            proporcionar a melhor experiencia possivel, respeitando o seu ritmo
            e incentivando sua evolucao continua.
          </p>
          <p className="text-gray-300 text-lg font-medium mt-4">
            Mais do que uma academia, somos um espaco de transformacao.
            Acreditamos que disciplina, orientacao correta e constancia sao os
            pilares para uma vida mais saudavel.
          </p>
          <p className="text-orange-500 text-lg font-bold mt-6 pb-5">
            Academia Inteligente: treine com proposito, evolua com inteligencia.
          </p>
        </section>
        <h2 className="font-bold text-2xl text-center lg:text-3xl mt-12 mb-8 text-white">
          Nossos diferenciais
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-3 text-orange-500">
              Treino Inteligente
            </h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Planejamento personalizado</li>
              <li>Foco em resultado real</li>
              <li>Evolucao acompanhada</li>
              <li>Adaptacao ao seu nivel</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-3 text-orange-500">
              Equipamentos Modernos
            </h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Maquinas de ultima geracao</li>
              <li>Area completa de treino</li>
              <li>Espaco funcional</li>
              <li>Manutencao constante</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-3 text-orange-500">
              Profissionais Qualificados
            </h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Instrutores certificados</li>
              <li>Acompanhamento proximo</li>
              <li>Suporte durante o treino</li>
              <li>Orientacao segura</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-orange-500 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-3 text-orange-500">
              Flexibilidade de Horarios
            </h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Aberto todos os dias</li>
              <li>Horarios amplos</li>
              <li>Treine no seu tempo</li>
              <li>Sem burocracia</li>
            </ul>
          </div>
        </div>
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-8 text-center rounded-2xl my-24 border border-gray-700 max-w-4xl mx-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Pronto para comecar sua evolucao?
            </h2>

            <p className="text-gray-400 mb-8 text-base lg:text-lg">
              De o primeiro passo hoje e transforme sua rotina com treinos
              inteligentes.
            </p>

            <Link to="/planos" className="inline-block bg-orange-500 text-black font-bold px-8 py-3 rounded-xl hover:bg-orange-600 hover:scale-105 transition shadow-lg shadow-orange-500/20">
              Ver Planos
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sobre;