import React from 'react';
import Button from "../components/button";

export default function Servicios() {
  return (
    <main className=" bg-gray-100">
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
    <div className="flex flex-col justify-center max-w-30% bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="overflow-hidden rounded-t-lg">
          <img className="w-full h-60 object-cover" src="/img/banner2.jpg" alt="Banner" />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Servicios de Guarderia 360
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Descubre los servicios que ofrecemos en Guarderia 360 para el cuidado y desarrollo integral de tu hijo.
            <br />
            Ademas, descubre las opciones que tenemos para el cuidado de tu hijo.
            <br />
          </p>
        </div>
      </div>


      <div className="mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Danza</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-400 text-md">
            ¡Déjate llevar por el ritmo! Nuestras clases de danza ofrecen una experiencia única para niños de todas las edades. Desde movimientos básicos hasta coreografías elaboradas, promovemos la coordinación, la expresión artística y, sobre todo, ¡mucha diversión!            </p>
            <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/danza.jpg'></img>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Arte</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-400 text-md">
            ¡Deja volar tu creatividad! Nuestro programa de arte está diseñado para inspirar a los pequeños artistas a explorar su imaginación y expresarse a través de diferentes medios artísticos. Desde pintura hasta escultura, cada niño tiene la oportunidad de descubrir y desarrollar su talento único.            </p>
            <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/arte.jpeg'></img>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Alimentación</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-400 text-md">
            ¡Energía para crecer y aprender! En nuestra guardería, no solo nos preocupamos por el cuidado de los niños, sino también por su salud y bienestar. Nuestro servicio de alimentación proporciona comidas equilibradas y nutritivas, adaptadas a las necesidades de cada niño, para garantizar un crecimiento saludable y un desarrollo óptimo.            </p>
            <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/alimentacion.jpg'></img>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Juegos</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-400 text-md">
            ¡Diviértete mientras aprendes! Nuestras actividades de juego están diseñadas para estimular el desarrollo físico y cognitivo de los niños a través del juego interactivo y la exploración. Desde juegos al aire libre hasta actividades en grupo, cada momento de juego es una oportunidad para aprender y crecer.           </p>
            <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/juegos.jpg'></img>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Musica</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-400 text-md">
            ¡Descubre el poder de la melodía! Nuestras clases de música ofrecen una experiencia dinámica y participativa donde los niños pueden explorar diferentes instrumentos, ritmos y estilos musicales. Desde cantar y bailar hasta tocar instrumentos, cada sesión es una aventura musical que estimula la creatividad y la expresión.            </p>
            <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/musica.jpg'></img>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Dormitorios</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-400 text-md">
            ¡Descanso garantizado para los pequeños aventureros! Nuestro servicio de dormitorios ofrece un espacio tranquilo y seguro donde los niños pueden recargar energías y descansar cómodamente después de un día lleno de actividades. Con instalaciones diseñadas para promover el sueño reparador, los padres pueden estar seguros de que sus hijos están en buenas manos.            </p>
            <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/dormitorios.jpg'></img>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Interaccion</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-400 text-md">
            ¡Construyendo relaciones y habilidades para la vida! En nuestra guardería, fomentamos la interacción social y el desarrollo del habla a través de actividades grupales y juegos colaborativos. Desde compartir hasta comunicarse, cada momento de interacción es una oportunidad para aprender habilidades sociales clave que serán fundamentales en el futuro.            </p>
            <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/interaccion.jpg'></img>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Higiene</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-400 text-md">
            ¡Salud y bienestar en cada detalle! Nuestro compromiso con la higiene va más allá de lo básico. Con instalaciones limpias y desinfectadas regularmente, así como prácticas de higiene personal enseñadas y reforzadas diariamente, garantizamos un entorno seguro y saludable para todos los niños. ¡Tu tranquilidad es nuestra prioridad!            </p>
            <img className='h-auto max-w-full rounded-lg border-solid ' src='/img/higiene.jpg'></img>
          </div>
        </div>
      </div>
    </div>

      
    </main>
  );
}
