const router = require('express').Router()
const User = require('../models/User')
const { Trip, FlightInfo } = require('../models/Trip.js')
const authLockedRoute = require('./authLockedRoute')


router.get('/:userId/trips/:tripId/flightInfo', async (req, res) => {
    try{
        const id = req.params.userId
        const user = await User.findById(id)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            res.json(trip.flightInfo)   
        }
    } catch(err) {
        console.log(err)
    }
})

router.post('/:userId/trips/:tripId/flightInfo', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            if(trip){
                const newFlightInfo = await FlightInfo.create({
                    airline: req.body.airline,
                    flightNumber: req.body.flightNumber,
                    gate: req.body.gate,
                    seatId: req.body.seatId,
                    boardingTime: req.body.boardingTime,
                    departureTime: req.body.departureTime,
                    arrivalTime: req.body.arrivalTime,
                    departingCity: req.body.departingCity,
                    destination: req.body.destination
                })
                trip.flightInfo.push(newFlightInfo)
                await trip.save()
                res.json(newFlightInfo)
            }      
        }
    } catch(err) {
        console.log(err)
    }
})

// route not working
router.put('/:userId/trips/:tripId/flightInfo/:flightInfoId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            if(trip){
                const flightInfo = await FlightInfo.findById(req.params.flightInfoId)
                // console.log(flightInfo)
                const updatedFlightInfo = await FlightInfo.findOneAndUpdate({
                    _id: req.params.flightInfoId
                         },{
                            airline: req.body.airline,
                            flightNumber: req.body.flightNumber,
                            gate: req.body.gate,
                            seatId: req.body.seatId,
                            boardingTime: req.body.boardingTime,
                            departureTime: req.body.departureTime,
                            arrivalTime: req.body.arrivalTime,
                            departingCity: req.body.departingCity,
                            destination: req.body.destination
                        })
                        // saved in the console, but not in the database
                     }
                }        
    } catch(err) {
        console.log(err)
    }
})


router.delete('/:userId/trips/:tripId/flightInfo/:flightInfoId', async (req, res) =>{
    try{
        const user = await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            if(trip){
                console.log(trip.flightInfo)
                const deletedFlightInfo = await trip.flightInfo.id(req.params.flightInfoId).remove()
                await trip.save()
                res.json({ msg: 'Deleted flightInfo'})
            } 
            
        }
        
    } catch(err) {
        console.log(err)
    }
})



module.exports = router