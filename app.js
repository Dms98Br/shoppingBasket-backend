'use stric'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const configure = require('./src/configure/config');

const app = express();
const router = express.Router();

//connecta no banco
mongoose.connect(configure.connectionString,{useNewUrlParser: true, useUnifiedTopology: true});


//carrega as rotas
const productRoute = require('./src/app/route/product-route')
const usersRoute = require('./src/app/route/users-route')
const listRoute = require('./src/app/route/list-route')
app.use(bodyParser.json({
    limit: '5mb'
}));// Todo conteudo passa para JSON
app.use(bodyParser.urlencoded({
     extended: false 
}));
// Habilita o CORS
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, x-Request-With, Content-type,Accept,x-access-token');
    res.header('Access-control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//app.use('/', indexRoute);
app.use('/product', productRoute);
app.use('/user', usersRoute)
app.use('/list', listRoute)
module.exports = app;