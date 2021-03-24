const router = require('express').Router()
const User = require('../models/User.js')
const { Trip } = require('../models/Trip.js')
const authLockedRoute = require('./authLockedRoute')

router.get('/:userId/trips', async (req, res) => {
    try{
        const id = req.params.userId
        console.log(id)
        const user = await User.findById(id)
        console.log(user)
        res.json(user)
    } catch(err) {
        console.log(err)
    }
})

router.post('/:userId/trips', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        console.log(Trip)
        if(user){
            const newTrip = await Trip.create({
                name: req.body.name,
                location: req.body.location
            })
            console.log(newTrip)
            user.trips.push(newTrip)
            await user.save()
        }
    } catch(err) {
        console.log(err)
    }
})






module.exports = router
