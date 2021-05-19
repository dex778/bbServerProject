// const express = require('express') //not necessary because we have line 2
const router = require('express').Router();
const User = require('../models/user')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

router.get('/user', (req, res) => {
    res.send('testing the userController')

})

router.post('/register', (req, res) => {              //with every endpoint we need route and callback function
    User.create({
        username: username,
        password: password
    })
    .then(user => res.send({ user }))
    .catch(error => res.status(500).send({
        message: 'user not created', 
        error: error.errors[0]
    }))

})


module.exports = router;