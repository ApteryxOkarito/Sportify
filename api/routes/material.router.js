const router = require('express').Router()
const {checkAuth, checkAdmin} = require('../middleware/index')

const {
    getAllMaterials,
    getMaterialFromRoom,
    getMaterialByName,
    addMaterialRoom,
    updateMaterial,
    deleteMaterial
} = require('../controllers/material.controller')



router
    .get('/', checkAuth, checkAdmin, getAllMaterials)
    .get('/:roomId', checkAuth, checkAdmin, getMaterialFromRoom)
    .get('/:name', checkAuth, checkAdmin, getMaterialByName)
    .post('/:roomId',checkAuth, checkAdmin, addMaterialRoom)
    .patch('/:materialId',checkAuth, checkAdmin, updateMaterial)
    .delete('/:materialId', checkAuth, checkAdmin, deleteMaterial)


module.exports = router