const {sequelizeDb, sequelizeConfig} = require('./database') //desmembrano o objeto para importar os módulos

const departmamento = sequelizeConfig.define(
    'departamento',
    {
        nome: {type: sequelizeDb.STRING},
        descricao: {type: sequelizeDb.TEXT}
    }
)

departmamento.sync()
module.exports = departmamento