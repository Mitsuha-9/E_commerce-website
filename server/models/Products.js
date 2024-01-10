const mongoose = require('mongoose')

const Productsschema = new mongoose.Schema({
        id: Number,
        title: String,
        description: String,
        image: String,
        amount: String,
        rating: String
})

const productdata = mongoose.model('Products', Productsschema)

module.exports = productdata;