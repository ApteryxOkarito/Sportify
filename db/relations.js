const Suscription = require('../api/models/suscription.model.js')
const Class = require('../api/models/class.model.js')
const Sport = require('../api/models/sport.model.js')
const Room = require('../api/models/room.model.js')
const Material = require('../api/models/material.model.js')
const User = require('../api/models/user.model.js')


function addRelations(){
    try {
        // ONE TO ONE - User & Suscription
        User.hasOne(Suscription)
        Suscription.belongsTo(User)
        // ONE TO ONE -  Room & Sport
        Sport.hasOne(Room)
        Room.belongsTo(Sport)
        // ONE TO MANY - Class & Sport
        Sport.hasMany(Class)
        Class.belongsTo(Sport)
        // ONE TO MANY - Room & Material
        Room.hasMany(Material)
        Material.belongsTo(Room)
        // MANY TO MANY - User & Sport
        User.belongsToMany(Sport, {through: 'userSports', as: 'userSport'})
        Sport.belongsToMany(User, {through: 'userSports', as: 'userSport'})

    } catch (error) {
        console.log ('Something has gone very wrong with the relations!! 😱')
        
    }
};

module.exports = { addRelations }





