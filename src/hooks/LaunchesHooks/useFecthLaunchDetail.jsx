import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_ENDPOINTS } from '../../constants/api';

export const useFecthLaunchDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLaunchDetail = async () => {
            try {
                const baseUrl = `${API_ENDPOINTS.LAUNCH_DETAILS}`

                const response = await fetch(baseUrl + id + "/");
                const data = await response.json();

                setData(data);

            } catch (error) {
                console.error("Error tipo " + error)
            } finally {
                setLoading(false)
            }
        };
        fetchLaunchDetail();
    }, [id]);

    return { data, loading }
}
