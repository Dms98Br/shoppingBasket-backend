const product = require('../repository/products-repository')

//#region Post
exports.post = async(req, res)=>{
    try {        
        const data = await product.post(req.body)
        return res.status(201).send({product: data})
    } catch (e) {
        res.status(500).send({menssagem: e})
    }
}
//#endregion

//#region Get
exports.get = async(res)=>{
    try {
        var data = await product.get() 
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({menssagem: e})
    }
}
//#endregion

//#region Put
//#endregion

//#region Delete
//#endregion

//#region 
//#endregion