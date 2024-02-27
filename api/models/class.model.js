const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db/index.js');

const Class = sequelize.define('class', {
    start:{
        type: DataTypes.TIME,
        allowNull: false

    },
    finish: {
        type: DataTypes.TIME,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false

    },
    days: {
        type: DataTypes.STRING,
        
    }
});

module.exports = Class