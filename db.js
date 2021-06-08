const Sequelize = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres'
// })
const db = new Sequelize(process.env.DB_NAME, 'postgres', process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres'
});



module.exports = db;
