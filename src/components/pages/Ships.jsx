import React from 'react'
import { Button } from '../layout/UI/Button'
import { LoadingSpinner } from '../layout/UI/LoadingSpinner';
import { useFetchShips } from '../../hooks/ShipsHooks/useFetchShips';

export const Ships = () => {
  const { data, loading } = useFetchShips();

  return (
    <section className="text-white bg-neutral-900">
      {loading && <LoadingSpinner />}
      {!loading && data && (
        <>
          {data.map(spacecraft => (
            <div
              key={spacecraft.id}
              className="relative h-dvh w-full overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat
                          sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover 2xl:bg-cover"
                style={{
                  backgroundImage: `url(${spacecraft.image.image_url})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover'
                }}
              >
                {/* Overlay gradiente para mejor legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30
                               sm:from-black/60 sm:via-black/40 sm:to-black/20
                               md:from-black/70 md:via-black/50 md:to-black/30
                               lg:from-black/80 lg:via-black/60 lg:to-black/40"></div>
              </div>

              {/* Contenido */}
              <div className="relative z-10 h-full flex flex-col justify-center 
                             px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
                             pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-40 2xl:pt-48">
                <div className="max-w-7xl w-full">
                  <h1
                    className="font-['Azonix'] font-extrabold mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-4 2xl:mb-6
                              text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                              max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl
                              leading-tight text-white"
                    style={{
                      textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
                    }}
                  >
                    {spacecraft.name}
                  </h1>
                  <Button
                    text={"Ver especificaciones técnicas"}
                    href={`/shipDetail/${spacecraft.name}`}
                    className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 
                              uppercase text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-lg
                              shadow-xl border border-white/20 backdrop-blur-sm"
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