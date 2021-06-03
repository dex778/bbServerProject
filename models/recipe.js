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

<<<<<<< HEAD
*/

module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('recipe', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preparation: {
            type:DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Recipe
    };
=======
>>>>>>> 6059e7c5d2569b52576aad975b6c469211241875
