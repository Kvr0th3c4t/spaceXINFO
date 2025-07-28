import React from 'react';
import { Button } from '../UI/Button';
import { useStatusColors } from '../../../hooks/LaunchesHooks/useStatusColors';

export const LaunchCard = ({ launch }) => {
    const { getStatusColor } = useStatusColors();

    return (
        <div
            key={launch.id}
            className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg 
                       p-3 sm:p-4 md:p-4 lg:p-4 xl:p-2 2xl:p-2
                       hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300"
        >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-3 2xl:gap-2">
                <img
                    src={launch.image}
                    alt={launch.name}
                    className="w-full h-32 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-14 xl:h-14 2xl:w-12 2xl:h-12
                              rounded-lg object-cover flex-shrink-0"
                />

                <div className="flex-1 min-w-0 space-y-2 sm:space-y-3 xl:space-y-2 2xl:space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <h3 className="font-semibold text-white leading-tight font-['Azonix']
                                      text-sm sm:text-sm md:text-base lg:text-base xl:text-sm 2xl:text-xs
                                      line-clamp-2 sm:line-clamp-1 md:line-clamp-2">
                            {launch.name}
                        </h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium self-start sm:flex-shrink-0 sm:ml-2 ${getStatusColor(launch.status.abbrev)}`}>
                            {launch.status.abbrev}
                        </span>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-xs md:text-sm xl:text-xs 2xl:text-xs line-clamp-1 sm:line-clamp-1 md:line-clamp-2">
                        {launch.mission.name}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 xl:gap-1 2xl:gap-1 text-xs sm:text-xs md:text-sm xl:text-xs 2xl:text-xs text-gray-400">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 xl:w-2.5 xl:h-2.5 2xl:w-3 2xl:h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                            <span className="truncate">
                                <strong className="text-gray-300">Localización:</strong> {launch.pad.location.name}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 xl:w-2.5 xl:h-2.5 2xl:w-3 2xl:h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                            <span className="truncate">
                                <strong className="text-gray-300">Fecha:</strong> {new Date(launch.net).toLocaleDateString()}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 xl:w-2.5 xl:h-2.5 2xl:w-3 2xl:h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                            <span className="truncate">
                                <strong className="text-gray-300">Órbita:</strong> {launch.mission.orbit.name}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 xl:w-2.5 xl:h-2.5 2xl:w-3 2xl:h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                            <span className="truncate">
                                <strong className="text-gray-300">Lanzador:</strong> {launch.rocket.configuration.name}
                            </span>
                        </div>

                        {launch.mission.type && (
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 xl:w-2.5 xl:h-2.5 2xl:w-3 2xl:h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                                <span className="truncate">
                                    <strong className="text-gray-300">Tipo:</strong> {launch.mission.type}
                                </span>
                            </div>
                        )}

                        {launch.pad && (
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 xl:w-2.5 xl:h-2.5 2xl:w-3 2xl:h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                                <span className="truncate">
                                    <strong className="text-gray-300">Launch Pad:</strong> {launch.pad.name}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Botón - ancho completo en móvil */}
                    <div className="pt-2 sm:pt-3 xl:pt-2 2xl:pt-1">
                        <Button
                            text={"Ver detalle"}
                            href={`/launchDetail/${launch.id}`}
                            className="w-full sm:w-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-4 2xl:px-3
                                      py-2 sm:py-2 md:py-2 lg:py-3 xl:py-2 2xl:py-1
                                      text-xs sm:text-xs md:text-sm lg:text-sm xl:text-xs 2xl:text-xs
                                      uppercase"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};