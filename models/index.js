//require mongoose package
const mongoose = require('mongoose')

// mongoose config
const URL = process.env.MONGODB_URI || 'mongodb://localhost/test_tripTracker'

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
})

const db = mongoose.connection;

//db methods for debug
db.once('open', () => {
    console.log(`connected to mongoDB at ${db.host}:${db.port}`)
})

db.on('error', (error) => {
    console.error(error)
})
