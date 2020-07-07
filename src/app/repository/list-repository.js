const list = require('../models/list')

//#region Get lists
exports.get = async () => {
    const res = await list.find({})
    return res
}
exports.getById = async (_id) =>{
    const res = await list.findById(_id)
    return res
}
//#endregion

//#region Post
    exports.post = async(data)=>{
        var res = list(data)
        await res.save()
        return res
    }
//#endregion

//#region Update
exports.update = async(_id, data)=>{
    await list.findByIdAndUpdate(_id,{
        $set:{
            nameList:data.nameList,
            product: data.product            
        }        
    })
}

//#endregion

//#region Delete
exports.delete = async(_id)=>{
    console.log("Aqui " + _id);        
    await list.findByIdAndDelete(_id)
}
//#endregion