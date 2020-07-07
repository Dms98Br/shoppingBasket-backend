const list = require('../repository/list-repository
//#region Get
exports.get = async(req, res) =>{
  try{
    var data = await list.get()
    res.status(200).send({data})
  }catch(e){
    res.status(400).send(e)
  }
}
//#endregion

//#region Post
exports.post = async(req, res, next) => {
    try {
        const data = await list.post(req.body)
        return res.status(201).send({menssagem:"Bem-vindo(a) " + data.name})
    } catch (e) {
        res.status(500).send({messagem: e})   
    }
}
//#endregion

//#region Put
exports.update = async(req, res, next)=>{
    try {
        var body = req.body
        var data = await list.update(req.params.id, req.body.name, req.body.product)
        res.status(200).send({menssagem: 'Usuário ' + body.name + ' atualizado'})
    } catch (e) {
        res.status(400).send({error: e})
    }
}
//#endregion

//#region Delete
exports.delete = async (req, res) =>{
    try {
        var data = await list.delete(req.params.id)
        res.status(200).send({ menssagem: 'Produto removido'})
    } catch (e) {
        res.status(400).send({error: e})
    }
}
//#endregion
