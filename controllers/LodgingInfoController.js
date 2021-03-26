const router = require('express').Router()
const User = require('../models/User')
const { Trip, LodgingInfo } = require('../models/Trip.js')
const authLockedRoute = require('./authLockedRoute')


router.get('/:userId/trips/:tripId/lodgingInfo', async (req, res) => {
    try{
        const id = req.params.userId
        const user = await User.findById(id)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            res.json(trip.lodgingInfo)   
        }
    } catch(err) {
        console.log(err)
    }
})

router.post('/:userId/trips/:tripId/lodgingInfo', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            if(trip){
                const newLodgingInfo = await LodgingInfo.create({
                    name: req.body.name, 
                    address: req.body.address, 
                    checkInTime: req.body.checkInTime, 
                    checkOutTime: req.body.checkOutTime, 
                    contact: req.body.contact, 
                    reservationNumber: req.body.reservationNumber, 
                    checkInDate: req.body.checkInDate, 
                    checkOutDate: req.body.checkOutDate  
                })
                trip.lodgingInfo.push(newLodgingInfo)
                await trip.save()
                res.json(newLodgingInfo)
            }      
        }
    } catch(err) {
        console.log(err)
    }
})





module.exports = router