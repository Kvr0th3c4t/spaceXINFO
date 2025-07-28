import React from "react";
import { Pagination } from "../layout/Pagination";
import { usePagination } from "../../hooks/LaunchesHooks/usePagination";
import { useLaunchFilters } from "../../hooks/LaunchesHooks/useLaunchFilters";
import { LoadingSpinner } from "../layout/UI/LoadingSpinner";
import { LaunchCard } from "../layout/Launches/LaunchCard";
import { useFetchLaunches } from "../../hooks/LaunchesHooks/useFetchLaunches";
import { LaunchFilterToggle } from "../layout/Launches/LaunchFilterToggle";
import { useLaunchFilterData } from "../../hooks/LaunchesHooks/useLaunchFilterData";

export const Launches = () => {

  {/* Petición para usar los filtros predeterminados de la API como estados */ }
  const { statusData, launcherData, orbitData, padData } = useLaunchFilterData();

  {/* Configuración de los filtros de la página y estado del toggle */ }
  const {
    toggleFilterMenu,
    filters,
    handleApplyFilter,
    showFilters
  } = useLaunchFilters();

  {/* Función personalizada para fetch de lanzamientos con filtros aplicados */ }
  const { fetchLaunches } = useFetchLaunches(filters);

  {/* Hook de paginación que maneja el estado de la página y los datos */ }
  const {
    data: launches,
    loading,
    currentPage,
    totalPages,
    totalCount,
    hasNext,
    hasPrevious,
    itemsPerPage,
    handlePageChange
  } = usePagination(fetchLaunches, 6, [filters]);

  return (
    <section className="bg-neutral-900 min-h-screen font-['Oxanium']">

      <div className="p-10">
        {/* COMPONENTE DE FILTROS CON ANIMACIÓN */}
        <LaunchFilterToggle
          showFilters={showFilters}
          toggleFilterMenu={toggleFilterMenu}
          statusData={statusData}
          launcherData={launcherData}
          orbitData={orbitData}
          padData={padData}
          handleApplyFilter={handleApplyFilter}
        />

        {/* ESTADO DE CARGA */}
        {loading && <LoadingSpinner />}

        {/* GRID DE LANZAMIENTOS */}
        {!loading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 max-w-8xl mx-auto">
            {launches.map(launch => (
              <LaunchCard key={launch.id} launch={launch} />
            ))}
          </div>
        )}

        {/* COMPONENTE DE PAGINACIÓN */}
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
    </section >
  );
};