import { useState, useEffect } from 'react';
import { getEventos } from '../services/evento_service';
import { convertirBytesAUrl } from '../utils/utils';

const useEventos = () => {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos();

                // Convierte cada evento
                const eventosConFechaFormateada = data.map(evento => {
                    // Convierte el timestamp en un objeto Date
                    const date = new Date(evento.fecha);

                    // Extrae día, mes y año
                    const day = String(date.getDate()).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const year = date.getFullYear();

                    // Formatea la fecha en ddMMyyyy
                    const fechaFormateada = `${day}${month}${year}`;

                    // Convierte la imagen de bytes a URL
                    const imagenUrl = convertirBytesAUrl(evento.imagen);

                    return { ...evento, fecha: fechaFormateada, imagen: imagenUrl};
                });

                setEventos(eventosConFechaFormateada);
                console.log(eventosConFechaFormateada)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
                
            }
        };

        fetchEventos();
    }, []);

    return { eventos};
};

export default useEventos;
