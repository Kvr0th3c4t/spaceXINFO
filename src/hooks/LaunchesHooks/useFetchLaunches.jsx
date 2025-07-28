import { useCallback } from 'react';
import { API_ENDPOINTS, API_CONFIG } from '../../constants/api';

export const useFetchLaunches = (filters) => {

    const fetchLaunches = useCallback(async (page, limit) => {
        try {

            const offset = (page - 1) * limit;
            let baseUrl = `${API_ENDPOINTS.LAUNCHES_BASE}${API_CONFIG.DEFAULT_PARAMS}&limit=${limit}&offset=${offset}`;

            if (filters.status) {
                baseUrl += `&status=${filters.status}`;
            }

            if (filters.launcher) {
                baseUrl += `&launcher_config__id=${filters.launcher}`;
            }

            if (filters.orbit) {
                baseUrl += `&mission__orbit__name=${filters.orbit}`;
            }

            if (filters.pad) {
                baseUrl += `&pad__ids=${filters.pad}`;
            }


            const response = await fetch(baseUrl);
            const data = await response.json();

            return data;

        } catch (error) {
            console.error('Error en fetchLaunches:', error);
            return {
                count: 0,
                next: null,
                previous: null,
                results: []
            };
        }
    }, [filters]);

    return { fetchLaunches };
};