const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db/index.js');

const Room = sequelize.define('room', {
    name:{
        type: DataTypes.STRING,
        allowNull: false

    },
    floor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalCapacity: {
        type: DataTypes.INTEGER
    }
});

module.exports = Room