import React from 'react'
import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../constants/api';

export const useFetchShips = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShips = async () => {
            try {
                const baseUrl = `${API_ENDPOINTS.SHIPS_BASE}`;

                const response = await fetch(baseUrl);
                const result = await response.json();

                setData(result.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchShips();
    }, [])

    return { data, loading }
}