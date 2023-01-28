// Sempre que for enviar pro GITHub, apagar node_modules, após 
//só instalar novamente usando os comando npm i, isso ira instalar os que foi apagado.
//Pra iniciar o node , node index.js 

//GET  => Buscar informação no back-end
//POST => Criar informação no back-end
//PUT / PATCH => Alterar/Atualizar informação no back-end
//DELETE => Deletar informação no back-end


//Ativando o express
const express = require("express")

//Variavel para salvar a biblioteca UUID
const uuid = require("uuid")

//Constante da porta pra quando alterar ficar a programada
const port = 3000

//na const do express e usado nome server ou app.
const app = express()

//Falando pro express que vamos usar como padrão o express. 
app.use(express.json())

//QUERY params => meusite.com/users?nome=rodolfo&age=28 // FILTROS DE PESQUISA 
//ROUTE params => /users/2 // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÌFICO
//REQUEST BODY => {'name': 'Rodolfo', 'age':}

const users = []



//Criando rota do express, Request requisitando, reponse respondendo.
app.get('/users', (request, response) => {

    return response.json(users)
})


//Criando rota POST
app.post('/users', (request, response) => {
    const { name, age } = request.body

     //objeto
    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return response.status(201).json(user)

})


//Nós podemos escolher o número da porta, Porem não são qualquer número, do numero 80 pra cima. 
//Alguns números já são usado por alguns bancos de dados, e instalando ele já vem com uma porta especifica do computador
//Função Expresse PORTA- Ela aceita o segundo paramentro pra quando servidor começar a rodar, da pra dicionar função. tipo mensagem
app.listen(port, () => {
    console.log("GOGO Server starded on port ${port}")
})


