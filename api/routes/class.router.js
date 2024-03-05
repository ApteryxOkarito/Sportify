const router = require('express').Router()
const {checkAuth, checkAdmin} = require('../middleware/index')
const {
    getAllClasses,
    classBySport, 
    userBookedClasses, 
    bookClass,
    createClass, 
    updateClass, 
    deleteClass, 
    cancelClass
} = require('../controllers/class.controller')


router
.get('/', getAllClasses)
.get('/:sportId', classBySport)
.get('/bookedClass/:userId', checkAuth, userBookedClasses)
.post('/bookClass', checkAuth, bookClass)
.post('/', checkAuth, checkAdmin, createClass)
.patch('/:classId', checkAuth, checkAdmin, updateClass)
.delete('/:classId', checkAuth, checkAdmin, deleteClass)
.delete('/:classId/:userId', checkAuth, cancelClass)


module.exports = router


