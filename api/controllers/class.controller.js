const Class = require('../models/class.model.js')



const getAllClasses = async (req, res) => {
    try {
        const classes = await Class.findAll()
        return res.status(200).json(classes)
    } catch (error) {
        console.log(error)
    }
}

const classBySport = async (req,res) => {
    try {


    } catch (error) {
        console.log(error)
        
    }
}


const userClasses = async (req,res) => {
    try {


    } catch (error) {
        console.log(error)
    }
}

const bookClass = async (req, res) => {
    try {

} catch (error) {
    console.log(error)
}
}

const createClass = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}


const updateClass = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}


const deleteClass = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

const cancelClass = async (req,res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    getAllClasses,
    classBySport, 
    userClasses, 
    bookClass, 
    createClass,
    updateClass, 
    deleteClass, 
    cancelClass
}