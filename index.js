const connection = require('./db');

connection.query('SELECT * from reports', (err, results, fields) => {
  if (err) {
    console.error('Erro ao executar a query:', err);
    return;
  }
  console.log('A solução é:', results[0].solution);
  console.table(results);
  console.log('obrigado');
  // Encerrar a conexão
  connection.end(); 
  
  

});

