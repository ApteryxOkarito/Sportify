const router = require('express').Router()

const userRouter = require('./user.router')
const authRouter = require('./auth.router')
const classRouter = require('./class.router')
const sportRouter = require('./sport.router')
const suscriptionRouter = require('./suscription.router')
const roomRouter = require('./room.router')
const materialRouter = require('./material.router')

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/class', classRouter)
router.use('/sports', sportRouter)
router.use('/suscriptions', suscriptionRouter)
router.use('/rooms', roomRouter)
router.use('/materials', materialRouter)


module.exports = router