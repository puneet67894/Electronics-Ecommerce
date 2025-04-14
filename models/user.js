const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Users = sequelize.define('Users', {
//             userid: {
//         type: DataTypes.STRING,
//         primaryKey: true
//     },
username:{
        type:DataTypes.STRING,
        allowNull: false
},
   password: {
        type: DataTypes.STRING,
        allowNull: false

    },
//     emailid:{
//             type: DataTypes.STRING,
//         //     allowNull: false
//     },
//     phoneno:{
//             type: DataTypes.STRING,
//         //     allowNull: false
//     },
//     DOB:{
//             type: DataTypes.DATE,
//         //     allowNull: false
//     },

//     roleid:{
//             type: DataTypes.INTEGER,
//         //     allowNull: false
// }
});
module.exports = Users;



