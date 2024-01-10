const express = require("express");
const router = express.Router();
const productdata = require('../models/Products');

// route to post a new product
router.post('/products', async (req,res) => {
    try {
        const newProduct = new productdata(req.body);
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully' });
    }
    catch {
        console.error('Error adding product to the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


//route to get all products
router.get('/products', async (req,res) => {
    try {
        const data = await productdata.find();
        res.json(data);
    }
    catch {
        console.error('Error fetching products from the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// get product by id
router.get('/:productId', async (req, res) => {
    const product = await productdata.findById(req.params.productId);
    res.json(product);
});

module.exports = router;