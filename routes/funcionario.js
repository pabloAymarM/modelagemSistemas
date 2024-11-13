const express = require('express')
const router = express.Router() //módulo para trabalhar com rotas

const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')
const { where } = require('sequelize')

//criando rotas
//1 - inserir dados na tabela
router.post('/store', async function(req, res){ //o sequelize recebe o conteúdo assíncrono
    const resultado = await funcionario.create({//esperar até a função dar resultado
        nome: req.body.nome,
        salario: req.body.salario,
        cargo: req.body.cargo,
        departamentoId: req.body.departamento //chave estrangeira
    })
    //console.log(req.body)  
    if (resultado){
        res.redirect('/')
    }else{
        res.json({erro:'Erro.'})
    }
})

//2 - exibir página raíz de funcionario
router.get('/show', function(req, res){
    res.render('funcionario/index')
})

//3 - consultar Db
router.get('/', async function(req, res){
    let resultado = await funcionario.findAll({include:departmamento}) //o include é como o sequelize faz para realizar consultas com join
    if(resultado){
        console.log(resultado)
        res.render('funcionario/index',{dados:resultado})
    }
    else{
        console.log('Não foi possível exibir os dados.')
    }
})

//4- deletar Db
// :id iremos passar um valor na rota
router.get('/destroy/:id', async function(req, res){
    const resultado = await funcionario.destroy({
        where:{
            id:req.params.id //recebendo o id via parâmetro que está na rota
        }
    })
    res.redirect('/funcionario')
})

//5 - exibir formulário de cadastro
router.get('/create', async function(req, res){
    let resultado = await departamento.findAll()
    if(resultado){
        console.log(resultado)
        res.render('funcionario/addFuncionario', {dados:resultado})
    }else{
        console.log('Não foi possível carregar nenhum dado.')
        res.redirect('/') //redirecionando para a página inicial
    }
    res.render('funcionario/addFuncionario')
})

module.exports = router