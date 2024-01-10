const mongoose = require('mongoose')

const Cartschema = new mongoose.Schema({
        id : Number,
        user : {type: mongoose.Schema.Types.ObjectId, ref : 'User', required:'true'},
        cartItems : [
            {
                product : {type: mongoose.Schema.Types.ObjectId, ref : 'Products', required:'true'},
                amount : {type: mongoose.Schema.Types.String, ref : 'Products', required:'true'}
            }
        ]
})

const cartdata = mongoose.model('Cart', Cartschema)

module.exports = cartdata;