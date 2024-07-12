import { BASE_URL } from "../config/const";
import axios from 'axios';

export const getEventos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/eventos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching eventos:', error);
        throw error;
    }
};
