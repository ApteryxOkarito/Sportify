const router = require('express').Router()
const {checkAuth, checkAdmin} = require('../middleware/index')

const {
    getAllMaterials,
    getMaterialFromRoom,
    getMaterialByName,
    createMaterial,
    updateMaterial,
    deleteMaterial
} = require('../controllers/material.controller')



router
    .get('/', checkAuth, checkAdmin, getAllMaterials)
    .get('/name', checkAuth, checkAdmin, getMaterialByName)
    .get('/room/:roomId', checkAuth, checkAdmin, getMaterialFromRoom)
    .post('/:roomId',checkAuth, checkAdmin, createMaterial)
    .patch('/:materialId',checkAuth, checkAdmin, updateMaterial)
    .delete('/:materialId', checkAuth, checkAdmin, deleteMaterial)


module.exports = router