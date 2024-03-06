const Sport = require('../models/sport.model')

const getAllSports = async (req, res) => {
    try {
        const sports = await Sport.findAll()
        return res.status(200).json(sports)
    } catch (error) {
        console.log(error)
      return res.status(500).json({message: "Something went wrong"})
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
      return res.status(500).json({message: "Something went wrong"})
    }
}


const updateSport = async (req,res) => {
    try {
        const updatedRows = await Sport.update(req.body,{
            where:{
                id: req.params.sportId
            }
        })

        if(updatedRows > 0) {
            const updatedSport = await Sport.findByPk(req.params.sportId)
            return res.status(200).json(updatedSport)
          } else {
            return res.status(404).send('Sport not found')
          }
    } catch (error) {
        res.status(500).send(error.message)
        return res.status(500).json({message: "Something went wrong"})
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
      return res.status(500).json({message: "Something went wrong"})
    }
}


module.exports = {
    getAllSports,
    createSport, 
    updateSport, 
    deleteSport, 

}