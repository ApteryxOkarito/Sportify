const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db/index.js');

const Suscription = sequelize.define('suscription', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
    type: {
        type: DataTypes.ENUM('10-session package','monthly','annual'),
    }
});

module.exports = Suscription