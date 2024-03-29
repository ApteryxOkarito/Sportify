const Material = require('../models/material.model.js')
const Room = require('../models/room.model.js')
const { Op } = require('sequelize')


const getAllMaterials = async (req, res) => {
    try {
        const materials = await Material.findAll()
        return res.status(200).json({ message: "Here you have all the materials", materials })
    } catch (error) {
        console.log(error)
    return res.status(500).json({message: "Something went wrong"})
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

    return res.status(200).json({ message: `Here you have all the materials from the ${room.name} room`, materials })
    } catch (error) {
        console.log(error)
    return res.status(500).json({message: "Something went wrong"})
    }
}


const getMaterialByName = async (req, res) => {
    const queryParams = req.query;
    const whereClause = {};
    const validQueryParams = ['name']

    try {

        for (const key in queryParams) {
            if (!validQueryParams.includes(key)) {
                return res.status(404).json({ message: 'Invalid term to search material' })
            }
            whereClause[key] = { [Op.like]: `%${queryParams[key]}%` }
        };

        const materials = await Material.findAll(
            {
                where: whereClause
            })

        if (materials.length === 0) {
            return res.status(200).json({ message: 'There is no material with that name' })
        } else {
            return res.status(200).json(materials)
        }
    } catch (error) {
        res.status(500).send(error.message)
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
            roomId: req.params.roomId
        })
        
    return res.status(200).json({message: `You have added a ${newMaterial.name} to the ${room.name} room`})

    } catch (error) {
        console.log(error)
    return res.status(500).json({message: "Something went wrong"})
    }
}


const updateMaterial = async (req,res) => {
    try {

        const updatedRows = await Material.update(req.body,{
            where:{
                id: req.params.materialId
            }
        })

        if(updatedRows > 0) {
            const updatedMaterial = await Material.findByPk(req.params.materialId)
            return res.status(200).json(updatedMaterial)
          } else {
            return res.status(404).send('Material not found')
          }
        } catch (error) {
            console.log(error)
        return res.status(500).json({message: "Something went wrong"})
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
    return res.status(500).json({message: "Something went wrong"})
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