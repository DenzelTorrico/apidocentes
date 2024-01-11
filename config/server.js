const mysql = require('mysql');

// Crear la conexión
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'bdcolegio'
});

// Conectar a la base de datos
con.connect(function(err) {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida');
});

// Exportar la conexión
module.exports = con