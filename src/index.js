const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express();

const port = process.env.PORT || 3000;

//middleware function to restric accesss 
// app.use((req,res,next) =>{
//     if(req.method === 'GET'){
//         res.send('GET requests are desabled')
//     }else{
//         //it is used to fwd the operations if not specified it won't get move fwd
//         next()
//     }

// })

// app.use((req,res,next) =>{
//     res.status(503).send('site is currenly down. check back soon!')
// })
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)





app.listen(port, () =>{
   
    console.log('Server is up and running in port'+port)
})



// const myFunction = async () =>{
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password,8)
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Red12345',hashedPassword);
//     console.log(isMatch)
// }
// myFunction()



// const myFunction = async() =>{
//     console.log('The token is')
//     const token = jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'7 Days'})
//     console.log(token)

//     const data = jwt.verify(token,'thisismynewcourse')
//     console.log(data)
// }
// myFunction()


// const Task = require('./models/task')
// const User = require('./models/user')

const main = async() => {
    const user = await User.findById('5eed357df15d8b4dc1697727')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()

