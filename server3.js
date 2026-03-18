const express = require("express");
const app = express();

const filmes = [
  { id: 1, titulo: "A Origem", ano: 2010, nota: 10 },
  { id: 2, titulo: "A Familia do Futuro", ano: 2007, nota: 9 },
  { id: 3, titulo: "Homem-Aranha", ano: 2002, nota: 8 },
  { id: 4, titulo: "Interestelar", ano: 2014, nota: 10 },
  { id: 5, titulo: "Click", ano: 2006, nota: 9 }
];

app.get("/filmes", (req, res) => {
  res.json(filmes);
});


app.get("/filmes/:id", (req, res) => {
  const filme = filmes.find(f => f.id == req.params.id);
  res.json(filme);
});


app.get("/bem-avaliados", (req, res) => {
  const resultado = filmes.filter(f => f.nota >= 9);
  res.json(resultado);
});


app.get("/media", (req, res) => {
  const soma = filmes.reduce((acc, f) => acc + f.nota, 0);
  const media = soma / filmes.length;
  res.json({ media });
});


app.get("/filmes/ano/:ano", (req, res) => {
  const resultado = filmes.filter(f => f.ano == req.params.ano);
  res.json(resultado);
});

app.listen(3000, () => {
  console.log("Servidor filmes rodando na porta 3002");
});


const PORTA = 3002

app.listen(PORTA, () =>{
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
    
});
 