const router = require('express').Router()
const {checkAuth, checkAdmin} = require('../middleware/index')
const {
    getAllUsers,
    getOneUser,
    getOwnUser,
    createUser,
    resetPassword,
    updateProfile,
    updateOwnProfile,
    deleteUser,
    deleteOwnProfile
    } = require('../controllers/user.controller')
  
router
    .get('/', getAllUsers)
    .get('/profile', checkAuth, getOwnUser)
    .get('/:userId', getOneUser)
    .delete('/:userId', deleteUser)
    // .get('/users', checkAuth, checkAdmin, getAllUsers)
    // .get('/users', checkAuth, checkAdmin, getOneUser)

    // .post('/', checkAuth, checkAdmin, createUser)
    // .patch('/password', checkAuth, resetPassword)
    // .patch('/profile', checkAuth, updateOwnProfile)
    // .patch('/profile', checkAuth, checkAdmin, updateProfile)
    // .delete('/userId', checkAuth, checkAdmin, deleteProfile)
    // .delete('/profile', checkAuth, deleteOwnProfile ) 

module.exports = router
