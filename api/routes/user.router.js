const router = require('express').Router()
const {checkAuth, checkAdmin} = require('../middleware/index')
const {
    getAllUsers,
    getOneUser,
    getOwnUser,
    createUser,
    resetPassword,
    updateUser,
    updateOwnProfile,
    deleteUser,
    deleteOwnProfile
    } = require('../controllers/user.controller')
  
router
    .get('/', checkAuth, checkAdmin, getAllUsers)
    .get('/profile', checkAuth, getOwnUser)
    .get('/:userId', checkAuth, checkAdmin, getOneUser)
    .post('/', checkAuth, checkAdmin, createUser)
    .patch('/profile', checkAuth, updateOwnProfile)
    .patch('/:userId', checkAuth, checkAdmin, updateUser)
    .delete('/profile', checkAuth, deleteOwnProfile ) 
    .delete('/:userId',checkAuth,checkAdmin, deleteUser)


    // .patch('/password', checkAuth, resetPassword) //ESTO ES ICEBOX
module.exports = router
