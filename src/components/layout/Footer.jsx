import React from 'react'
import spaceXIcon from '../../assets/Icons/spaceXIcon.webp';
import githubIcon from '../../assets/Icons/githubIcon.webp';
import linkedinIcon from '../../assets/Icons/linkedinIcon.webp';
import spaceDevsIcon from '../../assets/Icons/spaceDevsIcon.svg'

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 font-['Oxanium']">
      <div className="w-full mx-auto 
                      p-2 sm:p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-6
                      px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16
                      flex flex-col gap-4 sm:gap-5 md:gap-6
                      md:flex-row md:items-center md:justify-between 
                      border border-t-gray-500 rounded-t-2xl">

        {/* Copyright Section */}
        <span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-md 2xl:text-md
                         text-gray-500 text-center md:text-left dark:text-gray-400
                         order-2 md:order-1">
          © 2025 <a href="https://flowbite.com/" className="hover:underline">Space-X INFO™</a>. Proyecto React + Tailwind.
        </span>

        {/* Links Section */}
        <ul className="flex flex-col gap-3 sm:gap-4 md:gap-0 md:flex-row md:flex-wrap md:items-center 
                       text-xs sm:text-xs md:text-sm lg:text-sm xl:text-md 2xl:text-md
                       font-medium text-gray-500 dark:text-gray-400 
                       order-1 md:order-2">

          {/* SpaceX Link */}
          <li className="flex justify-center md:justify-start items-center md:me-4 lg:me-6 xl:me-8 2xl:me-10">
            <img src={spaceDevsIcon}
              alt="TheSpaceevs Logo"
              className="h-7 me-2" />
            <a href="https://thespacedevs.com/"
              target="_blank"
              className="font-bold hover:underline hover:scale-105 transition-transform">
              TheSpaceDevs
            </a>
          </li>
          <li className="flex justify-center md:justify-start items-center 
                         md:me-4 lg:me-6 xl:me-8 2xl:me-10">
            <img src={spaceXIcon}
              alt="SpaceX Logo"
              className="h-10 me-2" />
            <a href="https://www.spacex.com/"
              target="_blank"
              className="font-bold hover:underline hover:scale-105 transition-transform">
              SpaceX Web Oficial
            </a>
          </li>

          {/* GitHub Link */}
          <li className="flex justify-center md:justify-start items-center 
                         md:me-4 lg:me-6 xl:me-8 2xl:me-10">
            <img src={githubIcon}
              alt="Github Logo"
              className="h-7 me-2"
            />
            <a href="https://github.com/Kvr0th3c4t"
              target="_blank"
              className="font-bold hover:underline hover:scale-105 transition-transform">
              Github
            </a>
          </li>

          {/* LinkedIn Link */}
          <li className="flex justify-center md:justify-start items-center">
            <img src={linkedinIcon}
              alt="LinkedIn Logo"
              className="h-7 me-2" />
            <a href="https://www.linkedin.com/in/adri%C3%A1n-carmonamad/"
              target="_blank"
              className="font-bold hover:underline hover:scale-105 transition-transform">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}