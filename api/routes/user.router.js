const router = require('express').Router()

const {
    getAllUsers,
    getOneUser,
    getProfile,
    createUser,
    resetPassword,
    updateProfile,
    deleteProfile,
    deleteOwnProfile
    } = require('../controllers/user.controller')
  
router

    .get('/', getAllUsers)
    .get('/:id', getOneUser)
    .get('/profile', getProfile)
    .post('/', createUser)

module.exports = router
