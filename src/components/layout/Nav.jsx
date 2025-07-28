import { useState } from 'react'
import { NavButton } from './UI/NavButton'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="block w-full mx-auto bg-neutral-950 opacity-95 top-0 left-0 right-0 
                    px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 xl:px-10 xl:py-4 2xl:px-12 2xl:py-4
                    z-[9999] border border-b-gray-500">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex font-medium items-center text-white 
                              text-md sm:text-md md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          <span className="font-['Azonix']">Space-X INFO</span>
        </a>

        {/* MENÚ DESKTOP */}
        <div className="hidden lg:block">
          <ul className="flex flex-col mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center 
                         lg:gap-4 xl:gap-6 2xl:gap-8">
            <li className="flex items-center p-1 text-sm text-slate-600 hover:scale-105 transition-transform relative">
              <NavButton
                text={"Próximo lanzamiento"}
                href={"/nextLaunch"}
                className={"px-3 lg:px-4 xl:px-5 2xl:px-6 text-xs lg:text-sm xl:text-sm 2xl:text-sm uppercase relative"}
              />
              <span className="absolute top-1 right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
            </li>
            <li className="flex items-center p-1 text-sm text-slate-600 hover:scale-105 transition-transform">
              <NavButton
                text={"Lanzamientos"}
                href={"/launches"}
                className={"px-3 lg:px-4 xl:px-5 2xl:px-6 text-xs lg:text-sm xl:text-sm 2xl:text-sm uppercase"}
              />
            </li>
            <li className="flex items-center p-1 text-sm text-slate-600 hover:scale-105 transition-transform">
              <NavButton
                text={"Aeronaves"}
                href={"/ships"}
                className={"px-3 lg:px-4 xl:px-5 2xl:px-6 text-xs lg:text-sm xl:text-sm 2xl:text-sm uppercase"}
              />
            </li>
            <li className="flex items-center p-1 text-sm text-slate-600 hover:scale-105 transition-transform">
              <NavButton
                text={"Lanzadores"}
                href={"/launchers"}
                className={"px-3 lg:px-4 xl:px-5 2xl:px-6 text-xs lg:text-sm xl:text-sm 2xl:text-sm uppercase"}
              />
            </li>
            <li className="flex items-center p-1 text-sm text-slate-600 hover:scale-105 transition-transform">
              <NavButton
                text={"Tripulación"}
                href={"/tripulation"}
                className={"px-3 lg:px-4 xl:px-5 2xl:px-6 text-xs lg:text-sm xl:text-sm 2xl:text-sm uppercase"}
              />
            </li>
          </ul>
        </div>

        <button
          className="relative ml-auto 
                     h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 
                     max-h-[32px] max-w-[32px] sm:max-h-[36px] sm:max-w-[36px] md:max-h-[40px] md:max-w-[40px]
                     select-none rounded-lg text-center align-middle 
                     text-xs font-medium uppercase text-white 
                     transition-all hover:bg-gray-800 focus:bg-transparent active:bg-transparent 
                     disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
          onClick={toggleMenu}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </span>
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col gap-1 sm:gap-2 md:gap-2 
                       mt-2 mb-2 sm:mt-3 sm:mb-3 md:mt-2 md:mb-4 
                       px-2 pb-2 sm:px-3 sm:pb-3 md:px-4 md:pb-4">
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600 relative">
            <NavButton
              text={"Próximo lanzamiento"}
              href={"/nextLaunch"}
              className={"px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-sm uppercase w-full relative"}
            />
            <span className="absolute top-1 right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <NavButton
              text={"Lanzamientos"}
              href={"/launches"}
              className={"px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-sm uppercase w-full"}
            />
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <NavButton
              text={"Aeronaves"}
              href={"/ships"}
              className={"px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-sm uppercase w-full"}
            />
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <NavButton
              text={"Lanzadores"}
              href={"/launchers"}
              className={"px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-sm uppercase w-full"}
            />
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <NavButton
              text={"Tripulación"}
              href={"/tripulation"}
              className={"px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-sm uppercase w-full"}
            />
          </li>
        </ul>
      </div>
    </nav>
  )
}