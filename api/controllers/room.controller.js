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

        const room = await Room.findByPk(req.params.roomId)
        if(room){
            return res.status(200).json(room)
        } else {
            return res.status(404).send('Room not found')
        }

    } catch (error) {
        console.log(error)
    }
}


const createRoom = async (req, res) => {
    try {
        const existingSport = await Room.findOne(

            { where: 
                { sportId: req.body.sportId } 
            });

        if (existingSport) {
            return res.status(400).json({ message: "A room with that sportId already exists." });
        }

        const newRoom = await Room.create({
            name: req.body.name,
            floor: req.body.floor,
            totalCapacity: req.body.totalCapacity,
            sportId: req.body.sportId
        });

        return res.status(200).json({ message: "Here is your new Room", newRoom });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};



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