const express = require("express");
//cria a aplicação
const app = express();
//rota get principal

app.get("/",(req,res)=>{
    res.send("Servidor da Turma de LP3 ON");
});


app.get("/aluno",(req,res)=>{
    res.send("Rota de aluno funcionando");
});

const PORTA = 3000

app.listen(PORTA, () =>{
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
    
});
 
