import { useState } from "react";
import Header from '../components/Header'

export default function Contact() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    mensagem: "",
    notificacoes: []
  });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCheckbox(e) {
    const { value, checked } = e.target;
    if (checked) {
      setForm({
        ...form,
        notificacoes: [...form.notificacoes, value]
      });
    } else {
      setForm({
        ...form,
        notificacoes: form.notificacoes.filter((n) => n !== value)
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
    setForm({
      nome: "",
      sobrenome: "",
      email: "",
      mensagem: "",
      notificacoes: []
    });
  }

  return (
    <>
    <Header/>
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-lg">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Fale <span className="text-orange-500">conosco</span>
          </h1>
          <p className="text-gray-400">Estamos prontos para atender voce</p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-800">
          
          {enviado && (
            <div className="mb-6 p-4 bg-orange-500 text-black rounded-2xl text-center font-bold animate-pulse">
              Mensagem enviada com sucesso!
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
                  Nome
                </label>
                <input 
                  type="text" 
                  name="nome" 
                  placeholder="Seu nome" 
                  value={form.nome} 
                  onChange={handleChange} 
                  className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
                  required
                />
              </div>
              <div className="relative">
                <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
                  Sobrenome
                </label>
                <input 
                  type="text" 
                  name="sobrenome" 
                  placeholder="Seu sobrenome" 
                  value={form.sobrenome} 
                  onChange={handleChange} 
                  className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
                Email
              </label>
              <input 
                type="email" 
                name="email" 
                placeholder="seu@email.com" 
                value={form.email} 
                onChange={handleChange} 
                className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
                required
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-4 bg-gray-900 px-2 text-sm font-bold text-orange-500">
                Mensagem
              </label>
              <textarea 
                name="mensagem" 
                placeholder="Como podemos ajudar?" 
                value={form.mensagem} 
                onChange={handleChange} 
                rows={4}
                className="w-full border-2 border-gray-700 rounded-2xl px-5 py-4 text-lg font-medium bg-gray-800 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none resize-none"
              />
            </div>

            <div className="bg-orange-500/10 rounded-2xl p-4 border-l-4 border-orange-500">
              <p className="font-bold text-white mb-3">
                Receber notificacoes:
              </p>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" value="email" onChange={handleCheckbox} className="w-5 h-5 accent-orange-500"/>
                  <span className="text-gray-300">Email</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" value="sms" onChange={handleCheckbox} className="w-5 h-5 accent-orange-500"/>
                  <span className="text-gray-300">SMS</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" value="promocoes" onChange={handleCheckbox} className="w-5 h-5 accent-orange-500"/>
                  <span className="text-gray-300">Promocoes</span>
                </label>
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              <button 
                type="button" 
                onClick={() => setForm({ nome: "", sobrenome: "", email: "", mensagem: "", notificacoes: [] })} 
                className="flex-1 py-4 rounded-2xl bg-gray-800 text-white font-bold hover:bg-gray-700 transition border border-gray-700"
              >
                Limpar
              </button>
              <button 
                type="submit" 
                className="flex-1 py-4 rounded-2xl bg-orange-500 text-black font-bold hover:scale-105 transition shadow-lg shadow-orange-500/20"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-900/60 rounded-2xl p-4 shadow-md border border-gray-800">
            <div className="w-10 h-10 mx-auto bg-orange-500 rounded-full flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm font-bold text-white">GymSmart@gm.com</p>
          </div>
          <div className="bg-gray-900/60 rounded-2xl p-4 shadow-md border border-gray-800">
            <div className="w-10 h-10 mx-auto bg-orange-600 rounded-full flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-xs text-gray-500">Telefone</p>
            <p className="text-sm font-bold text-white">(11) 98929-6378</p>
          </div>
          <div className="bg-gray-900/60 rounded-2xl p-4 shadow-md border border-gray-800">
            <div className="w-10 h-10 mx-auto bg-orange-400 rounded-full flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-xs text-gray-500">Endereco</p>
            <p className="text-sm font-bold text-white">Rua Augusta, 132</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}