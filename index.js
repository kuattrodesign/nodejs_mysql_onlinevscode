const connection = require('./db');

connection.query('SELECT 1 + 1 AS solution', (err, results, fields) => {
  if (err) {
    console.error('Erro ao executar a query:', err);
    return;
  }
  console.log('A solução é:', results[0].solution);
});

