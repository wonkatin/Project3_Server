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
                      'itemName': 'face mask',
                      'checked': false  
                    },
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
                    },
                    {
                      'itemName': 'boots',
                      'checked': false  
                    },
                    {
                      'itemName': 'sandals',
                      'checked': false  
                    },
                    {
                      'itemName': 'belts',
                      'checked': false  
                    },
                    {
                      'itemName': 'ties',
                      'checked': false  
                    },
                    {
                      'itemName': 'jewelry',
                      'checked': false  
                    },
                    {
                      'itemName': 'sunglasses',
                      'checked': false  
                    }
                ],
                'toiletries': [
                    {
                      'itemName': 'toothbrush',
                      'checked': false  
                    },
                    {
                      'itemName': 'toothpaste',
                      'checked': false  
                    },
                    {
                      'itemName': 'dental floss',
                      'checked': false  
                    },
                    {
                      'itemName': 'soap',
                      'checked': false  
                    },
                    {
                      'itemName': 'shampoo',
                      'checked': false  
                    },
                    {
                      'itemName': 'conditioner',
                      'checked': false  
                    },
                    {
                      'itemName': 'deodorant',
                      'checked': false  
                    },
                    {
                      'itemName': 'brush',
                      'checked': false  
                    },
                    {
                      'itemName': 'hairstyling accessories',
                      'checked': false  
                    },
                    {
                      'itemName': 'hairstyling tools',
                      'checked': false  
                    },
                    {
                      'itemName': 'lotion',
                      'checked': false  
                    },
                    {
                      'itemName': 'sunscreen',
                      'checked': false  
                    },
                    {
                      'itemName': 'contact lenses/solution',
                      'checked': false  
                    },
                    {
                      'itemName': 'shaving supplies',
                      'checked': false  
                    },
                    {
                      'itemName': 'makeup and accessories',
                      'checked': false  
                    },
                    {
                      'itemName': 'feminine-hygiene products',
                      'checked': false  
                    },
                    {
                      'itemName': 'nail file/clippers',
                      'checked': false  
                    },
                    {
                      'itemName': 'tweezers',
                      'checked': false  
                    },
                    {
                      'itemName': 'hand sanitizer',
                      'checked': false  
                    },
                    {
                      'itemName': 'first aid',
                      'checked': false  
                    },
                    {
                      'itemName': 'medications',
                      'checked': false  
                    },
                    {
                      'itemName': 'vitamins',
                      'checked': false  
                    },
                    {
                      'itemName': 'insect repellent',
                      'checked': false  
                    },,
                    {
                      'itemName': 'lint roller',
                      'checked': false  
                    }
                    
                ],
                'miscellaneous': [
                    {
                      'itemName': 'phone',
                      'checked': false  
                    },,
                    {
                      'itemName': 'laptop',
                      'checked': false  
                    },
                    {
                      'itemName': 'camera',
                      'checked': false  
                    },
                    {
                      'itemName': 'headphones',
                      'checked': false  
                    },
                    {
                      'itemName': 'electronic chargers',
                      'checked': false  
                    },
                    {
                      'itemName': 'cash',
                      'checked': false  
                    },
                    {
                      'itemName': 'credit cards',
                      'checked': false  
                    },
                    {
                      'itemName': 'travel documents',
                      'checked': false  
                    },
                    {
                      'itemName': 'voltage adaptors',
                      'checked': false  
                    },
                    {
                      'itemName': 'day bag, backpack or purses',
                      'checked': false  
                    },
                    {
                      'itemName': 'snacks',
                      'checked': false  
                    },
                    {
                      'itemName': 'journal',
                      'checked': false  
                    },
                    {
                      'itemName': 'books',
                      'checked': false  
                    },
                    {
                      'itemName': 'travel blanket',
                      'checked': false  
                    },
                    {
                      'itemName': 'travel pillow',
                      'checked': false  
                    },
                    {
                      'itemName': 'earplugs and eye mask',
                      'checked': false  
                    },
                    {
                      'itemName': 'flashlight',
                      'checked': false  
                    },
                    {
                      'itemName': 'batteries',
                      'checked': false  
                    },
                    {
                      'itemName': 'binoculars',
                      'checked': false  
                    },
                    {
                      'itemName': 'maps',
                      'checked': false  
                    },
                    {
                      'itemName': 'camping gear',
                      'checked': false  
                    },
                    {
                      'itemName': 'reusable water bottle',
                      'checked': false  
                    },
                    {
                      'itemName': 'games',
                      'checked': false  
                    },
                    
                ]
            }
        ]

    }
]