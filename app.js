//carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const porta = 5000

app.get('/', function(){
    res.send('<h1>Tudo Funcionando!</h1>')
})

//executando o servidor
app.listen(porta, function(){
    console.log('Servidor executado na porta:', porta)
})