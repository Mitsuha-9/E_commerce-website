const express = require("express");
const router = express.Router();
const cartdata = require('../models/Cart');

// route to post a new product to cart
router.post('/cart', async (req,res) => {
    try {
        const userExist = await cartdata.findOne({ user: req.body.user });
        if (userExist) {
            userExist.cartItems.push({
                product: req.body.product_id,
                amount: req.body.amount
            });
            await userExist.save();
            res.status(201).json({ message: 'Product added to cart successfully' });
        } else {
            const newdata = new cartdata({
                user: req.body.user,
                cartItems: [
                    {
                        product: req.body.product_id,
                        amount: req.body.amount
                    }
                ]
            });
            await newdata.save();
            res.status(201).json({ message: 'Product added to cart successfully' });
        }
    }
    catch (error) {
        console.error('Error adding product to the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


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

