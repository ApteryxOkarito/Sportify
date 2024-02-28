const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}


const getProfile = async (req,res) => {
    try {
        console.log('UserId:', req.query)
        console.log('Request Query:', req.query);
        const user = await User.findByPk(req.query)
        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        
    }
}

//No funciona
const getOneUser = async (req,res) => {
    try {
        console.log(req.params.id)
        const user = await User.findByPk(req.params.id)
        if(user){
            return res.status(200).json(user)
        } else {
            return res.status(404).send('User not found')
        }

    } catch (error) {
        console.log(error)
    }
}

const createUser = async (req, res) => {
    try {

        const saltRounds = bcrypt.genSaltSync(parseInt(10))
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
        req.body.password = hashedPassword
                
        const newUser = await User.create({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password,
            dni: req.body.dni,
            phone: req.body.phone,
        })
    return res.status(200).json(newUser)

} catch (error) {
    console.log(error)
}
}


const resetPassword = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}
const updateOwnProfile = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

const updateProfile = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

const deleteProfile = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}
const deleteOwnProfile = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    getProfile,
    createUser,
    resetPassword,
    updateProfile,
    updateOwnProfile,
    deleteProfile,
    deleteOwnProfile
}