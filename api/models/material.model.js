const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db/index.js');

const Material = sequelize.define('material', {
    name:{
        type: DataTypes.STRING,
        allowNull: false

    },
    description: {
        type: DataTypes.STRING,
        }
});

module.exports = Material 