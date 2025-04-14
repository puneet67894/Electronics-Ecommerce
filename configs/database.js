const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('EComDB', 'root', 'Puneetgautams@2003', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
