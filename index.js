const { checkDB, syncModels } = require("./db/index.js")
const { addRelations } = require('./db/relations.js')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./api/routes/index.js')

async function dbConnect() {
try {
    await checkDB()
    addRelations()
    await syncModels()
} catch (error) {
    console.log('Something has gone very wrong 😱')
}
}


const app = express()
const port = 3000
app.use(express.json())
app.use(morgan("dev)"))
app.use(cors())


app.listen(port, async () => {
    try {
        await dbConnect()
        console.log(`Server is listening in port ${port}`)
        
    } catch (error) {
        console.log(error)
    }
})

app.use('/api', router)