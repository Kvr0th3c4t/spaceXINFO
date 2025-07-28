import React from 'react';
import { Button } from '../UI/Button';
import { useStatusColors } from '../../../hooks/LaunchesHooks/useStatusColors';

export const LaunchCard = ({ launch }) => {

    const { getStatusColor } = useStatusColors();

    return (
        <div
            key={launch.id}
            className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-4 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300"
        >
            <div className="flex gap-4">
                <img
                    src={launch.image}
                    alt={launch.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-white text-sm leading-tight line-clamp-2 font-['Azonix']">
                            {launch.name}
                        </h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ml-2 ${getStatusColor(launch.status.abbrev)}`}>
                            {launch.status.abbrev}
                        </span>
                    </div>

                    <p className="text-gray-400 text-xs mb-3 line-clamp-1">{launch.mission.name}</p>

                    <div className="grid grid-cols-2 space-y-1 text-xs text-gray-400">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                            <span className="truncate"><strong>Localización: </strong>{launch.pad.location.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                            <span><strong>Fecha lanzamiento: </strong>{new Date(launch.net).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                            <span><strong>Orbita: </strong>{launch.mission.orbit.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                            <span><strong>Lanzador: </strong>{launch.rocket.configuration.name}</span>
                        </div>
                        {launch.mission.type && (
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-blue-500"></span>
                                <span><strong>Tipo de misión: </strong>{launch.mission.type}</span>
                            </div>
                        )}
                        {launch.pad && (
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                <span className="truncate"><strong>Launch Pad: </strong>{launch.pad.name}</span>
                            </div>
                        )}
                        <div className="mt-3">
                            <Button
                                text={"Ver detalle"}
                                href={`/launchDetail/${launch.id}`}
                                className={"px-5 uppercase"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};