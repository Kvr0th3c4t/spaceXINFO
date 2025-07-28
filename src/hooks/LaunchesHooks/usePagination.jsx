import { useState, useEffect, useRef } from 'react';

export const usePagination = (fetchFunction, itemsPerPage, dependencies = []) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);

    const isFilterChange = useRef(false);

    const totalPages = Math.ceil(totalCount / itemsPerPage);

    const fetchData = async (page) => {
        setLoading(true);

        try {
            const result = await fetchFunction(page, itemsPerPage);

            setData(result.results);
            setTotalCount(result.count);
            setHasNext(result.next !== null);
            setHasPrevious(result.previous !== null);

        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        isFilterChange.current = true;
        setCurrentPage(1);
    }, dependencies);

    useEffect(() => {
        if (isFilterChange.current) {
            isFilterChange.current = false;
            fetchData(1);
        } else {
            fetchData(currentPage);
        }
    }, [currentPage, ...dependencies]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return {
        data,
        loading,
        currentPage,
        totalPages,
        totalCount,
        hasNext,
        hasPrevious,
        itemsPerPage,
        handlePageChange
    };
};