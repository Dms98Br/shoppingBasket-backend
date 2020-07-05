// import express from 'express';
// import bodyParser from 'body-parser';
var express = require ('express');
var bodyParser = require('body-parser');
const app = express();
const config = require('../src/configure/config')
const mongoose = require('mongoose')
//PERSISTÊNCIA
mongoose.connect(config.connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

//Configuração do server para usar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo a porta via arquivo de configuração
var port = process.env.port || 3000;

app.listen(port, () => {
    console.log('Server up and running!');

});