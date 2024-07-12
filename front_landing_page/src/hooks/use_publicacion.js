import { useState, useEffect } from 'react';
import { getPublicaciones } from '../services/publicacion_service';

const usePublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPublicaciones = async () => {
            try {
                const data = await getPublicaciones();
                setPublicaciones(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPublicaciones();
    }, []);

    return { publicaciones };
};

export default usePublicaciones;
