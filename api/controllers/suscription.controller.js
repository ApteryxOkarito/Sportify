const Suscription = require('../models/suscription.model')
const User = require('../models/user.model')


const getAllSuscriptions = async (req, res) => {
    try {
        const suscription = await Suscription.findAll()
        return res.status(200).json(suscription)
    } catch (error) {
        console.log(error)
     return res.status(500).json({message: "Something went wrong"})
    }
}

const chooseSuscription = async (req, res) => {
    
    try {
        const user = res.locals.user
        const suscription = await Suscription.findByPk(req.body.suscriptionId)
        const suscribed = await user.setSuscription(suscription)

        if (suscribed) {
            res.status(200).json({ message: `You have choosed the ${suscription.name}` })
        
        } 
        else {
            res.status(400).json({ message: 'Something went wrong' })
        }

    } catch (error) {
        console.log(error)
    return res.status(500).json({message: "Something went wrong"})
    }
}


const changeSuscription = async (req, res) => {
    
    try {
        const user = res.locals.user
        const suscription = await Suscription.findByPk(req.body.suscriptionId)

        if (suscription.id === user.suscriptionId){
            res.status(400).json({ message: `You already have this suscription` })
        }
        const suscribed = await user.setSuscription(suscription)

        if (suscribed) {
            res.status(200).json({ message: `You have change to ${suscription.name}` })
        
        } 
        else {
            res.status(400).json({ message: 'Something went wrong' })
        }

    } catch (error) {
        console.log(error)
    return res.status(500).json({message: "Something went wrong"})
        
    }
}

const deleteSuscription = async (req, res) => {
    try {
        const user = res.locals.user;

        const suscription = await user.getSuscription();
        if (!suscription) {
            return res(400).jason({message: 'Not suscription found'})
        }
        await user.setSuscription(null);
        res.status(200).json({message: 'Suscription deleted'})

    } catch (error) {
        console.log(error)
    return res.status(500).json({message: "Something went wrong"})
    }
}


module.exports = {
    getAllSuscriptions,
    chooseSuscription,
    changeSuscription,
    deleteSuscription,

}