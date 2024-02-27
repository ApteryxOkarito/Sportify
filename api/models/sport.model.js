const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db/index.js');

const Sport = sequelize.define('sport', {
    name:{
        type: DataTypes.STRING,
        allowNull: false

    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    instructorName: {
        type: DataTypes.INTEGER
    }
});

module.exports = Sport