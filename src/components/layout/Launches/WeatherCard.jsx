import React, { useEffect, useState } from 'react'

export const WeatherCard = ({ launch }) => {

    const [weatherData, setWeatherData] = useState(null);


    useEffect(() => {
        const getWeatherData = async () => {
            if (!launch?.pad?.latitude || !launch?.pad?.longitude) {
                console.error('No coordinates available');
                return;
            }

            const lat = parseFloat(launch.pad.latitude);
            const lon = parseFloat(launch.pad.longitude);

            const baseUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=precipitation,cloud_cover,visibility,wind_speed_10m`;

            try {
                const response = await fetch(baseUrl);
                const data = await response.json();
                setWeatherData(data.current);
            } catch (error) {
                console.error("Error de tipo " + error);
            }
        };

        getWeatherData();
    }, [launch]);


    return (
        <div className="bg-neutral-900 rounded-2xl p-4 mt-4">
            <h1 className="font-semibold text-neutral-100 text-lg mb-6 tracking-tight font-['Azonix']">Condiciones climatológicas</h1>
            <div className="space-y-3 text-sm">
                <div className="p-3 bg-neutral-900 rounded-xl shadow-[inset_4px_4px_8px_rgba(17,24,39,0.6),inset_-4px_-4px_8px_rgba(75,85,99,0.2)] border-l-2 border-neutral-500 text-neutral-300">
                    <strong className="text-neutral-200">Velocidad del viento:</strong> {weatherData?.wind_speed_10m} km/h
                </div>
                <div className="p-3 bg-neutral-900 rounded-xl shadow-[inset_4px_4px_8px_rgba(17,24,39,0.6),inset_-4px_-4px_8px_rgba(75,85,99,0.2)] border-l-2 border-neutral-500 text-neutral-300">
                    <strong className="text-neutral-200">Volumen de precipitaciones:</strong> {weatherData?.precipitation} mm
                </div>
                <div className="p-3 bg-neutral-900 rounded-xl shadow-[inset_4px_4px_8px_rgba(17,24,39,0.6),inset_-4px_-4px_8px_rgba(75,85,99,0.2)] border-l-2 border-neutral-500 text-neutral-300">
                    <strong className="text-neutral-200">Visibilidad:</strong> {weatherData?.visibility ? Math.round(weatherData.visibility / 1000) : '--'} km
                </div>
                <div className="p-3 bg-neutral-900 rounded-xl shadow-[inset_4px_4px_8px_rgba(17,24,39,0.6),inset_-4px_-4px_8px_rgba(75,85,99,0.2)] border-l-2 border-neutral-500 text-neutral-300">
                    <strong className="text-neutral-200">Probabilidad de</strong> <em className="text-blue-400">Cumulonimbus:</em> {weatherData?.cloud_cover}%
                </div>
            </div>
        </div>
    );
}
