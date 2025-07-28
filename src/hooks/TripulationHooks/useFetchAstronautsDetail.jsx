import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_ENDPOINTS } from '../../constants/api';

export const useFetchAstronautsDetail = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchAstronautsDetail = async () => {
            setLoading(true);

            const baseUrl = `${API_ENDPOINTS.TRIPULATION_DETAILS}`;
            const response = await fetch(baseUrl + id + "/");
            const result = await response.json();

            setData(result);
            setLoading(false);
        };

        fetchAstronautsDetail();
    }, [id]);

    return { data, loading }
}
