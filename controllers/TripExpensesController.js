const router = require('express').Router()
const User = require('../models/User.js')
const { Trip, TripExpenses } = require('../models/Trip.js')
const authLockedRoute = require('./authLockedRoute')



router.get('/:userId/trips/:tripId/tripExpenses', async (req, res) => {
    try{
        const id = req.params.userId
        const user = await User.findById(id)
        if(user){
            const trip = await Trip.findById(req.params.tripId).populate('tripExpenses')
            console.log(trip.tripExpenses)
            res.json(trip.tripExpenses)
           
        }
    } catch(err) {
        console.log(err)
    }
})

router.post('/:userId/trips/:tripId/tripExpenses', async (req, res) => {
    try{
        tripId = req.params.tripId
        const user = await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(tripId)
            if(trip){
                const newTripExpense = await TripExpenses.create({
                    purchase: req.body.purchase, 
                    cost: req.body.cost, 
                    date: new Date
                })
                trip.tripExpenses.push(newTripExpense)
                await trip.save()
                res.json(newTripExpense)
            }  
        }
    } catch(err) {
        console.log(err)
    }
})

// router.get('/:userId/trips/:tripId/tripExpenses/', async (req, res) => {
//     try{
//         const user = await User.findById(req.params.userId)
//         if(user){
//             const trip = await Trip.findById(req.params.tripId)
//             res.json(trip)
//         }
//     } catch(err) {
//         console.log(err)
//     }
// })

// router.put('/:userId/trips/:tripId', async (req, res) => {
//     try{
//         const user = await User.findById(req.params.userId)
//         if(user){
//             const updatedTrip = await Trip.findOneAndUpdate({
//                 _id: req.params.tripId
//             },{
//                 name: req.body.name,
//                 location: req.body.location,
//                 fromDate: req.body.fromDate,
//                 toDate: req.body.toDate
//             })
//         }
//         const trip = await Trip.findById(req.params.tripId)
//         res.json(trip)    
//     } catch(err) {
//         console.log(err)
//     }
// })

router.delete('/:userId/trips/:tripId/tripExpenses/:tripExpensesId', async (req, res) =>{
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
