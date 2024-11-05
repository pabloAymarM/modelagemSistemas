//carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const porta = 5000

//configurar express para receber dados do formulário
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//carregando rotas
const funcionarioRouter = require('./routes/funcionario')

//utilizando rotas
app.use('/funcionario', funcionarioRouter)

app.get('/', function(){
    res.send('<h1>Tudo Funcionando!</h1>')
})

//executando o servidor
app.listen(porta, function(){
    console.log('Servidor executado na porta:', porta)
})