import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <main className="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="font-semibold text-orange-500 text-4xl">ERROR 404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Pagina nao encontrada</h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/6">
                    Desculpa, nao conseguimos localizar a pagina que voce estava procurando.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link 
                        to="/"
                        className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-orange-600 hover:scale-105 transition"
                    >
                        Voltar para home
                    </Link>
                    <Link to="/contato" className="text-sm font-semibold text-orange-500 hover:underline">
                        Fale conosco <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Error