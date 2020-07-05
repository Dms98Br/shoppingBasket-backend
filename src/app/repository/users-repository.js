const user = require('../models/users')

//#region Get users
    exports.get = async () => {
        const res = await user.find({})
        return res
    }    
//#endregion 

//#region Authenticate
    exports.authenticate = async (data) =>{
        const res = await user.findOne({
            email: data.email,
            password: data.password
        })
        return res
    }
//#endregion

//#region Post
    exports.post = async(data) =>{
        var res = user(data)
        await res.save()
        return res
    }
//#endregion

//#region Update
    exports.update = async(_id, data, password)=>{
        await user
        .findByIdAndUpdate(_id,{
            $set:{
                name: data.name,
                lastname: data.lastname,
                email: data.email,
                password: password
            }
        })
    }
//#endregion

//#region Delete
exports.delete = async(_id) =>{
    await user.findOneAndRemove(_id)
}
//#endregion