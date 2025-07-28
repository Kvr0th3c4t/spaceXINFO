import React from 'react'
import { useLaunchersDetail } from '../../hooks/LaunchersHooks/useLaunchersDetail'
import { LoadingSpinner } from '../layout/UI/LoadingSpinner'
import GradientText from '../layout/UI/GradientText'
import CountUp from '../layout/UI/CountUp'
import BlurText from '../layout/UI/BlurText'
import { Button } from '../layout/UI/Button'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const LaunchersDetail = () => {
    const { data, loading } = useLaunchersDetail()

    return (
        <section className='min-h-dvh w-full bg-neutral-900'>
            {loading && <LoadingSpinner />}
            {!loading && data && (
                <>
                    {/* Hero Section */}
                    <div className="relative h-dvh">
                        <div className="relative z-10 flex flex-col bg-cover bg-right-bottom bg-no-repeat h-dvh w-full overflow-hidden
                                       p-3 sm:p-5 md:p-7 lg:p-9 xl:p-12 2xl:p-16"
                            style={{ backgroundImage: `url(${data.image.image_url})` }}>
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-20 flex flex-col items-center h-full justify-center text-center font-['Azonix']">
                                <BlurText
                                    text={data.name}
                                    delay={150}
                                    animateBy="letters"
                                    direction="bottom"
                                    className="font-extrabold mb-6 sm:mb-10 md:mb-14 lg:mb-16 xl:mb-16 2xl:mb-20 text-white
                                              text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                                />
                                <BlurText
                                    text={data.description}
                                    delay={50}
                                    animateBy="words"
                                    direction="bottom"
                                    className="font-['Oxanium'] text-gray-300 text-center
                                              mb-3 sm:mb-5 md:mb-7 lg:mb-7 xl:mb-7 2xl:mb-8
                                              text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl
                                              max-w-md sm:max-w-md md:max-w-md lg:max-w-2xl xl:max-w-7xl 2xl:max-w-7xl
                                              px-3 sm:px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-16"
                                />
                                <Button
                                    text={"Información oficial"}
                                    href={`${data.info_url}`}
                                    target='_blank'
                                    className="uppercase px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36
                                              text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
                                />
                            </div>
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

                    {/* Specifications Section */}
                    <div className="relative h-dvh">
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-900 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:6rem_4rem] [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,255,255,0.1),transparent)]">
                            </div>
                        </div>
                        <div className="relative z-10 flex flex-col justify-center items-center h-dvh w-full overflow-hidden
                                       p-3 sm:p-5 md:p-7 lg:p-9 xl:p-12 2xl:p-16">
                            <p className="font-['Azonix'] text-gray-300
                                        text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl">{data.name}</p>
                            <h2 className="font-['Oxanium'] text-white 
                                         mb-3 sm:mb-5 md:mb-7 lg:mb-7 xl:mb-7 2xl:mb-8
                                         text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">Especificaciones técnicas</h2>

                            {/* Responsive Table */}
                            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl overflow-hidden">
                                <table className="w-full text-white font-['Oxanium'] border-collapse backdrop-blur-sm rounded-lg overflow-hidden">
                                    <tbody>
                                        <tr className="border-b border-white/50 hover:bg-white/10 transition-colors">
                                            <td className="py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">Altura</td>
                                            <td className="text-right py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-blue-300 font-semibold
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{data.length}Mts</td>
                                        </tr>
                                        <tr className="border-b border-white/50 hover:bg-white/10 transition-colors">
                                            <td className="py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">Diámetro</td>
                                            <td className="text-right py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-blue-300 font-semibold
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{data.diameter}Mts</td>
                                        </tr>
                                        <tr className="border-b border-white/50 hover:bg-white/10 transition-colors">
                                            <td className="py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">Peso</td>
                                            <td className="text-right py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-blue-300 font-semibold
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{data.launch_mass}Kgs</td>
                                        </tr>
                                        <tr className="border-b border-white/50 hover:bg-white/10 transition-colors">
                                            <td className="py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">Aceleración</td>
                                            <td className="text-right py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-blue-300 font-semibold
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{data.to_thrust}kN</td>
                                        </tr>
                                        <tr className="border-b border-white/50 hover:bg-white/10 transition-colors">
                                            <td className="py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">Primer vuelo</td>
                                            <td className="text-right py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-blue-300 font-semibold
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{new Date(data.maiden_flight).toLocaleDateString()}</td>
                                        </tr>
                                        <tr className="border-b border-white/50 hover:bg-white/10 transition-colors">
                                            <td className="py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">Coste de lanzamiento</td>
                                            <td className="text-right py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-blue-300 font-semibold
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{data.launch_cost}€</td>
                                        </tr>
                                        <tr className="border-b border-white/50 hover:bg-white/10 transition-colors">
                                            <td className="py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">Carga útil órbita LEO</td>
                                            <td className="text-right py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-blue-300 font-semibold
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{data.leo_capacity}Kgs</td>
                                        </tr>
                                        <tr className="hover:bg-white/10 transition-colors">
                                            <td className="py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">Carga útil órbita GEO</td>
                                            <td className="text-right py-1.5 px-1.5 sm:py-1.5 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-3 2xl:px-5
                                                         text-blue-300 font-semibold
                                                         text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{data.gto_capacity}Kgs</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Statistics Section */}
                    <div className="w-full h-dvh bg-neutral-950 
                                   p-3 sm:p-5 md:p-7 lg:p-10 xl:p-16 2xl:p-20 
                                   space-y-3 sm:space-y-5 md:space-y-7 lg:space-y-7 xl:space-y-7 2xl:space-y-8
                                   flex flex-col justify-center">

                        <div className='flex flex-col justify-center items-center'>
                            <p className="font-['Azonix'] text-gray-300
                                        text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl">{data.name}</p>
                            <h2 className="font-['Oxanium'] text-white 
                                         mb-3 sm:mb-5 md:mb-7 lg:mb-7 xl:mb-7 2xl:mb-8
                                         text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">Estadísticas de lanzamiento</h2>
                        </div>

                        {/* Launch Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 
                                       gap-2 sm:gap-3 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-6">
                            <div className="group">
                                <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                               mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3 group-hover:from-emerald-400 transition-colors"></div>
                                <div>
                                    <GradientText
                                        colors={["#10b981", "#059669", "#047857"]}
                                        showBorder={false}
                                        className="font-extrabold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl"
                                    >
                                        <CountUp
                                            to={data.successful_launches}
                                            from={0}
                                            duration={3}
                                            separator=","
                                            className='p-1.5 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-5'
                                        />
                                    </GradientText>
                                </div>
                                <div className="text-neutral-400 text-center 
                                               mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-2
                                               text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                                    Lanzamientos Exitosos
                                </div>
                            </div>
                            <div className="group">
                                <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                               mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3 group-hover:from-emerald-400 transition-colors"></div>
                                <div>
                                    <GradientText
                                        colors={["#ff4444", "#ff0000", "#cc0000"]}
                                        showBorder={false}
                                        className="font-extrabold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl"
                                    >
                                        <CountUp
                                            to={data.failed_launches}
                                            from={0}
                                            duration={3}
                                            separator=","
                                            className='p-1.5 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-5'
                                        />
                                    </GradientText>
                                </div>
                                <div className="text-neutral-400 text-center 
                                               mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-2
                                               text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                                    Lanzamientos Fallidos
                                </div>
                            </div>
                            <div className="group">
                                <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                               mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3 group-hover:from-emerald-400 transition-colors"></div>
                                <div>
                                    <GradientText
                                        colors={["#3b82f6", "#60a5fa", "#3b82f6"]}
                                        showBorder={false}
                                        className="font-extrabold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl"
                                    >
                                        <CountUp
                                            to={data.total_launch_count}
                                            from={0}
                                            duration={3}
                                            separator=","
                                            className='p-1.5 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-5'
                                        />
                                    </GradientText>
                                </div>
                                <div className="text-neutral-400 text-center 
                                               mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-2
                                               text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                                    Total Lanzamientos
                                </div>
                            </div>
                        </div>

                        {/* Landing Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 
                                       gap-2 sm:gap-3 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-6">
                            <div className="group">
                                <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                               mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3 group-hover:from-emerald-400 transition-colors"></div>
                                <div>
                                    <GradientText
                                        colors={["#10b981", "#059669", "#047857"]}
                                        showBorder={false}
                                        className="font-extrabold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl"
                                    >
                                        <CountUp
                                            to={data.successful_landings}
                                            from={0}
                                            duration={3}
                                            separator=","
                                            className='p-1.5 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-5'
                                        />
                                    </GradientText>
                                </div>
                                <div className="text-neutral-400 text-center 
                                               mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-2
                                               text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                                    Aterrizajes Exitosos
                                </div>
                            </div>
                            <div className="group">
                                <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                               mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3 group-hover:from-emerald-400 transition-colors"></div>
                                <div>
                                    <GradientText
                                        colors={["#ff4444", "#ff0000", "#cc0000"]}
                                        showBorder={false}
                                        className="font-extrabold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl"
                                    >
                                        <CountUp
                                            to={data.failed_landings}
                                            from={0}
                                            duration={3}
                                            separator=","
                                            className='p-1.5 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-5'
                                        />
                                    </GradientText>
                                </div>
                                <div className="text-neutral-400 text-center 
                                               mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-2
                                               text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                                    Aterrizajes Fallidos
                                </div>
                            </div>
                            <div className="group">
                                <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                               mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3 group-hover:from-emerald-400 transition-colors"></div>
                                <div>
                                    <GradientText
                                        colors={["#3b82f6", "#60a5fa", "#3b82f6"]}
                                        showBorder={false}
                                        className="font-extrabold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl"
                                    >
                                        <CountUp
                                            to={data.attempted_landings}
                                            from={0}
                                            duration={3}
                                            separator=","
                                            className='p-1.5 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-5'
                                        />
                                    </GradientText>
                                </div>
                                <div className="text-neutral-400 text-center 
                                               mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-2
                                               text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                                    Intentos de Aterrizaje
                                </div>
                            </div>
                        </div>

                        {/* Success Rate Bars */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 
                                       gap-3 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-6">

                            <div className="lg:col-span-2 xl:col-span-2 2xl:col-span-2">
                                <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                               mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3 group-hover:from-emerald-400 transition-colors"></div>
                                <h4 className="font-bold text-green-400 
                                              mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3
                                              text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">
                                    Tasa de Éxito - Lanzamientos
                                </h4>

                                <div className="font-bold text-neutral-100 
                                               mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3
                                               text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
                                    <CountUp
                                        to={((data.successful_launches / data.total_launch_count) * 100).toFixed(1)}
                                        from={0}
                                        duration={3}
                                        separator=","
                                    />
                                    %
                                </div>
                                <div className="w-full bg-neutral-600 rounded-full 
                                               h-1.5 sm:h-1.5 md:h-2 lg:h-2 xl:h-2 2xl:h-3">
                                    <motion.div
                                        className="bg-gradient-to-r from-green-500 to-green-400 rounded-full
                                                 h-1.5 sm:h-1.5 md:h-2 lg:h-2 xl:h-2 2xl:h-3"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: `${(data.successful_launches / data.total_launch_count) * 100}%`
                                        }}
                                        transition={{
                                            duration: 3,
                                            ease: "easeOut"
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                                               mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3 group-hover:from-emerald-400 transition-colors"></div>
                                <h4 className="font-bold text-blue-400 
                                              mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3
                                              text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">
                                    Tasa Éxito Aterrizajes
                                </h4>
                                <div className="font-bold text-neutral-100 
                                               mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3
                                               text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
                                    <CountUp
                                        to={((data.successful_landings / data.attempted_landings) * 100).toFixed(1)}
                                        from={0}
                                        duration={3}
                                        separator=","
                                    />
                                    %
                                </div>
                                <div className="w-full bg-neutral-600 rounded-full 
                                               h-1.5 sm:h-1.5 md:h-2 lg:h-2 xl:h-2 2xl:h-3">
                                    <motion.div
                                        className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-full
                                                 h-1.5 sm:h-1.5 md:h-2 lg:h-2 xl:h-2 2xl:h-3"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: `${(data.successful_landings / data.attempted_landings) * 100}%`
                                        }}
                                        transition={{
                                            duration: 3,
                                            ease: "easeOut"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )}
        </section>
    )
}