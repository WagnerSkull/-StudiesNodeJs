// Sempre que for enviar pro GITHub, apagar node_modules, após 
//só instalar novamente usando os comando npm i, isso ira instalar os que foi apagado.

//Ativando o express
const express = require('express')

//na const do express e usado nome server ou app.
const  app = express()


//Criando rota do express, Request requisitando, reponse respondendo.
app.get('/users' , (request, response) => {
return response.send('Hello Node')

})



//Nós podemos escolher o número da porta, Porem não são qualquer número, do numero 80 pra cima. 
//Alguns números já são usado por alguns bancos de dados, e instalando ele já vem com uma porta especifica do computador
//Porta
app.listen(3000)
