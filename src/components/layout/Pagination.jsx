import React from 'react';

export const Pagination = ({
    currentPage,
    totalPages,
    hasNext,
    hasPrevious,
    onPageChange,
    loading = false
}) => {


    // Funciones de navegación
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages && !loading) {
            onPageChange(page);
        }
    };

    const goToNextPage = () => {
        if (hasNext && !loading) {
            onPageChange(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (hasPrevious && !loading) {
            onPageChange(currentPage - 1);
        }
    };

    // Generar números de página para mostrar
    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    // No mostrar paginación si no hay suficientes elementos
    if (totalPages <= 1) return null;

    return (
        <div className="flex flex-col items-center gap-4 mt-5 mb-5">

            {/* Controles de navegación */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

                {/* Botón Anterior */}
                <button
                    onClick={goToPreviousPage}
                    disabled={!hasPrevious || loading}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${hasPrevious && !loading
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    ← Anterior
                </button>

                {/* Números de página */}
                <div className="flex gap-2">
                    {/* Primera página si no está visible */}
                    {getPageNumbers()[0] > 1 && (
                        <>
                            <button
                                onClick={() => goToPage(1)}
                                disabled={loading}
                                className={`px-3 py-2 rounded-lg transition-all duration-200 ${loading
                                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                1
                            </button>
                            {getPageNumbers()[0] > 2 && (
                                <span className="px-3 py-2 text-gray-500">...</span>
                            )}
                        </>
                    )}

                    {/* Páginas visibles */}
                    {getPageNumbers().map(page => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            disabled={loading}
                            className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${page === currentPage
                                ? 'bg-blue-600 text-white'
                                : loading
                                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* Última página si no está visible */}
                    {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
                        <>
                            {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                                <span className="px-3 py-2 text-gray-500">...</span>
                            )}
                            <button
                                onClick={() => goToPage(totalPages)}
                                disabled={loading}
                                className={`px-3 py-2 rounded-lg transition-all duration-200 ${loading
                                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                {totalPages}
                            </button>
                        </>
                    )}
                </div>

                {/* Botón Siguiente */}
                <button
                    onClick={goToNextPage}
                    disabled={!hasNext || loading}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${hasNext && !loading
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Siguiente →
                </button>
            </div>
        </div>
    );
};
