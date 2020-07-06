const list = require('../models/list')
const users = require('../models/users')

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
            nameList:data.nameList            
        }        
    })
}

//#endregion

//#region Delete
exports.delete = async(_id)=>{
    await list.findOneAndRemove(_id)
}
//#endregion