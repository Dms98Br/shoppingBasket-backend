const product = require('../repository/products-repository')
const { log } = require('debug')

//#region Post
exports.post = async(req, res)=>{
    try {        
        const data = await product.post(req.body)
        return res.status(201).send({menssagem: "Produto " + data.name + " foi criado"})
    } catch (e) {
        res.status(500).send({menssagem: e})
    }
}
//#endregion

//#region Get
exports.get = async(req, res)=>{
    try {        
        var data = await product.get()                      
        res.status(200).send({ data: data });  
    } catch (e) {
        res.status(400).send({menssagem: e})
        console.log(e);
        
    }
}
exports.getById = async(req, res) => {
    try {
        var data = await product.getById(req.params.id)
        res.status(200).send(data)
    } catch (e) {
        //console.log(e)        
        res.status(500).send({
            menssagem: 'Falha ao processar sua requisição'
        })
    }
}
//#endregion

//#region Put
exports.update = async(req, res, next)=>{
    try {
        var data = await product.update(req.params.id, req.body)
        res.status(200).send({menssagem: 'Produto atualizado'})
    } catch (e) {
        res.status(400).send({menssagem: e})
    }
}
//#endregion

//#region Delete
exports.delete = async (req, res) =>{
    try {
        var data = await product.delete(req.params.id)
        res.status(200).send({ menssagem: 'Produto removido '})
    } catch (e) {
        res.status(400).send({ menssagem: e})
    }
}
//#endregion