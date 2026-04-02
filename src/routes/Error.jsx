import React from 'react'

const Error = () => {
    return (
        <main className="grid min-h-full place-items-center bg-[#D9D9D9] px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="font-semibold text-[#03A63C] text-4xl">ERROR 404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-[#84D904] sm:text-7xl">Página não encontrada</h1>
                <p className="mt-6 text-lg font-medium text-pretty text-[#261008] sm:text-xl/6">Desculpa, não conseguimos localizar a página que você estava procurando.</p>
            </div>
        </main>
    )
}

export default Error