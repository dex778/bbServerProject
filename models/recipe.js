/*
We will need to build a model for the type of information we are going to intake from the user. 
Recipe Name:
Ingredients:
Prepparation:
cook time:
*/
const sequelize = require('sequelize');
const database = require('../db')

    const Recipe = database.define('recipe', {
        name: {
            type: sequelize.STRING,
            allowNull: false
        },
        ingredients: {
            type: sequelize.STRING,
            allowNull: false
        },
        preparation: {
            type: sequelize.STRING,
            allowNull: false
        },
        owner: {
            type: sequelize.INTEGER,
        },
        time: {
            type: sequelize.STRING,
            allowNull: false
        }
    })


module.exports = Recipe; 

