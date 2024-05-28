const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'serveo.net',
  user: 'root',
  password: 'root',
  database: '4d_mutualclinic',
  port: 3307 // Porta que você configurou no túnel SSH
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL com sucesso!');
});

module.exports = connection;

