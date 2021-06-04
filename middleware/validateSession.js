const jwt = require('jsonwebtoken')
const User =  require('../models/user')

const validateSession = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(res)
    if(!token) {
        return res.status(403).json({
            auth:false,
            message: 'No token provided'
        })
    } else {
        jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
            // console.log('SECOND WORD', decodedToken, err)
            if(!err && decodedToken) {// console.log('TEXT')
                User.findOne({
                    where: {
                        id: decodedToken.id
                    }
                })

                .then(user => {
                    if(!user) throw err;

                    req.user = user;
                    // console.log('WORD', req.user)
                    return next()
                })
                .catch(err => next(err))
            } else {
                req.errors = err;
                return res.status(500).send('Not authorized')
            }
        })
    }
}

module.exports = validateSession;