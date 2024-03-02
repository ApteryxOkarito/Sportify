const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll( {
            attributes: {
                exclude: 'password'
            }
        })
        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}


const getOwnUser = async (req,res) => {
    try {
        const user = await User.findByPk(res.locals.user.id, {
            attributes: {
                exclude: 'password'
            }
        })
        if(user){
            return res.status(200).json(user)
        } else {
            return res.status(404).send('User not found')
        }

    } catch (error) {
        console.log(error)
    }
}


const getOneUser = async (req,res) => {
    try {

        const user = await User.findByPk(req.params.userId)
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

            const user = await User.update(req.body, {
                where:{
                    id: res.locals.user.id
                }
            })
            if (!user) {
                return res.status(404).send('User not found')
            }
            return res.status(200).json({message: 'User updated'})
    
        } catch (error) {
            console.log(error)
        }
    }


const updateUser = async (req,res) => {
    try {
        const userUpdated = await User.update(req.body, {
            where:{
                id: req.params.userId
            }
        })
        if (!userUpdated) {
            return res.status(404).send('User not found')
        }
        return res.status(200).json({message: 'User updated'}) //quiero que devuelva todo el usuario, pero me sale un array con un numero why?

    } catch (error) {
        console.log(error)
    }
}




const deleteUser = async (req,res) => {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        if (user > 0){
            return res.status(200).json('User deleted')
		} else {
			return res.status(404).send('User not found')
        }
    } catch (error) {
        console.log(error)
    }
}



const deleteOwnProfile = async (req,res) => {
    try {
        const user = await User.destroy({
            where: {
                id: res.locals.user.id
            }
        })
        if (user > 0){
            return res.status(200).json('User deleted')
		} else {
			return res.status(404).send('User not found')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    getOwnUser,
    createUser,
    resetPassword,
    updateUser,
    updateOwnProfile,
    deleteUser,
    deleteOwnProfile
}