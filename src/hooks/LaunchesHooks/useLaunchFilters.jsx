import { useState } from 'react';

export const useLaunchFilters = () => {
    const [toggleFilterMenu, setToggleFilterMenu] = useState(false);

    const [filters, setFilters] = useState({
        status: '',
        launcher: '',
        orbit: '',
        pad: ''
    });

    const handleApplyFilter = (newFilters) => {
        setFilters(newFilters);
    };

    const showFilters = () => {
        setToggleFilterMenu(!toggleFilterMenu);
    };

    return {
        toggleFilterMenu,
        filters,
        setFilters,
        handleApplyFilter,
        showFilters
    };
};