import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_ENDPOINTS } from '../../constants/api';

export const useFetchShipsDetail = () => {
    const { name } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchShipsDetail = async () => {
            setLoading(true);

            const baseUrl = `${API_ENDPOINTS.SHIPS_DETAILS}`;
            const response = await fetch(baseUrl + encodeURIComponent(name));
            const result = await response.json();

            setData(result.results);
            setLoading(false);
        };

        fetchShipsDetail();
    }, [name]);

    return { data, loading }
}