import React from 'react';
import Button from "./components/button";

export default function Home() {
  return (
    <main className="bg-white">
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

    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="overflow-hidden rounded-t-lg">
          <img className="w-full h-full object-cover" src="/img/banner.jpg" alt="Banner" />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Bienvenidos a la web de Guarderia 360
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Echa un vistazo a la web de Guarderia 360 y descubre las opciones que tenemos para el cuidado de tu hijo.
          </p>
          <a
            href="/servicios"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Descubre mas...
          </a>
        </div>
      </div>

      <div className="my-40">
        <p className="text-gray-800 dark:text-gray-400">
          Como institución, tenemos un sistema de gestión de la educación que se basa en la gestión de los servicios de educación. 
          Para ello, tenemos que tener un sistema de gestión de la educación que permita a los profesores y a los estudiantes gestionar los servicios de educación.
        </p>
        <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-green-700 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
            "En Guardería 360, cada niño es una estrella que brilla con luz propia, y estamos aquí para nutrir su brillo con amor y cuidado."
          </p>
        </blockquote>
        <p className="text-gray-800 dark:text-gray-400">
          First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.
        </p>
      </div>
      <section className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-800">Testimonios</h2>
        <blockquote className="text-gray-500 dark:text-gray-400 italic text-sm mt-5">
          "Estamos encantados con la guardería Joseph Lancaster. El personal es amable y atento, y nuestro hijo se divierte mucho aquí."
        </blockquote>
        <p className="italic text-l text-gray-800">-Juan Pérez</p>

        <blockquote className="text-gray-500 dark:text-gray-400 italic text-sm mt-5">
        "Nuestra hija ha estado asistiendo a esta guardería durante más de un año y ha tenido una experiencia maravillosa. Recomendamos encarecidamente este lugar."
        </blockquote>
        <p className="italic text-l text-gray-800">-Maria Gómez</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-40">
        <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/danza.jpg'></img>
        <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/arte.jpeg'></img>
        <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/alimentacion.jpg'></img>
        <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/juegos.jpg'></img>
        <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/musica.jpg'></img>
        <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/dormitorios.jpg'></img>
        <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/interaccion.jpg'></img>
        <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/higiene.jpg'></img>
      </div>
    </div>

    
      
    </main>
  );
}