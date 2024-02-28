const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db/index.js');

const User = sequelize.define('user', {
    fullName:{
        type: DataTypes.STRING,
        allowNull: false

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,     
    //     validate: {
    //     password: true}

    },

    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true

    },
    role: {
        type: DataTypes.ENUM('user','admin'),
        defaultValue: 'user'
    }
});

module.exports = User