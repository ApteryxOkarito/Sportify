const router = require('express').Router()
const {checkAuth, checkAdmin} = require('../middleware/index')
const {
    getAllUsers,
    getOneUser,
    getProfile,
    createUser,
    resetPassword,
    updateProfile,
    updateOwnProfile,
    deleteProfile,
    deleteOwnProfile
    } = require('../controllers/user.controller')
  
router

    .get('/', checkAuth, checkAdmin, getAllUsers)
    .get('/:id', getOneUser, checkAuth, checkAdmin)
    .get('/profile', checkAuth, getProfile)
    .post('/', checkAuth, checkAdmin, createUser)
    .patch('/password', checkAuth, resetPassword)
    .patch('/profile', checkAuth, updateOwnProfile)
    .patch('/profile', checkAuth, checkAdmin, updateProfile)
    .destroy('/id', checkAuth, checkAdmin, deleteProfile)
    .destroy('/profile', checkAuth, deleteOwnProfile )


module.exports = router
