const Suscription = require('../api/models/suscription.model.js')
const Class = require('../api/models/class.model.js')
const Sport = require('../api/models/sport.model.js')
const Room = require('../api/models/room.model.js')
const Material = require('../api/models/material.model.js')
const User = require('../api/models/user.model.js')


function addRelations(){
    try {
        // ONE TO MANY - User & Suscription
        Suscription.hasMany(User, {
            onDelete: 'CASCADE'
        }) 
        User.belongsTo(Suscription,{
            onDelete: 'CASCADE'
                })
        
        // ONE TO ONE -  Room & Sport
        Sport.hasOne(Room, {
            onDelete: 'SET NULL'
        })
        Room.belongsTo(Sport, {
            onDelete: 'SET NULL'
        })
        // ONE TO MANY - Class & Sport
        Sport.hasMany(Class,  {
            onDelete: 'CASCADE'
        })
        Class.belongsTo(Sport, {
            onDelete: 'CASCADE'
        })
        // ONE TO MANY - Room & Material
        Room.hasMany(Material, {
            onDelete: 'SET NULL'
        })
        Material.belongsTo(Room, {
            onDelete: 'SET NULL'
        })
        // MANY TO MANY - User & Sport
        User.belongsToMany(Sport, {through: 'userSports', as: 'userSport'})
        Sport.belongsToMany(User, {through: 'userSports', as: 'userSport'})

    } catch (error) {
        console.log ('Something has gone very wrong with the relations!! 😱')
        
    }
};

module.exports = { addRelations }





