import { API_ENDPOINTS } from "../../constants/api";

export const useFetchAstronauts = () => {

    const fetchAstronauts = async (page, limit) => {
        const offset = (page - 1) * limit;
        const baseUrl = `${API_ENDPOINTS.TRIPULATION_BASE}&limit=${limit}&offset=${offset}`;

        try {
            const response = await fetch(baseUrl);
            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error fetching astronauts: " + error);
            throw error;
        }
    };

    return { fetchAstronauts };
};