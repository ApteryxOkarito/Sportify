const Room = require('../models/room.model')


const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.findAll()
        return res.status(200).json(rooms)
    } catch (error) {
        console.log(error)
    }
}


const getOneRoom = async (req,res) => {
    try {

        const user = await User.findByPk(req.params.userId)
        if(user){
            return res.status(200).json(user)
        } else {
            return res.status(404).send('User not found')
        }

    } catch (error) {
        console.log(error)
    }
}



const createRoom = async (req,res) => {
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


const updateRoom = async (req,res) => {
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


const deleteRoom = async (req,res) => {
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
    getAllRooms,
    getOneRoom, 
    createRoom, 
    updateRoom, 
    deleteRoom 
}