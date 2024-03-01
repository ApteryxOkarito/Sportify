const Suscription = require('../models/suscription.model')
const User = require('../models/user.model')


const getAllSuscriptions = async (req, res) => {
    try {
        const suscription = await Suscription.findAll()
        return res.status(200).json(suscription)
    } catch (error) {
        console.log(error)
    }
}

const chooseSuscription = async (req, res) => {
    
    try {
        const user = res.locals.user
        console.log(user)
        const suscription = await Suscription.findByPk(req.body.suscriptionId)
        const suscribed = await user.setSuscription(suscription)

        if (suscribed) {
            res.status(200).json({ message: `You have choosed the ${suscription.name}` })
        
        } 
        else {
            res.status(400).json({ message: 'something go wrong' })
        }

    } catch (error) {
        console.log(error)
    }
}





const changeSuscription = async (req, res) => {
    try {


    } catch (error) {
        console.log(error)
    }
}


const deleteSuscription = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAllSuscriptions,
    chooseSuscription,
    changeSuscription,
    deleteSuscription,

}