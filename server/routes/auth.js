const express = require("express");
const router = express.Router();
const usermodel = require('../models/Users');

// handle register requests
router.post('/register', async (req,res) => {
    usermodel.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json(err))
})

// handle login request
router.post('/login', async (req,res) => {
    const {email, password} = req.body
    usermodel.findOne({email : email}) 
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json(user._id)
            }
            else {
                res.json("Password is incorrect")
            }
        }
        else {
            res.json("No record found")
        }
    })
})

module.exports = router;
