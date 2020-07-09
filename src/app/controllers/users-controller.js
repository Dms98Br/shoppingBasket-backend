const users = require("../repository/users-repository")
const Users = require("../models/users")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto')
const authConfig = require('../../configure/config')

//#region Generate token
function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 86400
    })
}
//#endregion

//#region Get
exports.get = async(req, res)=>{
    try {
        var data = await users.get()
        res.status(200).send({data})
    } catch (e) {
        res.status(400).send({e})
    }
}
//#endregion

//#region Authenticate
//#endregion

exports.authenticate = async(req, res)=>{
    try {
        const {email, password} = req.body

        const user = await Users.findOne({email}).select('+password')
        console.log('user ' + user);
        if (!user)
            return res.status(400).send({error: 'usuário não encontrado'})
        if (! await bcrypt.compare(password, user.password))
            return res.status(400).send({error: 'Senha inválida'})
        
        res.status(200).send({menssage: 'Login efetuado',
            user,
            token: generateToken({id: user.id})
        })

    } catch (e) {
        res.status(400).send({menssagem: 'Falha ao fazer login'})
        console.log(e)
    }
}

//#region Post
exports.post = async(req, res, next) => {
    
    try {
        data = await users.post(req.body)                
        return res.status(201).send({menssagem:"Usuário criado"})        
    } catch (e) {
        res.status(500).send({messagem: e})
        console.log(e)        
    }
}
//#endregion

//#region Put
exports.update = async(req, res, next)=>{
    try {
        var body = req.body
        var data = await users.update(req.params.id, req.body)
        res.status(200).send({menssagem: 'Usuário ' + body.name + ' atualizado'})
    } catch (e) {
        res.status(400).send({error: e})
        console.log(e);
        
    }
}
//#endregion

//#region Delete
exports.delete = async (req, res) =>{
    try {
        var data = await users.delete(req.params.id)
        res.status(200).send({ menssagem: 'Usuário removido'})
    } catch (e) {
        res.status(400).send({error: e})
    }
}
//#endregion
