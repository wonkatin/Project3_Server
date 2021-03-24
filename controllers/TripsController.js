const router = require('express').Router()
const User = require('../models/User.js')
const Trip = require('../models/Trip.js')
const authLockedRoute = require('./authLockedRoute')

router.get('/', async (req, res) => {
    try{
        const id = req.params.userId
        console.log(id)
        const user = await User.findById(id)
        console.log(req.params)
        res.json(user)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router
