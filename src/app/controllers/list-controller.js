const list = require('../repository/list-repository')
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
        return res.status(201).send({menssagem:"Lista criada"})
    } catch (e) {              
        res.status(500).send({messagem: e})          
        console.log(e); 
    }
}
//#endregion

//#region Put
exports.update = async(req, res, next)=>{
    try {
        var data = await list.update(req.params.id, req.body)
        res.status(200).send({menssagem: 'Lista atualizada'})
    } catch (e) {
        console.log(e);  
        res.status(400).send({error: e})
    }
}
//#endregion

//#region Delete
exports.delete = async (req, res) =>{
    try {
        var data = await list.delete(req.params.id)
        console.log(req.params.id);        
        res.status(200).send({ menssagem: 'Produto removido'})
    } catch (e) {
        res.status(400).send({error: e})
    }
}
//#endregion
