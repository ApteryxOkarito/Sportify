const Sport = require('../models/sport.model')



const getAllSports = async (req, res) => {
    try {
        const sports = await Sport.findAll()
        return res.status(200).json(sports)
    } catch (error) {
        console.log(error)
    }
}

const createSport = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}


const updateSport = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}


const deleteSport = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAllSports,
    createSport, 
    updateSport, 
    deleteSport, 

}