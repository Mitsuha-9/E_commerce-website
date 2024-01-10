const express = require("express");
const router = express.Router();
const cartdata = require('../models/Cart');

// route to post a new product to cart
router.post('/cart', async (req,res) => {
    try {
        const newdata = new cartdata({
            user: req.body.user,  // Assuming you have a 'user' field in your request body
            cartItems: [
                {
                    product: req.body.product_id,  // Assuming you have a 'product_id' field in your request body
                    amount: req.body.amount  // Assuming you have an 'amount' field in your request body
                }
            ]
        });
        await newdata.save();
        res.status(201).json({ message: 'Product added to cart successfully' });
    }
    catch {
        console.error('Error adding product to the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


//route to get all selected products to cart
router.get('/cart', async (req,res) => {
    try {
        const data = await cartdata.find();
        res.json(data);
    }
    catch {
        console.error('Error fetching products from the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;

