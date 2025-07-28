import React from 'react'
import { Button } from '../layout/UI/Button'
import Hero from '../../assets/HomeImg/Hero.webp'
import Hero2 from '../../assets/HomeImg/Hero2.webp'
import Hero4 from '../../assets/HomeImg/Hero4.webp'
import Hero5 from '../../assets/HomeImg/Hero5.webp'
import { LoadingSpinner } from '../layout/UI/LoadingSpinner'

export const Home = () => {
    return (
        <section className="text-white">
            {/* Sección 1 - Falcon 1 hasta Starship */}
            <div
                className="bg-cover bg-center bg-no-repeat h-dvh w-full relative overflow-hidden"
                style={{ backgroundImage: `url(${Hero})` }}
            >
                <div className="relative h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
                    <div className="max-w-7xl w-full">
                        <h1
                            className="font-['Azonix'] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                                     mb-2 sm:mb-3 md:mb-4 lg:mb-6 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
                                     leading-tight"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}
                        >
                            Desde Falcon 1 hasta Starship
                        </h1>
                        <h3
                            className="font-['Azonix'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                                     max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                                     mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}
                        >
                            Accede a información detallada de todos los lanzamientos
                        </h3>
                        <Button
                            text={"Ver más"}
                            href={"/launches"}
                            className={"px-8 sm:px-12 md:px-14 lg:px-16 xl:px-18 uppercase text-sm sm:text-base"}
                        />
                    </div>
                </div>
            </div>

            {/* Sección 2 - Tecnología Aeroespacial */}
            <div
                className="bg-cover bg-center bg-no-repeat h-dvh w-full relative overflow-hidden"
                style={{ backgroundImage: `url(${Hero2})` }}
            >
                <div className="relative h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
                    <div className="max-w-7xl w-full ml-auto text-right">
                        <h1
                            className="font-['Azonix'] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                                     mb-2 sm:mb-3 md:mb-4 lg:mb-6 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
                                     leading-tight ml-auto"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}
                        >
                            Tecnología Aeroespacial
                        </h1>
                        <h3
                            className="font-['Azonix'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                                     max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                                     mb-4 sm:mb-6 md:mb-8 lg:mb-10 ml-auto"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}
                        >
                            Consulta especificaciones técnicas de cada vehículo espacial
                        </h3>
                        <div className="flex justify-end">
                            <Button
                                text={"Ver más"}
                                href={"/ships"}
                                className={"px-8 sm:px-12 md:px-14 lg:px-16 xl:px-18 uppercase text-sm sm:text-base"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección 3 - Tripulaciones y Astronautas */}
            <div
                className="bg-cover bg-center bg-no-repeat h-dvh w-full relative overflow-hidden"
                style={{ backgroundImage: `url(${Hero5})` }}
            >
                <div className="relative h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
                    <div className="max-w-7xl w-full">
                        <h1
                            className="font-['Azonix'] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                                     mb-2 sm:mb-3 md:mb-4 lg:mb-6 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
                                     leading-tight"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}
                        >
                            Tripulaciones y Astronautas
                        </h1>
                        <h3
                            className="font-['Azonix'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                                     max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                                     mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}
                        >
                            Información completa sobre las misiones espaciales
                        </h3>
                        <Button
                            text={"Ver más"}
                            href={"/tripulation"}
                            className={"px-8 sm:px-12 md:px-14 lg:px-16 xl:px-18 uppercase text-sm sm:text-base"}
                        />
                    </div>
                </div>
            </div>

            {/* Sección 4 - Datos y Estadísticas */}
            <div
                className="bg-cover bg-center bg-no-repeat h-dvh w-full relative overflow-hidden"
                style={{ backgroundImage: `url(${Hero4})` }}
            >
                <div className="relative h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
                    <div className="max-w-7xl w-full ml-auto text-right">
                        <h1
                            className="font-['Azonix'] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                                     mb-2 sm:mb-3 md:mb-4 lg:mb-6 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
                                     leading-tight ml-auto"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}
                        >
                            Teconología de lazamiento
                        </h1>
                        <h3
                            className="font-['Azonix'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                                     max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                                     mb-4 sm:mb-6 md:mb-8 lg:mb-10 ml-auto"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}
                        >
                            Innovación en propulsión y reutilización
                        </h3>
                        <div className="flex justify-end">
                            <Button
                                text={"Ver más"}
                                href={"/launchers"}
                                className={"px-8 sm:px-12 md:px-14 lg:px-16 xl:px-18 uppercase text-sm sm:text-base"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}