const router = require('express').Router()
const User = require('../models/User')
const { Trip, TripSchedule } = require('../models/Trip.js')
const authLockedRoute = require('./authLockedRoute')


router.get('/:userId/trips/:tripId/tripSchedule', async (req, res) => {
    try{
        const id = req.params.userId
        const user = await User.findById(id)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            res.json(trip.tripSchedule)   
        }
    } catch(err) {
        console.log(err)
    }
})

router.post('/:userId/trips/:tripId/tripSchedule', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            if(trip){
                const newEvent = await TripSchedule.create({
                    eventName: req.body.eventName,
                    date: req.body.date,
                    startTime: req.body.startTime,
                    endTime: req.body.endTime,
                    location: req.body.location,
                    completed: false
                })
                trip.tripSchedule.push(newEvent)
                await trip.save()
                res.json(newEvent)
            }      
        }
    } catch(err) {
        console.log(err)
    }
})



module.exports = router