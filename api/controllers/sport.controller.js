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
        const newSport = await Sport.create({
            name: req.body.name,
            description: req.body.description,
            instructorName: req.body.instructorName,

        })
        return res.status(200).json({message: "Here it is your new Sport" , newSport})

    } catch (error) {
        console.log(error)
    }
}


const updateSport = async (req,res) => {
    try {

        const sportId = req.params.id;
        const updatedSport = {
            name: req.body.name,
            description: req.body.description,
            instructorName: req.body.instructorName
    }
    return res.status(200).json({message: "sport updated", updatedSport})
}

    catch (error) {
        console.log(error)
    }
}


const deleteSport = async (req,res) => {
    try {
        const sport = await Sport.destroy({
            where: {
                id: req.params.sportId
            }
        })
        if (sport > 0){
            return res.status(200).json('Sport deleted')
		} else {
			return res.status(404).send('Sport not found')
        }
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