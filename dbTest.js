require('./models')
const User = require('./models/User')
const {Trip, FlightInfo} = require('./models/Trip')

async function createUserWithTrip() {
    let trip1 = await Trip.create({
        name: 'Weekend In The City',
        location: 'New York',
        flightInfo: [{
            airline: 'American',
            flightNumber: 'F3434',
            gate: 'A34',
            seatId: '3B',
            boardingTime: '6:45AM',
            departureTime: '7:25AM',
            arrivalTime: '11:30AM',
            departingCity: 'Denver',
            destination: 'New York'
        }],
        lodgingInfo: [{
            name: 'La Quinta', 
            address: "123 fake st", 
            checkInTime: "1:30pm", 
            checkOutTime: "1:30pm", 
            contact: "303-285-7677", 
            reservationNumber: "M4939", 
            checkInDate: "04/01/2021", 
            checkOutDate: "04/04/2021"  
        }],
        tripSchedule: [{
            eventName: 'Art Museum',
            date: "04/02/2021",
            startTime: '7:00AM',
            endTime: '9:00AM',
            location: '12323 main st',
            completed: true
        }],
        notes: [{
            title: 'Things to do',
            date: new Date(),
            content: 'go to restaurant'
        }],
        tripExpenses: [{
            purchase: 'Hot Dog',
            cost: 3.50,
            date: '04/03/2021'
        }]

    })
    const user = await User.create({
        username: 'Test1',
        email: 'test@mac.com',
        password: 'thisIsATest',
        firstName: 'James',
        lastName: 'Avery',
        city: 'Denver',
        DOB: '02/01/1996',
        img: '',
        trips: trip1
    })
    console.log(user)
}

// createUserWithTrip()