const mongoose = require('mongoose')


const flightInfoSchema = new mongoose.Schema({
    airline: {
        type: String,
        default: ''
    },
    flightNumber: {
        type: String,
        default: ''
    },
    gate: {
        type: String,
        default: ''
    },
    seatId: {
        type: String,
        default: ''
    },
    boardingTime: {
        type: String,
        default: ''
    },
    departureTime: {
        type: String,
        default: ''
    },
    arrivalTime: {
        type: String,
        default: ''
    },
    departingCity: {
        type: String,
        default: ''
    },
    destination: {
        type: String,
        default: ''
    }
})

const lodgingInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    }, 
    address: {
        type: String,
        default: ''
    }, 
    checkInTime: {
        type: String,
        default: ''
    }, 
    checkOutTime: {
        type: String,
        default: ''
    }, 
    contact: {
        type: String,
        default: ''
    }, 
    reservationNumber: {
        type: String,
        default: ''
    }, 
    checkInDate: {
        type: String,
        default: ''
    }, 
    checkOutDate: {
        type: String,
        default: ''
    }  
})

const tripScheduleSchema = new mongoose.Schema({
    eventName: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        default: ''
    },
    startTime: {
        type: String,
        default: ''
    },
    endTime: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    }

})
const tripExpensesSchema = new mongoose.Schema({
    purchase: String, 
    cost: Number, 
    date: String
})
const tripChecklistSchema = new mongoose.Schema({
    items: [
        {
            itemName: String,
            checked: Boolean,
            category: String
        }
    ]
})

// Step 1 - Define the Schema
const tripSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: ''
    },
    fromDate: {
        type: String,
        default: ''
    },
    toDate: {
        type: String,
        default: ''
    },
    img:
    {
        data: Buffer,
        contentType: String,
        default: ''
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
const TripExpenses = mongoose.model('TripExpenses', tripExpensesSchema)
const Notes = mongoose.model('Notes', notesSchema)
const TripSchedule = mongoose.model('TripSchedule', tripScheduleSchema)
const LodgingInfo = mongoose.model('LodgingInfo', lodgingInfoSchema)

module.exports = { Trip, FlightInfo, TripChecklist, TripExpenses, Notes, TripSchedule, LodgingInfo }




