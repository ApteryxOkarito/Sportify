const { checkDB, syncModels } = require("./db/index.js");
const User = require('./api/models/user.model.js')
const Suscription = require('./api/models/suscription.model.js')
const Class = require('./api/models/class.model.js')
const Sport = require('./api/models/sport.model.js')
const Room = require('./api/models/room.model.js')
const Material = require('./api/models/material.model.js')


async function dbConnect() {
try {
    await checkDB()
    await syncModels()
} catch (error) {
    console.log('Something has gone very wrong 😱')
}
}

dbConnect()