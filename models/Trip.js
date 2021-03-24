const mongoose = require('mongoose')

const flightInfoSchema = new mongoose.Schema({
    airline: String,
    flightNumber: String,
    gate: String,
    seatId: String,
    boardingTime: String,
    departureTime: String,
    arrivalTime: String,
    departingCity: String,
    destination: String,
})

const lodgingInfoSchema = new mongoose.Schema({
    name: String, 
    address: String, 
    checkInTime: String, 
    checkOutTime: String, 
    contact: String, 
    reservationNumber: String, 
    checkInDate: String, 
    checkOutDate: String,  
})

const tripScheduleSchema = new mongoose.Schema({
    eventName: String,
    date: String,
    startTime: String,
    endTime: String,
    location: String,
    completed: Boolean
})

const notesSchema = new mongoose.Schema({
    title: String,
    date: String,
    content: String

})
const tripExpensesSchema = new mongoose.Schema({
    purchase: String, 
    cost: Number, 
    date: String
})
const tripChecklistSchema = new mongoose.Schema({
    title: String,
    date: new Date,
    clothing_and_accessories: [
        {
            itemName: String,
            checked: Boolean
        }
    ],
    toiletries: [
        {
            itemName: String,
            checked: Boolean
        }
    ],
    miscellaneous: [
        {
            itemName: String,
            checked: Boolean
        }
    ]
})

// Step 1 - Define the Schema
const tripSchema = new mongoose.Schema({
    name: String,
    location: String,
    fromDate: {
        type: Date
    },
    toDate: {
        type: Date
    },
    img:
    {
        data: Buffer,
        contentType: String
    }, 
    flightInfo: [flightInfoSchema], 
    lodgingInfo: [lodgingInfoSchema],
    tripSchedule: [tripScheduleSchema],
    notes: [notesSchema],
    tripExpenses: [tripExpensesSchema],
    tripChecklist: [tripChecklistSchema]
}, {
    timestamps: true
})

const Trip = mongoose.model('Trip', tripSchema)
const FlightInfo = mongoose.model('FlightInfo', flightInfoSchema)
const TripChecklist = mongoose.model('TripChecklist', tripChecklistSchema)

module.exports = { Trip, FlightInfo, TripChecklist }




