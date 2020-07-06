const product = require('../models/product')
const users = require('../models/users')

//#region Get products
exports.get = async () => {
    const res = await product.find({})
    return res
}
exports.getById = async (_id) =>{
    const res = await product
    .findById(_id)
    return res
}
//#endregion

//#region Post
    exports.post = async(data)=>{
        var res = product(data)
        await res.save()
        return res
    }
//#endregion

//#region Update
exports.update = async(_id, data)=>{
    await product.findByIdAndUpdate(_id,{
        $set:{
            name:data.name,    
            description:data.description,
            category:data.category,
            amount:data.amount,
            price:data.price
        }        
    })
}

//#endregion

//#region Delete
exports.delete = async(_id)=>{
    await product.findOneAndRemove(_id)
}
//#endregion