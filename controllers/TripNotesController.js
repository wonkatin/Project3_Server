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

router.post('/:userId/trips/:tripId/notes', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            if(trip){
                const newNote = await Notes.create({
                    title: req.body.title,
                    date: new Date,
                    content: req.body.content
                })
                trip.notes.push(newNote)
                await trip.save()
                res.json(newNote)
            }      
        }
    } catch(err) {
        console.log(err)
    }
})

router.delete('/:userId/trips/:tripId/notes/:noteId', async (req, res) =>{
    try{
        const user = await User.findById(req.params.userId)
        if(user){
            const trip = await Trip.findById(req.params.tripId)
            if(trip){
                const deletedNote = await trip.notes.id(req.params.noteId).remove()
                await trip.save()
                res.json({ msg: 'Deleted Note'})
            } 
        }
        
    } catch(err) {
        console.log(err)
    }
})




module.exports = router