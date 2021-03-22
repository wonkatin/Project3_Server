const mongoose = require('mongoose') 

const userSchema = new mongoose.Schema({
    username: String, 
    email: String,
    password: String, 
    firstName: String, 
    lastName: String,
    city: String, 
    DOB: {
        type: Date
    }, 
    img:
    {
        data: Buffer,
        contentType: String
    },
    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip'
    }]

})

//Step 2 - generate the model!

const User = mongoose.model('User', userSchema)


// step 3 - export it!
module.exports = User