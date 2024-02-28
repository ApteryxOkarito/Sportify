const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db/index.js');

const Sport = sequelize.define('sport', {
    name:{
        type: DataTypes.STRING(30),
        allowNull: false

    },
    description: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    
    instructorName: {
        type: DataTypes.STRING
    }
});

module.exports = Sport