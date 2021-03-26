//require mongoose package
const mongoose = require('mongoose')

if(process.env.NODE_ENV === 'development'){
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
    
} else {
    //mongoDB Atlas code here
    const MongoClient = require('mongodb').MongoClient;

    const uri = process.env.ATLAS_URI

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
    //connect to orm
    mongoose.connect(uri, {
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
}
