import { BASE_URL } from "../config/const";
import axios from 'axios';

export const getPublicaciones = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/publicaciones`);
        return response.data;
    } catch (error) {
        console.error('Error fetching publicaciones:', error);
        throw error;
    }
};
