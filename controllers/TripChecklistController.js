const router = require('express').Router()
const User = require('../models/User.js')
const { Trip, TripChecklist } = require('../models/Trip.js')
const authLockedRoute = require('./authLockedRoute')


//show trip checklist
router.get('/:userId/trips/:tripId/tripChecklist', async (req, res) => {
    try{
        const id = req.params.userId
        const user = await User.findById(id)
        if(user){
            const trip = await Trip.findById(req.params.tripId).populate('tripChecklist')
            // console.log(trip.tripChecklist)
            res.json(trip.tripChecklist)
           
        }
    } catch(err) {
        console.log(err)
    }
})

//create checklist
router.post('/:userId/trips/:tripId/tripChecklist', async (req, res) => {
    try{
        tripId = req.params.tripId
        // console.log(req.body.incomingChecklist)
        const user = await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(tripId)
            if(trip){
                const newTripChecklist = await TripChecklist.create({
                    items: req.body.incomingChecklist
                })
                trip.tripChecklist.push(newTripChecklist)
                await trip.save()
                // console.log(newTripChecklist)
                res.json(newTripChecklist)
            }  
        }
    } catch(err) {
        console.log(err)
    }
})



//create new item inside items array
router.post('/:userId/trips/:tripId/tripChecklist/:tripChecklistId', async (req, res) => {
    try{
        tripId = req.params.tripId
        const user = await User.findById(req.params.userId)
        // console.log(user)
        if(user){
            const trip = await Trip.findById(tripId).populate('tripChecklist')
            if(trip){
                const tripChecklist = await TripChecklist.findById(req.params.tripChecklistId)
                // console.log(tripChecklist)
                if(tripChecklist){
                    const newItem = await tripChecklist.items.create({
                            itemName: req.body.itemName,
                            checked: req.body.checked,
                            category: req.body.category
                    })
                    tripChecklist.items.push(newItem)
                    trip.tripChecklist = tripChecklist
                    await trip.save()
                    res.json(newItem)
                }
            }  
        }
    } catch(err) {
        console.log(err)
    }
})

//delete item from checklist items array
router.delete('/:userId/trips/:tripId/tripChecklist/:tripChecklistId/items/:itemId', async (req, res) =>{
    try{
        const user= await User.findById(req.params.userId)
        // console.log(user)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            // console.log(trip)
            if(trip){
                const tripChecklist = await TripChecklist.findById(req.params.tripChecklistId)
                // console.log(tripChecklist)
                if(tripChecklist){
                    const deletedItem = await tripChecklist.items.id(req.params.itemId).remove()
                    // console.log(tripChecklist)
                    trip.tripChecklist = tripChecklist
                    await trip.save()
                    res.json({msg: 'Item deleted!'})
                }
            }
        }
    } catch(err) {
        console.log(err)
    }
})


module.exports = router
