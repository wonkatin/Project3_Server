const router = require('express').Router()
const User = require('../models/User')
const { Trip, Notes } = require('../models/Trip.js')
const authLockedRoute = require('./authLockedRoute')


router.get('/:userId/trips/:tripId/notes', async (req, res) => {
    try{
        const id = req.params.userId
        const user = await User.findById(id)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            res.json(trip.notes)   
        }
    } catch(err) {
        console.log(err)
    }
})





module.exports = router