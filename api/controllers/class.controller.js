const Class = require('../models/class.model.js')
const Sport = require('../models/sport.model.js')
const User = require('../models/user.model.js')

function timeToMinutes(time) {
    let [hours, minutes] = time.split(':').map(t => parseInt(t));
    return hours * 60 + minutes;
}

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
    return res.status(500).json({message: "Something went wrong"})
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
    return res.status(500).json({message: "Something went wrong"})
    }
}


const bookClass = async (req, res) => {

    try {
        const user = res.locals.user
        const classToBook = await Class.findByPk(req.body.classId)//esto devuelve un objeto
        const toBookStart = timeToMinutes (classToBook.start)
        const toBookFinish = timeToMinutes (classToBook.finish)


        const userClasses = await user.getUserClass() //esto devuelve un array de objetos 

        userClasses.forEach(clase => { 
            const classStart = timeToMinutes (clase.start)
            const classFinish = timeToMinutes (clase.finish)
            if(clase.days === classToBook.days){
                console.log(toBookStart > classStart, toBookStart, classStart)
                if (toBookStart > classStart && toBookStart < classFinish){
                    throw new Error ("The class you want to book overlaps with another booking.")
                } 
                console.log(toBookFinish > classStart && toBookFinish < classFinish)
                if (toBookFinish > classStart && toBookFinish < classFinish){
                    throw new Error ("The class you want to book overlaps with another booking.")
                }
            }
            
        });
        const bookedClass = await user.addUserClass(classToBook) 
        return res.status(200).json({message: "todo ok", bookedClass})
} catch (error) {
    console.log(error)
    return res.status(500).json({message: "Something went wrong"})
}
}





const userBookedClasses = async (req,res) => {
    try {
        const user = res.locals.user
        const classes = await user.getUserClass()
        return res.status(200).json({ message: `Here you have your booked classes`, classes})
    } catch (error) {
        console.log(error)
    return res.status(500).json({message: "Something went wrong"})
    }
} //devuelve la tabla intermedia por qué? 


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
    return res.status(500).json({message: "Something went wrong"})
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
            return res.status(200).json({message: "Yo have correctly updated the class", updatedClass})
          } else {
            return res.status(404).send('Class not found')
          }
        } catch (error) {
            console.log(error)
        return res.status(500).json({message: "Something went wrong"})
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
            return res.status(200).json('You have deleted the class')
		} else {
			return res.status(404).send('Class not found')
        }
    } catch (error) {
        console.log(error)
    return res.status(500).json({message: "Something went wrong"})
    }
}



const cancelClass = async (req,res) => {
    try {
        const user = res.locals.user
        const classToCancel = await Class.findByPk(req.body.classId)
        const cancelledClass = await user.removeUserClass(classToCancel)

        return res.status(200).json({ message: `You have cancel your class`, cancelledClass})

    } catch (error) {
        console.log(error)
    return res.status(500).json({message: "Something went wrong"})
    }
} 

module.exports ={
    getAllClasses,
    classBySport, 
    userBookedClasses, 
    bookClass, 
    createClass,
    updateClass, 
    deleteClass, 
    cancelClass
}