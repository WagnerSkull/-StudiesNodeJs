// Sempre que for enviar pro GITHub, apagar node_modules, após 
//Pra não subir a node_modules, criar o arquivo(.gitignore), coloca o nome do arquivo que não e pra subir e salva,(node_modules)
//só instalar novamente usando os comando npm i, isso ira instalar os que foi apagado.
//Pra iniciar o node , node index.js 
//Iniciar servidor (npm run dev)

//GET  => Buscar informação no back-end
//POST => Criar informação no back-end
//PUT / PATCH => Alterar/Atualizar informação no back-end
//DELETE => Deletar informação no back-end

//QUERY params => meusite.com/users?nome=rodolfo&age=28 // FILTROS DE PESQUISA 
//ROUTE params => /users/2 // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÌFICO
//REQUEST BODY => {'name': 'Rodolfo', 'age':}

//MIDDLEWARES => INTERCEPTADOR => Tem o poder de parar ou alterar dados da requisição.


//Ativando o express
const { request } = require("express")
const express = require("express")

//Foi instalado a biblioteca UUID, como instalar (npm install uuid), Usando a tipo V4.
//Variavel para salvar a biblioteca UUID
const uuid = require("uuid")

//Constante da porta pra quando alterar ficar a programada
const port = 3000

//na const do express e usado nome server ou app.
const app = express()

//Falando pro express que vamos usar como padrão o express. 
app.use(express.json())

//Nesse projeto guardamos em uma variavel mais nunca guardar em variavel por que se reiniciar o servidor node perdermos todos dados.
const users = []

//Criando MIDDLEWARES => INTERCEPTADOR => Tem o poder de parar ou alterar dados da requisição.
const checkUserId = (request, response, next) => {

    //Vamos usar o route params, busca o id e ver se existe.
    const { id } = request.params

    //Ele vai procurar o id pra ver se existe
    const index = users.findIndex(user => user.id === id)

    //Mensagem caso não encontre o usuário pelo ID
    if (index < 0) {
        return response.status(404).json({ ERROR: 'User not found' })
    }

    //Se existir vai pega a informação e adicionar uma informação no REQUEST
    request.userIndex = index

    request.userId = id

    next()
}

//Criando rota do express, Request requisitando, reponse respondendo.
//Meu app GET mostra todos meus usuarios (USERS)
app.get('/users', (request, response) => {


    return response.json(users)
})

//Criando rota POST
//Mostra os USERS
app.post('/users', (request, response) => {
    const { name, age } = request.body

    //objeto
    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return response.status(201).json(user)
})

//Pra alterar/atualizar o back-end dados já salvos.
app.put('/users/:id', checkUserId, (request, response) => {

    //Pegando as informações novas do usuário.
    const { name, age } = request.body

    //Se existir o ID vai pega a informação e adicionar uma informação no REQUEST
    const index = request.userIndex

    //Achando o ID
    const id = request.userId

    //Montando o usuário
    const updatedUser = { id, name, age }


    //Pra fazer a atualização
    users[index] = updatedUser
    return response.json(updatedUser)
})

//Pra deletar usuário
app.delete('/users/:id', checkUserId, (request, response) => {

    //Se existir o ID vai pega a informação e adicionar uma informação no REQUEST
    const index = request.userIndex

    //pra encontrar o usuário pelo id, e quantos usuário vai apagar
    users.splice(index, 1)

    return response.status(204).json()
})



//Nós podemos escolher o número da porta, Porem não são qualquer número, do numero 80 pra cima. 
//Alguns números já são usado por alguns bancos de dados, e instalando ele já vem com uma porta especifica do computador
//Função Expresse PORTA- Ela aceita o segundo paramentro pra quando servidor começar a rodar, da pra dicionar função. tipo mensagem
app.listen(port, () => {
    console.log(`GOGO=> Server starded on port ${port}`)
})


