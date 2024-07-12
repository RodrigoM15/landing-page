import { useState, useEffect } from 'react';
import { getEventos } from '../services/evento_service';

const useEventos = () => {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos();
                setEventos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
                console.log(data)
            }
        };

        fetchEventos();
    }, []);

    return { eventos};
};

export default useEventos;
