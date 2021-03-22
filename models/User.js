const mongoose = require('mongoose') 

const userSchema = new mongoose.Schema({
    username: String, 
    email: String,
    password: String, 
    firstName: String, 
    lastName: String,
    city: String   
})

//Step 2 - generate the model!

const User = mongoose.model('User', userSchema)


// step 3 - export it!
module.exports = User