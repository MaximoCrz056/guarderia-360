import React from 'react';
import Button from "../components/button";

function ListItem({ date, title, description }) {
  return (
    <li className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 ms-4 relative border border-green-800 dark:border-gray-700 rounded-lg p-4">
      <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
    </li>
  );
}

export default function NuestroP() {
  return (
    <main className='bg-gray-100'>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src='/img/LOGOFINAL.png' className="h-16" alt="Guarderia 360s Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Guarderia Joseph Lancaster</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/servicios" className="block py-2 px-3 text-green-700 hover:text-green-800 border-b-2 border-transparent hover:border-green-800" aria-current="page">
                Servicios
              </a>
            </li>
            <li>
              <a href="/nuestrop" className="block py-2 px-3 text-green-700 hover:text-green-800 border-b-2 border-transparent hover:border-green-800" aria-current="page">
                Nuestro programa
              </a>
            </li>
            <li>
              <a href="/preRe" className="block py-2 px-3 text-green-700 hover:text-green-800 border-b-2 border-transparent hover:border-green-800" aria-current="page">
                Pre-registro
              </a>
            </li>
            <li>
              <Button><a href="/iniciarSesion">Iniciar sesión</a></Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>


      <h2 className="text-2xl font-bold my-8 ml-20 text-green-800">Nuestro Programa</h2>
      <ol className="relative ml-48 w-9/12">
        <ListItem
          date="8:00 - 8:45"
          title="Filtro"
          description="Colocar descripcion"
        />
        <ListItem
          date="8:40 - 9:00"
          title="Saludo"
          description="Colocar descripcion"
        />
        <ListItem
          date="9:00 - 9:45"
          title="Juegos"
          description="Colocar descripcion"
        />
        <ListItem
          date="9:45 - 10:00"
          title="Momento higiene"
          description="Colocar descripcion"
        />
        <ListItem
          date="10:00 - 10:40"
          title="Desayuno"
          description="Colocar descripcion"
        />
        <ListItem
          date="10:40 - 11:00"
          title="Lavado de dientes"
          description="Colocar descripcion"
        />
        <ListItem
          date="11:00 - 11:30"
          title="Juegos"
          description="Colocar descripcion"
        />
        <ListItem
          date="11:30 - 11:40"
          title="Colacion"
          description="Colocar descripcion"
        />
        <ListItem
          date="11:40 - 12:50"
          title="Juegos"
          description="Colocar descripcion"
        />
        <ListItem
          date="12:50 - 13:00"
          title="Higiene"
          description="Colocar descripcion"
        />
        <ListItem
          date="13:00 - 13:40"
          title="Comida"
          description="Colocar descripcion"
        />
        <ListItem
          date="13:40 - 14:00"
          title="Lavado de dientes"
          description="Colocar descripcion"
        />
        <ListItem
          date="14:00 - 14:45"
          title="Higiene"
          description="Colocar descripcion"
        />
        <ListItem
          date="14:45 - 15:00"
          title="Despedida"
          description="Colocar descripcion"
        />
        <ListItem
          date="15:00 - 16:00"
          title="Descanso"
          description="Colocar descripcion"
        />
      </ol>
    </main>
  );
}
