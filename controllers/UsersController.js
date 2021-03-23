const router = require('express').Router()
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')





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
        })
        await newUser.save()

        const payload = {
            username: newUser.username,
            email: newUser.email, 
            id: newUser.id
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60* 60})

        res.json({ token })
        
    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error'})
    }
})










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