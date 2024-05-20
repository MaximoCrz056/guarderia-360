import React from "react";
import Button from "../components/button";
import TablaMantener from "../components/tablaMantener";

const productHeaders = ["Nombre", "Identificador", "Cargo", "Contratacion", "Correo", "Direccion", "Salario", "Horarios", "IMG", "Editar", "Eliminar"];
const productRows = [
  { name: "nombre1",
  id: "00000000",
  cargo: "director",
  date: "2022-01-01",
  email: "ejemplo@x.com",
  address: "direccion1",
  salary: "$1000",
  hours: "08:00 - 17:00",
  img: <img className="h-12 w-12" alt="foto" src=""></img>
  },

];

export default function MantenerPer() {
    return (
        <main>
          <NavbarPerfil />

          <TablaMantener headers={productHeaders} rows={productRows} />
        </main>
    );
} 


function NavbarPerfil() {
    return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/perfil" className="flex items-center space-x-3 rtl:space-x-reverse">
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
              <MenuItem href="/mantenerSer">Servicios</MenuItem>
              <MenuItem href="/mantenerInf">Infantes</MenuItem>
              <MenuItem href="/mantenerPer">Personal</MenuItem>
              <MenuItem href="/mantenerAvs">Avisos</MenuItem>
              <Button><a href="/">Salir</a></Button>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

function MenuItem({ href, children }) {
    return (
      <li>
        <a href={href} className="block py-2 px-3 text-green-700 hover:text-green-800 border-b-2 border-transparent hover:border-green-800" aria-current="page">
          {children}
        </a>
      </li>
    );
}