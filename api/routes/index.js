const router = require('express').Router()

const userRouter = require('./user.router')
const authRouter = require('./auth.router')
const classRouter = require('./class.router')
const sportRouter = require('./sport.router')

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/class', classRouter)
router.use('/sports', sportRouter)


module.exports = router