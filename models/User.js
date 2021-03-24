const mongoose = require('mongoose') 

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    firstName: {
        type: String,
        required: false, 
        default: ''
    }, 
    lastName: {
        type: String,
        required: false,
        default: ''
    },
    city: {
        type: String,
        required: false,
        default: ''
    }, 
    DOB: {
        type: Date,
        required: false,
        default: new Date
    }, 
    img:
    {
        data: Buffer,
        contentType: String,
        required: false
    },
    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip',
        required: false
    }]

})

//Step 2 - generate the model!

const User = mongoose.model('User', userSchema)


// step 3 - export it!
module.exports = User