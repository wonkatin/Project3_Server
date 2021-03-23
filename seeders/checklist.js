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
        'model': 'Checklist',
        'documents' : [
            {
                'title': 'default list',
                'date': '',
                'clothing and accessories': [
                    {
                      'itemName': 'sleepwear',
                      'checked': false  
                    },
                    {
                      'itemName': 'underwear',
                      'checked': false  
                    },
                    {
                      'itemName': 'socks/stockings',
                      'checked': false  
                    },
                    {
                      'itemName': 'undershirts/bras',
                      'checked': false  
                    },
                    {
                      'itemName': 'pants',
                      'checked': false  
                    },
                    {
                      'itemName': 'shorts',
                      'checked': false  
                    },
                    {
                      'itemName': 'skirts',
                      'checked': false  
                    },
                    {
                      'itemName': 'dresses',
                      'checked': false  
                    },
                    {
                      'itemName': 't-shirts',
                      'checked': false  
                    },
                    {
                      'itemName': 'dress shirts',
                      'checked': false  
                    },
                    {
                      'itemName': 'sweaters/sweatshirts',
                      'checked': false  
                    },
                    {
                      'itemName': 'formal wear',
                      'checked': false  
                    },
                    {
                      'itemName': 'swimsuit',
                      'checked': false  
                    },
                    {
                      'itemName': 'coat/jacket/rainwear',
                      'checked': false  
                    },
                    {
                      'itemName': 'hat',
                      'checked': false  
                    },
                    {
                      'itemName': 'gloves',
                      'checked': false  
                    },
                    {
                      'itemName': 'scarf',
                      'checked': false  
                    },
                    {
                      'itemName': 'umbrella',
                      'checked': false  
                    },
                    {
                      'itemName': 'shoes',
                      'checked': false  
                    }
                ],
                'toiletries': [
                    {
                      'itemName': '',
                      'checked': false  
                    },
                    
                ],
                'miscellaneous': [
                    {
                      'itemName': '',
                      'checked': false  
                    },
                    
                ],
                'carry-on': [
                    {
                      'itemName': '',
                      'checked': false  
                    },
                    
                ]
            }
        ]

    }
]