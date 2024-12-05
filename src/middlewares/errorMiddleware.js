const errorMiddleware = (err, req, res, next) => {
    // Debugging
    console.log('Error middleware working!');
    console.error({ message: err.message, code: err.code, stack: err.stack });

    // Use PostgreSQL and custom error codes and map them to appropiate status and message
    const errorMap = {
        '22P02': { status: 400, message: 'Sintaxis de datos inválida' },
        '23502': { status: 400, message: 'Campo requerido no proporcionado' },
        '22001': {
            status: 400,
            message: 'Campo excede máxima longitud permitida',
        },
        'NOT_FOUND': { status: 404, message: 'No se encontró el post' },
    };
    const currentError = errorMap[err.code];

    // Send generic error message if no error matches map
    if (!currentError) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }

    res.status(currentError.status).send(currentError.message);
};

module.exports = errorMiddleware;
