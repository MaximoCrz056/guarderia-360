import React from 'react';

export default function IniciarSesion() {
    return (
      <div className="flex justify-center items-center h-screen sm:text-sm md:text-base lg:text-lg">
        <div className="w-full max-w-md">
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src='/img/LOGOFINAL.png' className="h-16" alt="Guarderia 360s Logo" />
                <span className=" self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Guarderia Joseph Lancaster</span>
              </a>
              <a href="/preRe" className="block py-2 px-3 text-green-700 hover:text-green-800 border-b-2 border-transparent hover:border-green-800" aria-current="page">
                      Pre-registro
              </a>
            </div>
          </nav>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Usuario
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ingresa Usuario" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              <p className="text-red-500 text-xs italic">Porfavor ingrese su contraseña.</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                <a href="/perfil">Entrar</a>
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
                Olvido su contraseña?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
