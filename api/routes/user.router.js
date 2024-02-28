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

module.exports = router
