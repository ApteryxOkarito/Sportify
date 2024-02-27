const { checkDB, syncModels } = require("./db/index.js");
const User = require('./api/models/user.model.js')



async function dbConnect() {
try {
    await checkDB()
    await syncModels()
} catch (error) {
    console.log('Something has gone very wrong 😱')
}
}

dbConnect()