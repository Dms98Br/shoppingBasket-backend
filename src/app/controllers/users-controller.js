const users = require("../repository/users-repository")
const { log } = require("debug")
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
