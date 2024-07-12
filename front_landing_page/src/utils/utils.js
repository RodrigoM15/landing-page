export function convertirFecha(ddMMyyyy) {
    if (!/^\d{8}$/.test(ddMMyyyy)) {
        throw new Error('La fecha debe estar en el formato ddMMyyyy');
    }

    const dia = ddMMyyyy.substring(0, 2);
    const mes = parseInt(ddMMyyyy.substring(2, 4), 10);
    const anio = ddMMyyyy.substring(4, 8);

    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    if (mes < 1 || mes > 12) {
        throw new Error('El mes debe estar entre 01 y 12');
    }

    const nombreMes = meses[mes - 1];

    return `${dia} de ${nombreMes} ${anio}`;
}

export function convertirBytesAUrl(base64String) {
    return `data:image/jpeg;base64,${base64String}`;
}