const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema');
});
app.get('/sobre', (req, res) => {
  res.send('Oifofinho');
});
app.get('/contato',(req, res) => {
  res.json({
    "email": "contato@email.com",
  "telefone": "(81) 99999-9999"
  })
});
  app.get('/erro', (req, res) => {
  res.status(404).send('Página não encontrada');
});
app.get('/inicio', (req,res) => {
  res.redirect('/')
})
app.get('/usuarios/:id', (req,res) => {
  console.log(req.params.id); 
  res.send('usuario encontrado');
});
app.get('/produtos/:nome', (req,res) => {
  console.log(req.params.nome)
  res.send(req.params.nome)
})
app.get('/filmes/:id/:nome', (req,res) => {
  console.log(req.params.id)
  console.log(req.params.nome)
  res.send(req.params.id + ' '  + req.params.nome )
})
app.get('/buscar', (req, res) => {
  console.log(req.query.nome); //games
  
})


app.listen(
    3000, 
    () => console.log(`Servidor em execuçao`)
);