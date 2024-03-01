const router = require('express').Router()
const {checkAuth, checkAdmin} = require('../middleware/index')
const {
    getAllSports,
    createSport, 
    updateSport, 
    deleteSport, 
} = require('../controllers/sport.controller')

router
    .get('/', getAllSports)
    .post('/:sportId', checkAuth, checkAdmin, createSport)
    .patch('/:sportId',checkAuth, checkAdmin, updateSport)
    .delete('/:sportId', checkAuth, checkAdmin,deleteSport)


module.exports = router