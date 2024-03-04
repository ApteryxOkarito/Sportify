const Class = require('../models/class.model.js')
const Sport = require('../models/sport.model.js')



const getAllClasses = async (req, res) => {
    try {
        const classes = await Class.findAll({
            include: [{model: Sport, as: 'sport'}], atributes: {
                exclude: ['description']
            }
        })
        return res.status(200).json(classes)
    } catch (error) {
        console.log(error)
    }
}

const classBySport = async (req,res) => {
    const sportId = req.params.sportId
    const sport = await Sport.findByPk(sportId)
    if (!sport) {
        return res.status(404).json({ message: "Sport doesn't exist" });
    }

    try {

        const SportId = req.params.sportId
        const classes = await Class.findAll({
            where: {
                sportId: sportId
            }
        })

    return res.status(200).json({ message: `Here you have all the ${sport.name} classes`, classes })
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
        const user = res.locals.id
        const classToBook = await Class.findByPk(req.body.classId)
        const bookedClass = await user.setClasses(classToBook)

    return res.status(200).json({ message: `has reservado esta clase`, bookedClass})

} catch (error) {
    console.log(error)
}
}

const createClass = async (req,res) => {
    try {
        const newClass = await Class.create({
            start: req.body.start,
            finish: req.body.finish,
            duration: req.body.duration,
            days: req.body.days,
            sportId: req.body.sportId            

        })
        return res.status(200).json({message: "Here it is your new Class" , newClass})


    } catch (error) {
        console.log(error)
    }
}


const updateClass = async (req,res) => {
    try {

        const updatedRows = await Class.update(req.body,{
            where:{
                id: req.params.classId
            }
        })

        if(updatedRows > 0) {
            const updatedClass = await Class.findByPk(req.params.classId)
            return res.status(200).json(updatedClass)
          } else {
            return res.status(404).send('Class not found')
          }
        } catch (error) {
          res.status(500).send(error.message)
        }
      }


const deleteClass = async (req,res) => {
    try {
        const classe = await Class.destroy({
            where: {
                id: req.params.classId
            }
        })
        if (classe > 0){
            return res.status(200).json('Class deleted')
		} else {
			return res.status(404).send('S not found')
        }
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