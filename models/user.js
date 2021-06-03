/* Here is where we will build the model for the user database and how the infromation will be kept */
const sequelize = require('sequelize');
const database = require('../db');
 
const User = database.define('users', {                      //name of table and properties we want user to have
    username: {
        type: sequelize.STRING,
        allownull: false,
        unique: true
    },
    password: {
        type: sequelize.STRING,
        allownull: false,
        unique: true
    }
})   



module.exports = User;