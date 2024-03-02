const router = require('express').Router()
const {checkAuth, checkAdmin} = require('../middleware/index')

const {
    getAllRooms,
    getOneRoom, 
    createRoom, 
    updateRoom, 
    deleteRoom 
} = require ('../controllers/room.controller')

router
    .get('/', checkAuth, checkAdmin, getAllRooms)
    .get('/:roomId', checkAuth, checkAdmin, getOneRoom)
    .post('/', checkAuth, checkAdmin, createRoom)
    .patch('/:roomId',checkAuth, checkAdmin, updateRoom)
    .delete('/:roomId', checkAuth, checkAdmin,deleteRoom)


module.exports = router