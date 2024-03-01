const router = require('express').Router()
const {checkAuth, checkAdmin} = require('../middleware/index')

const {
    getAllSuscriptions,
    chooseSuscription, 
    changeSuscription, 
    deleteSuscription, 
} = require('../controllers/suscription.controller')

router
    .get('/', getAllSuscriptions)
    .post('/', checkAuth, chooseSuscription)
    .patch('/',checkAuth, changeSuscription)
    .delete('/', checkAuth, deleteSuscription)

module.exports = router