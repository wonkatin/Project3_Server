require('./models')
const User = require('./models/User')

async function createUser() {
    let user = new User({
        username: 'test',
        email: 'test@test.com',
        password: 'test',
        firstName: 'Gabe',
        lastName: 'Bustos',
        city: 'Denver'
    })

    let savedUser = await user.save()
    console.log(savedUser)
}

// createUser()