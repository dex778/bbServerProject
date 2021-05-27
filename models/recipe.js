/*
We will need to build a model for the type of information we are going to intake from the user. 
Recipe Name:
Ingredients:
Prepparation:
cook time:

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