const Sequelize = require('sequelize');
const db = new Sequelize('recipeServer', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = db;