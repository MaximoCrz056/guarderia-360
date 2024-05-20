export default function Footer() {
    return (
<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" target="_blank">
                <img src="/img/LOGOFINAL.png" alt=""  class="h-12" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Guarderia 360</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-green-800 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Sobre nosotros</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Politicas de privacidad</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licencias</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contacto</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">BitCoders™</a>. Todos los derechos reservados.</span>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Arandas 347, Benito Juárez, 57000 Cdad. Nezahualcóyotl, Méx. . Teléfono 55 8068 5892.</span>

    </div>
</footer>
    )
}    