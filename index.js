const express = require('express');
const app = express();

//ROTA
  //METHOD HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
    //GET - Pega uma info
    //POST - Cria uma info
    //PUT - Altera toda info
    //PATH - Altera parte da info
    //DELETE - Apaga uma info

  //NAME - Um identificador da rota
    //
  //Function (callback) - Responsavel por executar algum comando

app.get('/', (req, res)  => {
  const soma = 100 + 1;

  res.send({soma: soma})
});

app.listen(3000);