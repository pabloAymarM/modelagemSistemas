const express = require('express')
const router = express.Router() //módulo para trabalhar com rotas

const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')

//criando rotas
//1 - inserir dados na tabela
router.post('/store', async function(req, res){ //o sequelize recebe o conteúdo assíncrono
    const resultado = await funcionario.create({//esperar até a função dar resultado
        nome: 'José Baltazar',
        salario: 3000,
        cargo: 'Zelador',
        departamentoId:1 //chave estrangeira
    })  
})

//2 - exibir página raíz de funcionario
router.get('/', function(req, res){
    res.send('<h1>Página Inicial de Funcionário</h1>')
})

//3 - consultar Db
router.get('/show', async function(req, res){
    let resultado = await funcionario.findAll()
    if(resultado){
        console.log(resultado)
    }
    else{
        console.log('Não foi possível exibir os dados.')
    }
})

module.exports = router

