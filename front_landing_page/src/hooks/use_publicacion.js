import { useState, useEffect } from 'react';
import { getPublicaciones } from '../services/publicacion_service';
import { convertirBytesAUrl } from '../utils/utils';

const usePublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPublicaciones = async () => {
            try {
                const data = await getPublicaciones();

                // Convierte cada publicación
                const publicacionesConFechaFormateada = data.map(pub => {
                    // Convierte el timestamp en un objeto Date
                    const date = new Date(pub.fecha);

                    // Extrae día, mes y año
                    const day = String(date.getDate()).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const year = date.getFullYear();

                    // Formatea la fecha en ddMMyyyy
                    const fechaFormateada = `${day}${month}${year}`;

                    // Convierte la imagen de bytes a URL
                    const imagenUrl = convertirBytesAUrl(pub.imagen);

                    return { ...pub, fecha: fechaFormateada, imagen: imagenUrl};
                });

                setPublicaciones(publicacionesConFechaFormateada);
                console.log(publicacionesConFechaFormateada)
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
