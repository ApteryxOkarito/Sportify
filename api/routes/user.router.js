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
    .get('/', getAllUsers)
    .get('/profile', checkAuth, getOwnUser)
    .get('/:userId', getOneUser)
    .delete('/:userId', deleteUser)
    .post('/', checkAuth, checkAdmin, createUser)
    .patch('/profile', checkAuth, updateOwnProfile)
    .patch('/:userId', checkAuth, checkAdmin, updateUser)

    // .patch('/password', checkAuth, resetPassword)
    // .patch('/profile', checkAuth, updateOwnProfile)
    // .delete('/userId', checkAuth, checkAdmin, deleteProfile)
    // .delete('/profile', checkAuth, deleteOwnProfile ) 

module.exports = router
