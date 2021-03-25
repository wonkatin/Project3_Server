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
            console.log(trip.tripChecklist)
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
        const user = await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(tripId)
            if(trip){
                const newTripChecklist = await TripChecklist.create({
                    items: [
                        {
                            itemName: req.body.itemName,
                            checked: req.body.checked,
                            category: req.body.category
                        }
                    ]
                })
                trip.tripChecklist.push(newTripChecklist)
                await trip.save()
                res.json(newTripChecklist )
            }  
        }
    } catch(err) {
        console.log(err)
    }
})

//map over items array/create index 
//find by index
// push item into items array

//create new checklist item should this be UPDATE/PUT instead of CREATE??
router.post('/:userId/trips/:tripId/tripChecklist/items', async (req, res) => {
    try{
        tripId = req.params.tripId
        const user = await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(tripId)
            if(trip){
                const newTripChecklist = await TripChecklist.create({
                 
                })
                trip.tripChecklist.push(newTripChecklist)
                await trip.save()
                res.json(newTripChecklist )
            }  
        }
    } catch(err) {
        console.log(err)
    }
})

//delete checklist item
router.delete('/:userId/trips/:tripId/tripChecklist/items', async (req, res) =>{
    try{
        const user= await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            if(trip){
                const tripExpense = await trip.tripChecklist.id(req.params.tripChecklistId).remove()
                console.log(tripChecklist)
                await trip.save()
                res.json({ msg: 'Item deleted!'})
            }
        }
    } catch(err) {
        console.log(err)
    }
})


module.exports = router
