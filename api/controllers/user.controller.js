const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) =>   {
    try {
        const users = await User.findAll()
        return res.status(200).json(users)
      } catch (error) {
        console.log(error)
      }
    }



const getProfile = () =>   {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

const getOneUser = () =>   {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (req,res) =>   {
    try {
        // const saltRounds = bcrypt.genSaltSync(parseInt(10))
        // const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
        // req.body.password = hashedPassword
        
        const newUser = await User.create({
            fullName: req.body.fullName,
            email:req.body.email,
            password:req.body.password,
            dni:req.body.dni,
            phone:req.body.phone,
        })
        return res.status(200).json(newUser)
        
    } catch (error) {
        console.log(error)
    }
}


const resetPassword = () =>   {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

const updateProfile = () =>   {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

const deleteProfile = () =>   {
    try {
        
    } catch (error) {
        console.log(error)
    }
}
const deleteOwnProfile = () =>   {
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
    deleteProfile,
    deleteOwnProfile
}