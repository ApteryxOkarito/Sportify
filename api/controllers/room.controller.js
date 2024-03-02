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

//esta funciona sin pasarle el parámetro de SportId. Podemos dejarla así o podemos pponer una validación de que pueda editarlo siempre y cuando no exista (como arriba)
//Pero cuando lo he intentado me lanza error. Lo dejo pendiente 



const updateRoom = async (req,res) => {
    try {

        const updatedRows = await Room.update(req.body,{
            where:{
                id: req.params.roomId
            }
        })

        if(updatedRows > 0) {
            const updatedRoom = await Room.findByPk(req.params.roomId)
            return res.status(200).json(updatedRoom)
          } else {
            return res.status(404).send('Room not found')
          }
        } catch (error) {
          res.status(500).send(error.message)
        }
      }





//Opción que probé, pero claro, me dice que ya existe y no me deja actualizar aunque no cambie ese ID y solo el nombre 

// const updateRoom = async (req,res) => {
//     try {
//         const existingSport = await Room.findOne(

//             { where: 
//                 { sportId: req.body.sportId } 
//             });

//         if (existingSport) {
//             return res.status(400).json({ message: "A room with that sportId already exists, so you can't edit that data." })
//         };

//         const roomId = req.params.roomId;
//         const updatedRoom = {
//             name: req.body.name,
//             floor: req.body.floor,
//             totalCapacity: req.body.totalCapacity,
//             sportId: req.body.sportId
//     }
//     return res.status(200).json({message: "Room updated", updatedRoom})
// }

//     catch (error) {
//         console.log(error)
//     }
// }


const deleteRoom = async (req,res) => {
    try {
        const room = await Room.destroy({
            where: {
                id: req.params.roomId
            }
        })
        if (room > 0){
            return res.status(200).json('Room deleted')
		} else {
			return res.status(404).send('Room not found')
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