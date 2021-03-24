const router = require('express').Router()
const User = require('../models/User.js')
const { Trip } = require('../models/Trip.js')
const authLockedRoute = require('./authLockedRoute')

router.get('/:userId/trips', async (req, res) => {
    try{
        const id = req.params.userId
        console.log(id)
        const user = await User.findById(id).populate('trips')
        res.json(user.trips)
    } catch(err) {
        console.log(err)
    }
})

router.post('/:userId/trips', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        if(user){
            const newTrip = await Trip.create({
                name: req.body.name,
                location: req.body.location,
                fromDate: req.body.fromDate,
                toDate: req.body.toDate
            })
            user.trips.push(newTrip)
            await user.save()
            res.json(newTrip)
        }
    } catch(err) {
        console.log(err)
    }
})

router.get('/:userId/trips/:tripId', async (req, res) => {
    try{
        const user= await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            res.json(trip)
        }
    } catch(err) {
        console.log(err)
    }
})

router.put('/:userId/trips/:tripId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        if(user){
            const updatedTrip = await Trip.findOneAndUpdate({
                _id: req.params.tripId
            },{
                name: req.body.name,
                location: req.body.location,
                fromDate: req.body.fromDate,
                toDate: req.body.toDate
            })
        }
        const trip = await Trip.findById(req.params.tripId)
        res.json(trip)    
    } catch(err) {
        console.log(err)
    }
})

router.delete('/:userId/trips/:tripId', async (req, res) =>{
    try{
        const user= await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findByIdAndDelete(req.params.tripId)
            res.json({ msg: "Trip Deleted!"})
        }
    } catch(err) {
        console.log(err)
    }
})







module.exports = router
