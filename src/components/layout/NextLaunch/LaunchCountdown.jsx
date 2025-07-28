import React, { useEffect, useState } from 'react'
import { Countdown } from './Countdown';

export const LaunchCountdown = () => {
    const [launchDate, setLaunchDate] = useState(null);
    const [launchDescription, setLaunchDescription] = useState('');
    const [shipName, setShipName] = useState('');
    const [missionName, setMissionName] = useState('');
    const [locationName, setLocationName] = useState('');

    useEffect(() => {
        const fetchLaunchData = async () => {
            try {
                const response = await fetch('https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?search=spacex&ordering=net&limit=1');
                const data = await response.json();
                setLaunchDate(data.results[0].window_start);
                setLaunchDescription(data.results[0].mission.description);
                setShipName(data.results[0].rocket.configuration.name);
                setMissionName(data.results[0].mission.name);
                setLocationName(data.results[0].pad.location.name);
            } catch (error) {
                console.error('error', error)
            }
        };

        fetchLaunchData();

        //Para hacer una petición cada 3 horas
        const interval = setInterval(fetchLaunchData, 3 * 60 * 60 * 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="bg-neutral-800/15 backdrop-blur-sm border border-neutral-700/20 rounded-xl sm:rounded-2xl 
                 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-6 2xl:p-6
                 shadow-lg flex flex-col justify-center items-center">
            <div className='p-5 w-full'>
                <Countdown targetDate={launchDate} />
            </div>
            <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-4 2xl:mt-4 font-['Oxanium']">
                <div className="z-10">
                    {/* Grid de información principal */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                           gap-3 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-6 2xl:gap-6
                           mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-6 2xl:mb-6">

                        {/* Misión */}
                        <div className="group">
                            <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                           mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 
                           group-hover:from-emerald-400 transition-colors"></div>
                            <p className="text-neutral-300 uppercase tracking-widest 
                         mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                         text-xs sm:text-xs md:text-xs lg:text-sm xl:text-md 2xl:text-md">
                                Misión:
                            </p>
                            <p className="text-neutral-100 font-medium
                         text-sm sm:text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-lg
                         leading-tight">
                                {missionName}
                            </p>
                        </div>

                        {/* Aeronave */}
                        <div className="group">
                            <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                           mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 
                           group-hover:from-blue-400 transition-colors"></div>
                            <p className="text-neutral-300 uppercase tracking-widest 
                         mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                         text-xs sm:text-xs md:text-xs lg:text-sm xl:text-md 2xl:text-md">
                                Aeronave:
                            </p>
                            <p className="text-neutral-100 font-medium
                         text-sm sm:text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-lg
                         leading-tight">
                                {shipName}
                            </p>
                        </div>

                        {/* Lugar de lanzamiento */}
                        <div className="group sm:col-span-2 lg:col-span-1">
                            <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                           mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 
                           group-hover:from-purple-400 transition-colors"></div>
                            <p className="text-neutral-300 uppercase tracking-widest 
                         mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1
                         text-xs sm:text-xs md:text-xs lg:text-sm xl:text-md 2xl:text-md">
                                Lugar de lanzamiento:
                            </p>
                            <p className="text-neutral-100 font-medium
                         text-sm sm:text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-lg
                         leading-tight">
                                {locationName}
                            </p>
                        </div>
                    </div>

                    {/* Descripción - Sección separada */}
                    <div className="rounded-lg sm:rounded-xl
                           p-3 sm:p-4 md:p-5 lg:p-6 xl:p-4 2xl:p-4">
                        <div className="group">
                            <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent 
                           mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 
                           group-hover:from-orange-400 transition-colors"></div>
                            <p className="text-neutral-300 uppercase tracking-widest 
                         mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-1 2xl:mb-1
                         text-xs sm:text-xs md:text-xs lg:text-sm xl:text-md 2xl:text-md">
                                Descripción:
                            </p>
                            <p className="text-neutral-100 font-medium leading-relaxed
                         text-sm sm:text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-lg">
                                {launchDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}