import seeder from 'mongoose-seed'

seeder.connect('mongodb://localhost/test_tripTracker', function (){
    seeder.loadModels([
        // '../models/index.js',
        '../models/Trip.js',
        // '../models/User.js'
    ])
    seeder.clearModels(['Trip', 'User'])
    
    seeder.populateModels(data, function(error, done){
        if (error) {
            return console.log("seed error", error)
        }
        if (done) {
            return console.log("seed done", done)
        }
        seeder.disconnect()
    })
    
});

const data = [
    {
        'model': ''

    }
]