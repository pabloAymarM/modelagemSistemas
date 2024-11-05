const database = require('./database')//importando o arquivo
const departamento = require('./departamento')//importando a tabela departamento

//criando a tabela
const funcionario = database.sequelizeConfig.define(
    'funcionario', //nome da tabela
    {
        nome: {type: database.sequelizeDb.STRING},
        salario: {type: database.sequelizeDb.FLOAT},
        cargo: {type: database.sequelizeDb.STRING}
    }
) //não iremos criar o idFuncionario e a chave estrangeira, pois o Sequelize vai criar automaticamente.

//criando a chave estranegeira
departamento.hasMany(funcionario,{ //departamento pode ter muuitos funcionarios
    onDelete: 'CASCADE', //deleta em um, deleta em todos
    onUpdate: 'CASCADE' //atualiza em um, atualiza em todos
})

funcionario.belongsTo(departamento) //funcionario pertence a 1 departamento

funcionario.sync() //criar a tabela
module.exports = funcionario