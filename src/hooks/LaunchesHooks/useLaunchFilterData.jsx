import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../constants/api';

export const useLaunchFilterData = () => {
    const [statusData, setStatusData] = useState([]);
    const [launcherData, setLauncherData] = useState([]);
    const [orbitData, setOrbitData] = useState([]);
    const [padData, setPadData] = useState([]);


    useEffect(() => {
        const fetchAllFilterData = async () => {
            const response = await fetch(API_ENDPOINTS.LAUNCHES_FILTER_DATA);
            const data = await response.json();


            const orbitMap = new Map();
            data.results.forEach(item => {
                if (item.mission?.orbit?.name && item.mission?.orbit?.id) {
                    orbitMap.set(item.mission.orbit.name, {
                        id: item.mission.orbit.id,
                        name: item.mission.orbit.name
                    });
                }
            });

            const padMap = new Map();
            data.results.forEach(item => {
                if (item.pad?.name && item.pad?.id) {
                    padMap.set(item.pad.name, {
                        id: item.pad.id,
                        name: item.pad.name
                    });
                }
            });

            setOrbitData(Array.from(orbitMap.values()));
            setPadData(Array.from(padMap.values()));
        };

        fetchAllFilterData();
    }, []);

    useEffect(() => {
        const launcherData = async () => {
            const response = await fetch(API_ENDPOINTS.LAUNCHER_CONFIG);
            const data = await response.json();

            setLauncherData(data.results.map(item => ({
                id: item.id,
                name: item.full_name
            })))
        }
        launcherData()
    }, []);

    useEffect(() => {
        const statusData = async () => {
            const response = await fetch(API_ENDPOINTS.LAUNCH_STATUS);
            const data = await response.json();

            setStatusData(data.results.map(item => ({
                id: item.id,
                name: item.name,
                abbrev: item.abbrev,
                description: item.description
            })))
        }
        statusData();

    }, []);

    return {
        statusData,
        launcherData,
        orbitData,
        padData
    };
};