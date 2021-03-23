const router = require('express').Router()
const User = require('../models/User.js')
const Trip = require('../models/Trip.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authLockedRoute = require('./authLockedRoute')





router.get('/', (req, res) => {
    res.json({ msg:'hello from users!'})
})

router.post('/register', async (req, res) =>{
    try{
        const findUser = await User.findOne({
            email: req.body.email
        })
        if(findUser) return res.status(400).json({ msg: 'email already exists'})
        
        const password = req.body.password
        const saltRounds = 12
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const newUser = new User({
            username: req.body.username, 
            email: req.body.email, 
            password: hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            DOB: req.body.DOB,
            img: req.body.img, 
        })
        await newUser.save()

        const payload = {
            username: newUser.username,
            email: newUser.email, 
            id: newUser.id
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60 * 60})

        res.json({ token })
        
    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error'})
    }
})


router.post('/login', async (req, res) =>{
    try{
        const foundUser = await User.findOne({
            email: req.body.email
        })

        const noLoginMessage = 'Incorrect username or password'
        if(!foundUser) return res.status(400).json({ msg: noLoginMessage })

        const matchPassword = await bcrypt.compare(req.body.password, foundUser.password)

        if(!matchPassword) return res.status(400).json({ msg: noLoginMessage })

        const payload = {
            username: foundUser.username, 
            email: foundUser.email,
            id: foundUser.id
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 60 * 60 })
        res.json({ token })
    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'server error'})
    }
})








router.get('/:userId/profile', async (req, res) =>{
    try{
        id = req.params.userId
        const user = await User.findById(id)
        console.log(user)
        res.json({ msg:'hello from get users/:userId/profile!'})


    } catch(err) {
        console.log(err)
    }
})

router.put('/:userId/profile', async (req, res) =>{
    try{
        console.log(req.params.userId)
        const updatedUser = await User.findByIdAndUpdate({
            _id: req.params.userId
        }, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            DOB: req.body.DOB,
            img: req.body.img, 
        })
        res.json({ msg:'hello from put users/:userId/profile'})


    } catch(err) {
        console.log(err)
    }
})









// router.get('/:userId/trips', async (req, res) =>{
//     try{


//     } catch(err) {
//         console.log(err)
//     }
// })







// router.post('/register', async (req, res) =>{
//     try{

//     } catch(err) {
//         console.log(err)
//     }
// })
// router.post('/register', async (req, res) =>{
//     try{

//     } catch(err) {
//         console.log(err)
//     }
// })
// router.post('/register', async (req, res) =>{
//     try{

//     } catch(err) {
//         console.log(err)
//     }
// })



module.exports = router