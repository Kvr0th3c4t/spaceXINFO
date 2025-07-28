import React from 'react'
import { useFetchAstronauts } from '../../hooks/TripulationHooks/useFetchAstronauts'
import { LoadingSpinner } from '../layout/UI/LoadingSpinner';
import { Button } from '../layout/UI/Button';
import { Pagination } from '../layout/Pagination';
import { usePagination } from '../../hooks/LaunchesHooks/usePagination';
import { useAstronautsStatusColor } from '../../hooks/TripulationHooks/useAstronautsStatusColor';

export const Tripulation = () => {

  const { fetchAstronauts } = useFetchAstronauts();
  const { getAstronautsStatusColor } = useAstronautsStatusColor();

  const {
    data: astronauts,
    loading,
    currentPage,
    totalPages,
    totalCount,
    hasNext,
    hasPrevious,
    itemsPerPage,
    handlePageChange
  } = usePagination(fetchAstronauts, 6);

  return (
    <section className='bg-neutral-900 min-h-screen
                       p-4 sm:p-6 md:p-8 lg:p-10 xl:p-10 2xl:p-14'>
      {loading && <LoadingSpinner />}
      {!loading && astronauts && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 
                       gap-3 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-8">
          {astronauts.map(astronaut => (
            <div key={astronaut.id}
              className="max-w-sm w-full lg:max-w-full flex bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg shadow-lg overflow-hidden hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300">

              {/* Imagen del Astronauta - Siempre a la izquierda */}
              <div
                className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 
                          h-full
                          flex-none bg-cover bg-center rounded-l"
                style={{
                  backgroundImage: `url(${astronaut.image?.image_url || "https://placehold.co/300x300?text=No+Profile+Picture+Found"})`
                }}
                title={`${astronaut.name} - Astronaut`}
              />

              {/* Contenido */}
              <div className="border-r border-b border-t border-gray-600 bg-gray-800/50 backdrop-blur rounded-r 
                             p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-6
                             flex flex-col justify-between leading-normal w-full min-h-0">

                <div className="mb-2 sm:mb-3 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
                  <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 
                                 justify-between items-start'>
                    <div className="text-white font-bold font-['Azonix'] 
                                  mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3
                                  text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl
                                  leading-tight">
                      {astronaut.name}
                    </div>

                    <p className="flex items-center 
                                 mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3
                                 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-xs 2xl:text-sm text-gray-300
                                 flex-shrink-0 ml-0 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-3">
                      <span className={`px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-1 lg:px-2 lg:py-1 xl:px-2 xl:py-1 2xl:px-3 2xl:py-1 
                                       rounded font-medium
                                       text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs
                                       ${getAstronautsStatusColor(astronaut.status?.name)}`}>
                        {astronaut.status?.name || 'Unknown'}
                      </span>
                    </p>
                  </div>

                  {/* Estadísticas */}
                  <div className="mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-4 2xl:mt-5 
                                 flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-3">
                    <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded
                                   px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-1 lg:px-2 lg:py-1 xl:px-2 xl:py-1 2xl:px-3 2xl:py-1
                                   text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs">
                      {astronaut.flights_count} vuelos
                    </span>
                    {astronaut.spacewalks_count > 0 && (
                      <span className="bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded
                                     px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-1 lg:px-2 lg:py-1 xl:px-2 xl:py-1 2xl:px-3 2xl:py-1
                                     text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs">
                        {astronaut.spacewalks_count} caminatas
                      </span>
                    )}
                  </div>
                </div>

                {/* Info de agencia y nacionalidad - Layout siempre vertical en móvil */}
                <div className="flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-3">

                  <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row
                                 justify-between gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-3">
                    <div className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-xs 2xl:text-sm">
                      <p className="text-white leading-none font-semibold
                                   mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1">
                        {astronaut.agency?.abbrev || 'Unknown'}
                      </p>
                      <p className="text-gray-400
                                   text-xs sm:text-xs md:text-sm lg:text-sm xl:text-xs 2xl:text-xs">
                        {astronaut.nationality?.[0]?.nationality_name || 'Unknown'}
                      </p>
                    </div>

                    {/* Último vuelo */}
                    <div className="text-left sm:text-right md:text-right lg:text-right xl:text-right 2xl:text-right
                                   text-xs sm:text-sm md:text-sm lg:text-sm xl:text-xs 2xl:text-sm">
                      <p className="text-white
                                   mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1">Último vuelo:</p>
                      <p className="text-gray-400
                                   text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs">
                        {astronaut.last_flight ? new Date(astronaut.last_flight).toLocaleDateString() : 'Never'}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center sm:justify-end md:justify-end lg:justify-end xl:justify-end 2xl:justify-end">
                    <Button
                      text={"Ver detalle"}
                      href={`/astronautDetail/${astronaut.id}`}
                      className="px-2 sm:px-3 md:px-4 lg:px-4 xl:px-4 2xl:px-6
                                text-xs sm:text-xs md:text-sm lg:text-sm xl:text-xs 2xl:text-sm
                                w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-10 2xl:mt-12">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalCount={totalCount}
          itemsPerPage={itemsPerPage}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          onPageChange={handlePageChange}
          loading={loading}
        />
      </div>
    </section>
  )
}