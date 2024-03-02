const Material = require('../models/material.model.js')
const Room = require('../models/room.model.js')

const getAllMaterials = async (req, res) => {
    try {
        const materials = await Material.findAll()
        return res.status(200).json({ message: "Here you have all the materials", materials })
    } catch (error) {
        console.log(error)
    }
}

const getMaterialFromRoom = async (req, res) => {
    const roomId = req.params.roomId
    const room = await Room.findByPk(roomId)
    if (!room) {
        return res.status(404).json({ message: "Room doesn't exist" });
    }

    try {

        const roomId = req.params.roomId
        const materials = await Material.findAll({
            where: {
                roomId: roomId
            }
        })

    return res.status(200).json({ message: `Here you have all the materials from the ${roomId.name} room`, materials })
    } catch (error) {
        console.log(error)
    }
}


const getMaterialByName = async (req, res) => {
    try {
       
    } catch (error) {
        console.log(error)
    }
}


const createMaterial = async (req,res) => {

    try {

    const roomId = req.params.roomId
    const room = await Room.findByPk(roomId)
    if (!room) {
        return res.status(404).json({ message: "Room doesn't exist" });
    }

    const newMaterial = await Material.create({
            name :  req.body.name, 
            description: req.body.description,
            roomId: req.body.roomId
        })
        
    return res.status(200).json({message: `You have added a ${newMaterial.name} to the ${room.name} room`})

    } catch (error) {
        console.log(error)
    }
}


const updateMaterial = async (req,res) => {
    try {

      
        } catch (error) {
          res.status(500).send(error.message)
        }
      }


const deleteMaterial = async (req,res) => {
    try {
        const material = await Material.destroy({
            where: {
                id: req.params.materialId
            }
        })
        if (material > 0){
            return res.status(200).json('Material deleted')
		} else {
			return res.status(404).send('Material not found')
        }
    } catch (error) {
        console.log(error)
    }
}





module.exports = {
    getAllMaterials,
    getMaterialFromRoom,
    getMaterialByName,
    createMaterial,
    updateMaterial,
    deleteMaterial
}