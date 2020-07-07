const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
const schema = new Schema({
    nameList:{
        type: String,
        required:[true, 'Nome da lista é obrigatório'],
        trim: true
    },
    product:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product'
    }]
})
module.exports = mongoose.model('list', schema)