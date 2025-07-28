import React, { useState, useEffect } from 'react'
import { API_ENDPOINTS } from '../../constants/api'

export const useFetchLaunchers = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchlaunchers = async () => {
            try {
                const baseUrl = `${ API_ENDPOINTS.LAUNCHERS_BASE }`;

                const response = await fetch(baseUrl);
                const result = await response.json();

                setData(result.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchlaunchers();
    }, [])

    return { data, loading }
}
