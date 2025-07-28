import React from 'react'
import { useFetchShipsDetail } from '../../hooks/ShipsHooks/useFetchShipsDetail';
import { LoadingSpinner } from '../layout/UI/LoadingSpinner';
import dragonImg from '../../assets/SpacecraftsImg/dragon.webp'
import starshipImg from '../../assets/SpacecraftsImg/starship.webp'
import GradientText from '../layout/UI/GradientText';
import CountUp from '../layout/UI/CountUp';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import BlurText from '../layout/UI/BlurText';
import { Button } from '../layout/UI/Button';

export const ShipDetail = () => {
  const { data, loading } = useFetchShipsDetail()

  return (
    <section className="bg-neutral-900 min-h-dvh w-full font-['Oxanium']">
      {loading && <LoadingSpinner />}

      {!loading && data && (
        <div className="min-h-dvh w-full">
          {/* Hero Section */}
          {/* Hero Section */}
          <div className="relative z-10 flex flex-col bg-cover bg-right-bottom bg-no-repeat h-dvh w-full overflow-hidden">
            <div className="flex flex-col z-10 bg-cover bg-right-bottom bg-no-repeat h-dvh w-full overflow-hidden
                 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-15 2xl:p-20"
              style={{ backgroundImage: `url(${data[0].image.image_url})` }}>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-20 flex flex-col items-center h-full justify-center text-center font-['Azonix']">
                <BlurText
                  text={data[0].name}
                  delay={150}
                  animateBy="letters"
                  direction="bottom"
                  className="font-extrabold mb-8 sm:mb-12 md:mb-16 lg:mb-18 xl:mb-20 2xl:mb-24 text-white
                  text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
                />
                <Button
                  text={"Información oficial"}
                  href={`${data[0].info_link}`}
                  target='_blank'
                  className="uppercase px-12 sm:px-18 md:px-24 lg:px-30 xl:px-35 2xl:px-40
                  text-xs"
                />
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 z-30 
                   flex flex-col items-center animate-bounce cursor-pointer
                   opacity-80 hover:opacity-100 transition-opacity duration-300">

                <svg
                  width="30px"
                  height="20px"
                  aria-hidden="true"
                  className="w-[30px] h-[20px]"
                >
                  <path
                    stroke="#ffffff"
                    strokeWidth="2px"
                    d="M2.000,5.000 L15.000,18.000 L28.000,5.000"
                    className="stroke-white stroke-2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="min-h-dvh w-full flex flex-col lg:flex-row justify-center items-center 
                         p-4 sm:p-6 md:p-8 lg:p-10 xl:p-10 2xl:p-14 
                         gap-6 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-12">

            {/* Image Section */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
              {data[0].name.includes("Dragon") ? (
                <img
                  src={dragonImg}
                  alt="Dragon"
                  className="relative overflow-hidden object-cover rounded-2xl mask-radial-[100%_100%] mask-radial-from-35% mask-radial-at-left
                            w-64 sm:w-72 md:w-80 lg:w-96 xl:max-w-sm 2xl:w-[480px]
                            h-auto"
                />
              ) : (
                <img
                  src={starshipImg}
                  alt="Starship"
                  className="relative overflow-hidden object-cover rounded-2xl mask-radial-[100%_100%] mask-radial-from-35% mask-radial-at-left
                            w-64 sm:w-72 md:w-80 lg:w-96 xl:max-w-sm 2xl:w-[480px]
                            h-auto"
                />
              )}
            </div>

            {/* Content Section */}
            <div className="flex-1 w-full">

              {/* Historia Section */}
              <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-8">
                <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                               mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                               group-hover:from-emerald-400 transition-colors"></div>
                <p className="text-neutral-300 leading-relaxed overflow-y-auto
                             text-sm">
                  {data[0].history}
                </p>
              </div>

              {/* Especificaciones Técnicas Section */}
              <div className="flex-1 mb-3 sm:mb-4 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-8">
                <h3 className="font-semibold text-neutral-100 tracking-tight font-['Azonix']
                              text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl">Especificaciones técnicas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 
                               gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-8 
                               mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 w-full">
                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <p className="text-neutral-500 uppercase tracking-widest 
                                 mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                                 text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm">Altura</p>
                    <p className="text-neutral-100 font-medium
                                 text-sm">{data[0].height}m</p>
                  </div>
                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <h4 className="text-neutral-500 uppercase tracking-widest 
                                  mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                                  text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm">Diámetro</h4>
                    <p className="font-bold text-neutral-300
                                 text-sm">{data[0].diameter}m</p>
                  </div>
                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <h4 className="text-neutral-500 uppercase tracking-widest 
                                  mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                                  text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm">Capacidad de Carga</h4>
                    <p className="font-bold text-neutral-300
                                 text-sm">{(data[0].payload_capacity / 1000).toFixed(0)} ton</p>
                  </div>
                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <h4 className="text-neutral-500 uppercase tracking-widest 
                                  mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                                  text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm">Capacidad de Tripulación</h4>
                    <p className="font-bold text-neutral-300
                                 text-sm">{data[0].crew_capacity || 'N/A'}</p>
                  </div>
                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <h4 className="text-neutral-500 uppercase tracking-widest 
                                  mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                                  text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm">Primer Vuelo</h4>
                    <p className="font-bold text-neutral-300
                                 text-sm">{new Date(data[0].maiden_flight).toLocaleDateString('es-ES')}</p>
                  </div>
                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <Button
                      text={"Información oficial"}
                      href={`${data[0].info_link}`}
                      target='_blank'
                      className="uppercase px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10 2xl:px-12
                                text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Estadísticas Section */}
              <div className="flex-1 mb-3 sm:mb-4 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-8">
                <h3 className="font-semibold text-neutral-100 tracking-tight font-['Azonix']
                              text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl">Estadísticas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 
                               gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-8 
                               mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 w-full">

                  {/* Stats Cards */}
                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <div>
                      <GradientText
                        colors={["#10b981", "#059669", "#047857"]}
                        showBorder={false}
                        className="font-extrabold text-3xl"
                      >
                        <CountUp to={data[0].successful_launches} from={0} duration={3} separator="," />
                      </GradientText>
                    </div>
                    <div className="text-neutral-400 text-center
                                   text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm">Lanzamientos Exitosos</div>
                  </div>

                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <div>
                      <GradientText
                        colors={["#ff4444", "#ff0000", "#cc0000"]}
                        showBorder={false}
                        className="font-extrabold text-3xl"
                      >
                        <CountUp to={data[0].failed_launches} from={0} duration={3} separator="," />
                      </GradientText>
                    </div>
                    <div className="text-neutral-400 text-center
                                   text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm">Fallidos</div>
                  </div>

                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <div>
                      <GradientText
                        colors={["#3b82f6", "#60a5fa", "#3b82f6"]}
                        showBorder={false}
                        className="font-extrabold text-3xl"
                      >
                        <CountUp to={data[0].total_launch_count} from={0} duration={3} separator="," />
                      </GradientText>
                    </div>
                    <div className="text-neutral-400 text-center
                                   text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm">Total Lanzamientos</div>
                  </div>

                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <div>
                      <GradientText
                        colors={["#10b981", "#059669", "#047857"]}
                        showBorder={false}
                        className="font-extrabold text-3xl"
                      >
                        <CountUp to={data[0].successful_landings} from={0} duration={3} separator="," />
                      </GradientText>
                    </div>
                    <div className="text-neutral-400 text-center
                                   text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm">Aterrizajes Exitosos</div>
                  </div>

                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <div>
                      <GradientText
                        colors={["#ff4444", "#ff0000", "#cc0000"]}
                        showBorder={false}
                        className="font-extrabold text-3xl"
                      >
                        <CountUp to={data[0].failed_landings} from={0} duration={3} separator="," />
                      </GradientText>
                    </div>
                    <div className="text-neutral-400 text-center
                                   text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm">Fallidos</div>
                  </div>

                  <div className="group">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <div>
                      <GradientText
                        colors={["#3b82f6", "#60a5fa", "#3b82f6"]}
                        showBorder={false}
                        className="font-extrabold text-3xl"
                      >
                        <CountUp to={data[0].attempted_landings} from={0} duration={3} separator="," />
                      </GradientText>
                    </div>
                    <div className="text-neutral-400 text-center
                                   text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm">Intentos de Aterrizaje</div>
                  </div>

                  {/* Success Rate Bars */}
                  <div className="col-span-full sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 
                                 p-2 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-4">
                    <h4 className="font-bold text-green-400 
                                  mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                                  text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">Tasa de Éxito - Lanzamientos</h4>
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <div className="font-bold text-neutral-100 
                                   mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                                   text-lg ">
                      <CountUp to={((data[0].successful_launches / data[0].total_launch_count) * 100).toFixed(1)} from={0} duration={3} separator="," />
                      %
                    </div>
                    <div className="w-full bg-neutral-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(data[0].successful_launches / data[0].total_launch_count) * 100}%` }}
                        transition={{
                          duration: 3,
                          ease: "easeOut"
                        }}
                      ></motion.div>
                    </div>
                  </div>

                  <div className="col-span-full sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1 2xl:col-span-1 
                                 p-2 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-4">
                    <h4 className="font-bold text-blue-400 
                                  mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                                  text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">Tasa Éxito Aterrizajes</h4>
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                   mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 
                                   group-hover:from-emerald-400 transition-colors"></div>
                    <div className="font-bold text-neutral-100 
                                   mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                                   text-lg ">
                      <CountUp to={((data[0].successful_landings / data[0].attempted_landings) * 100).toFixed(1)} from={0} duration={3} separator="," />
                      %
                    </div>
                    <div className="w-full bg-neutral-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(data[0].successful_landings / data[0].attempted_landings) * 100}%` }}
                        transition={{
                          duration: 3,
                          ease: "easeOut"
                        }}
                      >
                      </motion.div>
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