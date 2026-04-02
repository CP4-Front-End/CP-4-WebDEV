import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    notificacoes: []
  });

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
    alert("Dados salvos!");
  }

  function handleCancel() {
    setForm({
      nome: "",
      sobrenome: "",
      email: "",
      notificacoes: []
    });
  }

  return (
    <div className="min-h-screen bg-[#03A63C] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-[#D9D9D9] rounded-2xl p-6 shadow-lg lg:max-w-2xl lg:p-10">
        <h1 className="text-xl font-bold text-center mb-6 text-[#261008] lg:text-2xl">
          Entre em contato conosco!
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6">
          <h3 className="font-bold text-[#261008]">Insira seu nome:</h3>
          <input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} className="p-3 rounded-lg bg-white outline-none border border-gray-300 col-span-2"/>
            <h3 className="font-bold text-[#261008]">Insira seu sobrenome:</h3>
          <input type="text" name="sobrenome" placeholder="Sobrenome" value={form.sobrenome} onChange={handleChange} className="p-3 rounded-lg bg-white outline-none border border-gray-300 col-span-2"/>
            <h3 className="font-bold text-[#261008]">Insira seu email:</h3>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-3 rounded-lg bg-white outline-none border border-gray-300 col-span-2"/>

          <div className="col-span-2">
            <p className="font-semibold mb-2 text-[#261008]">
              Selecione as notificações que gostaria de receber:
            </p>

            <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
              
              <label className="flex items-center gap-2">
                <input type="checkbox" value="email" onChange={handleCheckbox}/>
                Email
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" value="sms" onChange={handleCheckbox}/>
                SMS
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" value="promocoes" onChange={handleCheckbox}/>
                Promoções
              </label>

            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-3 lg:flex-row lg:justify-center">

            <button type="button" onClick={handleCancel} className="p-3 rounded bg-gray-400 text-white font-semibold hover:bg-gray-500 transition">
              Cancelar
            </button>

            <button type="submit" className=" p-3 rounded bg-[#F2E205] text-white font-semibold hover:bg-[#028a30] transition">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}