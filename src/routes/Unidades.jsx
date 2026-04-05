import React from 'react'
import Header from '../components/Header'
export default function Unidades() {
  return (
    <>
    <Header/>
    
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
    <h1 className="text-3xl font-bold pt-10 mb-10 text-center text-white">Qual unidade esta mais proxima de voce!</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        
        <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition duration-300 p-6 border border-gray-800 hover:border-orange-500 hover:scale-105 duration-300">
          <h2 className="text-xl font-bold text-orange-500 mb-2">Augusta</h2>
          <p className="text-gray-400">
            Rua Augusta, 1585 - Consolacao
          </p>
          <p className="text-gray-400">
            Sao Paulo, SP - 01305-100
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.309710042708!2d-46.6591186!3d-23.5573177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519788ac6805489%3A0xf1b38715667d49be!2sAcademia%20Smart%20Fit%20-%20Augusta!5e0!3m2!1spt-BR!2sbr!4v1775240311678!5m2!1spt-BR!2sbr"
            className="w-full h-[300px] border-0 rounded-xl mt-4"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />      
        </div>

        
        <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition duration-300 p-6 border border-gray-800 hover:border-orange-500 hover:scale-105 duration-300">
          <h2 className="text-xl font-bold text-orange-500 mb-2">Rua da Consolacao II</h2>
          <p className="text-gray-400">
            Rua da Consolacao, 3080 - Cerqueira Cesar
          </p>
          <p className="text-gray-400">
            Sao Paulo - SP
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2491890128763!2d-46.667308!3d-23.559492199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59373d7a85e1%3A0x8ae921c0060879bd!2sAcademia%20Smart%20Fit%20-%20Rua%20da%20Consola%C3%A7%C3%A3o%20II!5e0!3m2!1spt-BR!2sbr!4v1775240563743!5m2!1spt-BR!2sbr"
            className="w-full h-[300px] border-0 rounded-xl mt-4"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        
        <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition duration-300 p-6 border border-gray-800 hover:border-orange-500 hover:scale-105 duration-300">
          <h2 className="text-xl font-bold text-orange-500 mb-2">Paulista</h2>
          <p className="text-gray-400">
            Avenida Paulista, 664 - Bela Vista
          </p>
          <p className="text-gray-400">
            Sao Paulo - SP
          </p>

          <div className="w-full aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0439878398493!2d-46.6492442!3d-23.566863599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b8db8ef699%3A0x1c7694e9609dbc60!2sAv.%20Paulista%2C%20664%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1spt-BR!2sbr!4v1775240788531!5m2!1spt-BR!2sbr"
              className="w-full h-[300px] border-0 rounded-xl mt-4"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </div>
    </>
  );
}