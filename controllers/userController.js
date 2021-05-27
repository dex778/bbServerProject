// const express = require('express') //not necessary because we have line 2
const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

router.get('/user', (req, res) => {
    res.send('testing the userController')

})

router.post('/register', (req, res) => {              //with every endpoint we need route and callback function
    User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    .then(user => {
        let token = jwt.sign({ id: user.id }, "I_AM_SECRET", { expiresIn: '1d '})
        res.send({ user, token })
    })
         
    .catch(error => res.status(500).send({
        message: 'user not created', 
        error: error.errors[0].message
    }))

})

router.post('/login', (req, res) => {
    User.findOne({ 
        where: { 
            username: req.body.username 
        } 
    })
    .then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, function(err, matches){
                matches ? generateToken(user) : res.send('Username or password incorrect')
            })

            function generateToken(user){
                let token = jwt.sign( { id: user.id }, 'I_AM_SECRET', { expiresIn: '1d'} );
                res.send( {user, token} )
            }
        } else {
            res.send('User not found')
        }

    })
})

module.exports = router;