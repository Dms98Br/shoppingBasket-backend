const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
const schema = new Schema({
    name: {
        type: String,
        required:[true, 'O nome é obrigatório'],
        trim: true
    },
    lastName:{
        type: String,
        required:[true, 'O sobrenome é obrigatório'],
        trim: true
    },
    email:{
        type: String,
        required:[true, 'E-mail é obrigatório'],
        trim: true
    },
    password:{
        type: String,
        require: [true, 'Senha é obrigatória']
    },
    list:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'list'
    }]
})
schema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})
module.exports = mongoose.model('user', schema)