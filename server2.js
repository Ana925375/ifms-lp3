const express = require("express");

const app = express();

app.use((req,res, next)=>{
    console.log("Acesso:" , req.method , req.url);
    next();
})

app.get("/", (req, res) => {
    res.send(`
        <h1>Menu</h1>
        <a href="/aluno/Ana">Ir para aluno</a><br>
        <a href="/status">Ir para status</a><br>
        <a href="/subtracao">Ir para subtracao</a><br>
        <a href="/multiplicacao">Ir para multiplicacao</a><br>
    `);
});


app.get("/aluno",(req,res)=>{
    res.send("Bem-Vindo!");
});

app.get("/aluno/:nome",(req,res)=>{
    const nome = req.params.nome;
    res.send(`Ola,${nome}!`);
});

//soma
app.get("/soma/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a + b;

    res.send(`Resultado: ${resultado}!`);
});
//status
app.get("/status", (req, res) => {
    res.json({
        servidor: "online",
        disciplina: "LP3",
        professora: "Ana",
        hora: new Date().toLocaleString()
    });
});

//subtração
app.get("/subtracao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a - b;

    res.send(`Resultado: ${resultado}!`);
});

//multiplicação
app.get("/multiplicacao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a * b;

    res.send(`Resultado: ${resultado}!`);
});


const PORTA = 3001

app.listen(PORTA, () =>{
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
    
});
 
