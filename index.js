const { checkDB, syncModels } = require("./db/index.js")
const { addRelations } = require('./db/relations.js')


async function dbConnect() {
try {
    await checkDB()
    addRelations()
    await syncModels()
} catch (error) {
    console.log('Something has gone very wrong 😱')
}
}

dbConnect()