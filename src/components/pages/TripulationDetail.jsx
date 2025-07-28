import React from 'react'
import { LoadingSpinner } from '../layout/UI/LoadingSpinner'
import { useFetchAstronautsDetail } from '../../hooks/TripulationHooks/useFetchAstronautsDetail'
import { Button } from '../layout/UI/Button';
import GradientText from '../layout/UI/GradientText';
import CountUp from '../layout/UI/CountUp';

export const TripulationDetail = () => {

  const { data, loading } = useFetchAstronautsDetail();

  return (
    <section className="bg-neutral-900 min-h-screen 
                       p-3 sm:p-4 md:p-5 lg:p-6 xl:p-5 2xl:p-5 
                       font-['Oxanium']">
      {loading && <LoadingSpinner />}
      {!loading && data && (
        <div className="max-w-7xl xl:max-w-8xl 2xl:max-w-8xl mx-auto">

          {/* Header principal - Diseño Minimalista */}
          <div className="rounded-xl sm:rounded-2xl 
                         p-4 sm:p-6 md:p-7 lg:p-8 xl:p-8 2xl:p-8 
                         mb-4 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-8 2xl:mb-8">
            <div className="flex flex-col lg:flex-row 
                           gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-12 2xl:gap-12">
              {/* Imagen del astronauta */}
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute rounded-xl sm:rounded-2xl blur opacity-25"></div>
                  <img
                    src={data.image.image_url}
                    alt={data.name}
                    className="relative 
                             w-64 sm:w-72 md:w-80 lg:w-96 xl:max-w-sm 2xl:max-w-sm
                             overflow-hidden object-cover rounded-xl sm:rounded-2xl 
                             mask-radial-[100%_100%] mask-radial-from-35% mask-radial-at-left"
                  />
                </div>
              </div>

              {/* Información principal */}
              <div className="flex-1 
                           space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-6 2xl:space-y-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl 
                               font-bold text-neutral-100 font-['Azonix'] 
                               mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6
                               text-center lg:text-left">
                    {data.name}
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                                 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
                    <div className="group text-center lg:text-left">
                      <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                     mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 
                                     group-hover:from-emerald-400 transition-colors"></div>
                      <p className="text-xs sm:text-xs md:text-sm lg:text-xs xl:text-xs 2xl:text-xs
                                   text-neutral-500 uppercase tracking-widest 
                                   mb-1 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1">Status</p>
                      <p className="text-sm sm:text-base md:text-lg lg:text-base xl:font-medium 2xl:font-medium
                                   text-neutral-100 font-medium">{data.status?.name}</p>
                    </div>
                    <div className="group text-center lg:text-left">
                      <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                     mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 
                                     group-hover:from-blue-400 transition-colors"></div>
                      <p className="text-xs sm:text-xs md:text-sm lg:text-xs xl:text-xs 2xl:text-xs
                                   text-neutral-500 uppercase tracking-widest 
                                   mb-1 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1">Nacionalidad</p>
                      <p className="text-sm sm:text-base md:text-lg lg:text-base xl:font-medium 2xl:font-medium
                                   text-neutral-100 font-medium">{data.nationality[0].nationality_name}</p>
                    </div>
                    <div className="group text-center lg:text-left">
                      <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                     mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 
                                     group-hover:from-purple-400 transition-colors"></div>
                      <p className="text-xs sm:text-xs md:text-sm lg:text-xs xl:text-xs 2xl:text-xs
                                   text-neutral-500 uppercase tracking-widest 
                                   mb-1 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1">Agencia</p>
                      <p className="text-sm sm:text-base md:text-lg lg:text-base xl:font-medium 2xl:font-medium
                                   text-neutral-100 font-medium">{data.agency.name}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 md:space-y-3 lg:space-y-2 xl:space-y-2 2xl:space-y-2">
                  <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent"></div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-neutral-300 xl:text-md xl:leading-relaxed xl:font-light 2xl:text-neutral-300 2xl:text-md 2xl:leading-relaxed 2xl:font-light
                               text-neutral-300 leading-relaxed font-light 
                               text-center lg:text-left">{data.bio}</p>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between 
                               gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:py-4 2xl:py-4
                               py-3 sm:py-4 md:py-4 lg:py-4">
                  <Button
                    text={"Más sobre " + data.name}
                    href={data.wiki}
                    className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-sm xl:font-medium xl:py-2 xl:px-3 2xl:text-sm 2xl:font-medium 2xl:py-2 2xl:px-3
                             font-medium 
                             py-2 sm:py-2 md:py-3 lg:py-2
                             px-3 sm:px-4 md:px-5 lg:px-3
                             w-full lg:w-auto"
                    target="_blank"
                  />
                  <div className="flex flex-col sm:flex-row lg:flex-row items-center 
                                 gap-2 sm:gap-3 md:gap-4 lg:gap-1 xl:gap-1 2xl:gap-1">
                    <h1 className='text-xs sm:text-sm md:text-base lg:text-base xl:text-md xl:text-neutral-500 xl:font-bold xl:uppercase 2xl:text-md 2xl:text-neutral-500 2xl:font-bold 2xl:uppercase
                                  text-neutral-500 font-bold uppercase text-center lg:text-left mr-0 xl:mr-2 2xl:mr-2'>
                      Redes Sociales:
                    </h1>
                    <div className="flex items-center gap-1 sm:gap-2 md:gap-2 lg:gap-1 xl:gap-1 2xl:gap-1">
                      {data.social_media_links.map(social => (
                        <a
                          key={social.id}
                          href={social.url}
                          target="_blank"
                          className="relative flex 
                                   w-8 sm:w-9 md:w-10 lg:w-10 xl:w-10 2xl:w-10
                                   h-8 sm:h-9 md:h-10 lg:h-10 xl:h-10 2xl:h-10
                                   items-center justify-center rounded transition-colors duration-200"
                        >
                          <span className="absolute inline-flex h-full w-full animate-pulse rounded-2xl bg-neutral-700/50"></span>
                          <img
                            src={social.social_media.logo.thumbnail_url}
                            onError={(e) => {
                              e.target.src = 'https://placehold.co/24x24/666666/ffffff/png?text=?';
                            }}
                            alt="Social"
                            className="relative 
           w-4 sm:w-5 md:w-6 lg:w-6 xl:w-6 2xl:w-6
           h-4 sm:h-5 md:h-6 lg:h-6 xl:h-6 2xl:h-6
           opacity-70 hover:opacity-100"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Estadísticas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                               gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
                  {/* Vuelos */}
                  <div className="bg-neutral-800/40 backdrop-blur-sm 
                                 rounded-xl sm:rounded-2xl 
                                 p-3 sm:p-4 md:p-5 lg:p-4 xl:p-4 2xl:p-4
                                 border border-neutral-700/40 hover:border-neutral-600/60 
                                 transition-all duration-300 group">
                    <div className="text-center">
                      <div className="mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                        <GradientText className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl xl:font-bold 2xl:text-3xl 2xl:font-bold 
                                               font-bold" colors={["#3b82f6", "#60a5fa", "#3b82f6"]}>
                          <CountUp
                            to={data.flights_count}
                            from={0}
                            duration={3}
                            separator=","
                          />
                        </GradientText>
                      </div>
                      <h3 className="text-neutral-300 
                                   text-sm sm:text-base md:text-lg lg:text-base xl:text-md xl:font-medium 2xl:text-md 2xl:font-medium
                                   font-medium">Vuelos</h3>
                    </div>
                  </div>

                  {/* Aterrizajes */}
                  <div className="bg-neutral-800/40 backdrop-blur-sm 
                                 rounded-xl sm:rounded-2xl 
                                 p-3 sm:p-4 md:p-5 lg:p-4 xl:p-4 2xl:p-4
                                 border border-neutral-700/40 hover:border-neutral-600/60 
                                 transition-all duration-300 group">
                    <div className="text-center">
                      <div className="mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                        <GradientText className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl xl:font-bold 2xl:text-3xl 2xl:font-bold 
                                               font-bold" colors={["#3b82f6", "#60a5fa", "#3b82f6"]}>
                          <CountUp
                            to={data.landings_count}
                            from={0}
                            duration={3}
                            separator=","
                          />
                        </GradientText>
                      </div>
                      <h3 className="text-neutral-300 
                                   text-sm sm:text-base md:text-lg lg:text-base xl:text-md xl:font-medium 2xl:text-md 2xl:font-medium
                                   font-medium">Aterrizajes</h3>
                    </div>
                  </div>

                  {/* Caminatas Espaciales */}
                  <div className="bg-neutral-800/40 backdrop-blur-sm 
                                 rounded-xl sm:rounded-2xl 
                                 p-3 sm:p-4 md:p-5 lg:p-4 xl:p-4 2xl:p-4
                                 border border-neutral-700/40 hover:border-neutral-600/60 
                                 transition-all duration-300 group">
                    <div className="text-center">
                      <div className="mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                        <GradientText className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl xl:font-bold 2xl:text-3xl 2xl:font-bold 
                                               font-bold" colors={["#3b82f6", "#60a5fa", "#3b82f6"]}>
                          <CountUp
                            to={data.spacewalks_count}
                            from={0}
                            duration={3}
                            separator=","
                          />
                        </GradientText>
                      </div>
                      <h3 className="text-neutral-300 
                                   text-sm sm:text-base md:text-lg lg:text-base xl:text-md xl:font-medium 2xl:text-md 2xl:font-medium
                                   font-medium">Caminatas Espaciales</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}