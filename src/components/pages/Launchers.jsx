import React from 'react';
import { useFetchLaunchers } from '../../hooks/LaunchersHooks/useFetchLaunchers';
import { LoadingSpinner } from '../layout/UI/LoadingSpinner';
import { Button } from '../layout/UI/Button';

export const Launchers = () => {

    const { data, loading } = useFetchLaunchers();

    return (
        <section className="text-white bg-neutral-900">
            {loading && <LoadingSpinner />}
            {!loading && data && (
                <>
                    {data.map(launcher => (
                        <div
                            key={launcher.id}
                            className="bg-cover bg-center bg-no-repeat h-dvh w-full overflow-hidden relative"
                            style={{ backgroundImage: `url(${launcher.image.image_url})` }}
                        >
                            <div className="relative h-full flex flex-col justify-center 
                                           px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
                                           pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-40 2xl:pt-48">
                                <div className="max-w-7xl w-full">
                                    <h1
                                        className="font-['Azonix'] font-extrabold mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-4 2xl:mb-6
                                                  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                                                  max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl
                                                  leading-tight"
                                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}
                                    >
                                        {launcher.name}
                                    </h1>
                                    <Button
                                        text={"Ver especificaciones técnicas"}
                                        href={`/launcherDetail/${launcher.id}`}
                                        className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 
                                                  uppercase text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </section>
    )
}