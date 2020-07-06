const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    name:{
        type: String,
        required:[true, 'Nome obrigatório'],
        trim: true
    },    
    description:{// descrição
        type: String,        
        trim: true
    },
    category:{//categoria
        type: String,        
        trim: true
    },
    amount:{//quantidade
        type: String,        
        trim: true
    },
    price:{//preço
        type: String,        
        trim: true
    }
})
module.exports = mongoose.model('product', schema)