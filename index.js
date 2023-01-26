// Sempre que for enviar pro GITHub, apagar node_modules, após 
//só instalar novamente usando os comando npm i, isso ira instalar os que foi apagado.
//Pra iniciar o node , node index.js 

//Ativando o express
const express = require('express')

//Constante da porta pra quando alterar ficar a programada
const port = 3000

//na const do express e usado nome server ou app.
const app = express()


//QUERY params => meusite.com/users?nome=rodolfo&age=28 // FILTROS DE PESQUISA 
//ROUTE params => /users/2 // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÌFICO




//Criando rota do express, Request requisitando, reponse respondendo.
app.get('/users', (request, response) => {
   
//Também conseguiria diminuir meu codigo nas constante, (const {name, age } = request.query), ele vai procura dentro da request se ele achar já cria automtico as variavel
    const name = request.query.name
    const age = request.query.age

    console.log(name,age)

    //Respondendo com o json, criando um objeto pegando as variaveis acima. 
    //Se a chave da constante for o mesmo do valor da pra econmiza codigo ficaria (return response.json({name, age})),iria ficar assim.
    return response.json({name: name, age: age})

})



//Nós podemos escolher o número da porta, Porem não são qualquer número, do numero 80 pra cima. 
//Alguns números já são usado por alguns bancos de dados, e instalando ele já vem com uma porta especifica do computador
//Função Expresse PORTA- Ela aceita o segundo paramentro pra quando servidor começar a rodar, da pra dicionar função. tipo mensagem
app.listen(port, () => {
    console.log(`🚀Server starded on port ${port}`)
})
